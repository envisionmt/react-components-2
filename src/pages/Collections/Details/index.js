import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { Helmet } from 'react-helmet';

// Components
import { Loader } from '../../../components/Loader';
import { InfiniteSingleCollectionGrid } from '../../../components/Artwork/InfiniteGrid';
import CollectionHeader from '../../../components/CollectionHeader';

// Hooks
import { useUser, useSingleCollection, useManyCollections } from '../../../hooks/data';
import {
  useFollowCollection,
  useSubmitDiscovery,
  useUnfollowCollection,
  useResyncWallets,
} from '../../../hooks/mutations';

// Actions
import { openDeviceMenu } from '../../../store/deviceMenu/actions';
import { openModal } from '../../../store/app/actions';

// Styled
import { RootWrapper, LowerWrapper } from './styled';

export function CollectionDetails() {
  const dispatch = useDispatch();
  const { id } = useParams();
  const isPersonalOrNFT = ['nft', 'personal'].includes(id);
  const user = useUser();
  const paginatedCollection = useSingleCollection(id, {
    type: isPersonalOrNFT ? 'incomplete' : 'complete',
  });
  const followedCollections = useManyCollections('followedCollections', '/followed');
  const [collection, setCollection] = useState(null);
  const [isFollowing, setIsFollowing] = useState(false);
  const [isOwner, setIsOwner] = useState(false);

  const discoveryMutation = useSubmitDiscovery();
  const followCollectionMutation = useFollowCollection();
  const unfollowCollectionMutation = useUnfollowCollection();
  const resyncWalletsMutation = useResyncWallets();

  useEffect(() => {
    if (paginatedCollection.isFetched) {
      setCollection(paginatedCollection.data?.pages?.[0]?.collection);
    }
  }, [paginatedCollection]);

  // Checks if this collection is in followed
  useEffect(() => {
    setIsFollowing(() => {
      return followedCollections.isFetched
        ? followedCollections?.data?.collections?.map((c) => c.id).includes(id)
        : false;
    });
  }, [followedCollections?.data]);

  // Checks if this collection is owned by the current user
  useEffect(() => {
    setIsOwner(() => {
      return user.isFetched && paginatedCollection.isFetched ? user.data?.user?.id === collection?.creator?.id : false;
    });
  }, [user?.data, collection]);

  const handlePlay = () => {
    if (collection?.artwork?.length > 0 && collection?.artwork?.[0].playable) {
      dispatch(openDeviceMenu({ artworkId: collection?.artwork?.[0]?.id, playlistId: id }));
    }
  };

  const handleEdit = () => {
    if (isOwner && id !== 'favorites') dispatch(openModal({ modal: 'COLLECTION', params: { id } }));
  };

  const handleAddDiscovery = () => {
    discoveryMutation.mutate({ collectionId: id });
  };

  const handleFollow = async () => {
    if (followedCollections.isFetching) return;
    await followCollectionMutation.mutateAsync({ id, userId: user?.data?.user?.id });
    setIsFollowing(true);
  };

  const handleUnfollow = async () => {
    if (followedCollections.isFetching) return;
    await unfollowCollectionMutation.mutateAsync({ id, userId: user?.data?.user?.id });
    setIsFollowing(false);
  };

  const handleUpload = async () => {
    dispatch(openModal({ modal: 'ADD_NEW_UPLOAD' }));
  };

  const handleAddWallet = async () => {
    dispatch(openModal({ modal: 'ADD_WALLET' }));
  };

  const handleWalletRefresh = async () => {
    resyncWalletsMutation.mutate();
  };

  return (
    <RootWrapper>
      {paginatedCollection.isLoading && <Loader />}
      {paginatedCollection.isFetched && collection && (
        <>
          <Helmet>
            <meta property="og:site_name" content={collection?.name} />
            <meta property="og:title" content={collection?.name} />
            <meta property="og:description" content="envision - Digital Canvas NFT Artwork Displays" />
            <meta property="og:image" content={collection?.media?.images?.thumbnail} />
            <meta property="og:url" content={`https://envision.com/collections/${collection?.id}`} />

            <meta name="twitter:card" content="summary" />
            <meta name="twitter:site" content="@envision" />
            <meta name="twitter:url" content="<%= meta.appUrl %>" />
            <meta name="twitter:title" content={collection?.name} />
            <meta name="twitter:description" content="envision - Digital Canvas NFT Artwork Displays" />
            <meta name="twitter:image:alt" content="envision Logo" />
          </Helmet>
          <CollectionHeader
            id={id}
            image={collection?.media?.images?.thumbnail}
            creator={collection?.creator}
            user={user}
            name={collection?.name}
            total={collection?.total}
            followerCount={collection?.followerCount}
            artwork={collection?.artwork}
            description={collection?.description}
            collectionType={collection.playlistType}
            isFollowing={isFollowing}
            handleUnfollow={handleUnfollow}
            handleFollow={handleFollow}
            handleAddDiscovery={handleAddDiscovery}
            handleEdit={handleEdit}
            handlePlay={handlePlay}
            handleUpload={handleUpload}
            handleAddWallet={handleAddWallet}
            handleWalletRefresh={handleWalletRefresh}
          />
        </>
      )}
      <LowerWrapper>
        <InfiniteSingleCollectionGrid
          id={id}
          queryParams={{ type: isPersonalOrNFT ? 'incomplete' : 'complete' }}
          isOwner={isOwner}
        />
      </LowerWrapper>
    </RootWrapper>
  );
}
