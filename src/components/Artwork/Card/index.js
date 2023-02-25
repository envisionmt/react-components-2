import React, { useEffect, useState, useRef } from 'react';
import PropTypes from 'prop-types';
import { VideoPlayer } from '@envision/player';
import Web3 from 'web3';
import { useDispatch } from 'react-redux';
import { useDrag } from 'react-dnd';
import { Star as StarOutline, Play, Menu, Trash } from '@emotion-icons/ionicons-outline';
import { Star as StarSolid, Add } from '@emotion-icons/ionicons-solid';
import { useNotifications } from 'reapop';

// Components
import { MoreButton } from './components/MoreButton';
import arrowLeftIcon from '../../Images/ArrowLeft.svg';

// Hooks
import { useFavoritesCollection, useManyCollections } from '../../../hooks/data';
import {
  useAddFavorite,
  useRemoveFavorite,
  useRemoveFromCollection,
  useAddToCollection,
  useDeleteArtwork,
} from '../../../hooks/mutations';
import { useMenuClickOutside } from '../../../hooks/useMenuClickOutside';
import useHover from '../../../hooks/useHover';

// Actions
import { openDeviceMenu } from '../../../store/deviceMenu/actions';
import { openMainMenu } from '../../../store/mainMenu/actions';

// Assets
import LoadingImage from '../../../assets/images/loading.svg';

// Styled
import {
  Wrapper,
  ThumbnailContainer,
  ThumbnailAspectRatioBox,
  ArtTitleWrapper,
  ArtworkTitle,
  ArtistWrapper,
  PlayableWrapper,
  FavoriteButton,
  PlayButton,
  PurchaseWrapper,
  UpperWrapper,
  LowerWrapper,
  CTA,
  NavMenu,
  SubNavMenu,
  Icon,
  RemoveButton,
  AddMenu,
  AddButton,
} from './styled';

export function ArtworkCard({ artwork, collectionId, isCollectionPlayable, isOwner }) {
  const dispatch = useDispatch();
  const { notify } = useNotifications();
  const [ref, isHovered] = useHover();

  const [{ isDragging }, drag] = useDrag({
    type: 'artwork',
    item: { id: artwork.id },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  });

  useEffect(() => {
    if (isDragging) dispatch(openMainMenu());
  }, [isDragging]);

  const favorites = useFavoritesCollection('favorites');
  const [isFavorite, setIsFavorite] = useState(() => {
    return favorites.isFetched ? favorites.data?.artwork?.map((a) => a.id).includes(artwork.id) : false;
  });

  const navRef = useRef(null);
  const subNavRef = useRef(null);
  const addRef = useRef(null);
  const [isActive, setIsActive] = useMenuClickOutside(navRef, false);
  const [isSubActive, setIsSubActive] = useMenuClickOutside(subNavRef, false);
  const [isAddActive, setIsAddActive] = useMenuClickOutside(addRef, false);

  const userCollections = useManyCollections('userCollections');
  const addToCollection = useAddToCollection();
  const addFavoriteMutation = useAddFavorite();
  const removeFavoriteMutation = useRemoveFavorite();
  const removeFromCollectionMutation = useRemoveFromCollection();
  const deleteArtworkMutation = useDeleteArtwork();

  const tokensAvailable = artwork.tokenMetadata.total - artwork.tokenMetadata.purchased;

  // Checks if this is a favorite on favorites change
  useEffect(() => {
    setIsFavorite(() => {
      return favorites.isFetched ? favorites.data?.artwork?.map((a) => a.id).includes(artwork.id) : false;
    });
  }, [favorites]);

  const handleToggleFavorite = () => {
    if (isFavorite) {
      removeFavoriteMutation.mutate({ id: artwork.id });
    } else {
      addFavoriteMutation.mutate({ id: artwork.id });
    }
  };

  const handlePlay = () => {
    dispatch(openDeviceMenu({ artworkId: artwork.id, playlistId: collectionId }));
  };

  const handleCollections = () => {
    setIsSubActive(!isSubActive);
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(`https://envision.com/artwork/${artwork.slug}`);
    notify({
      status: 'success',
      title: 'Copied to Clipboard',
      message: 'The share link for this artwork was copied to your clipboard.',
    });
  };

  const handleRemove = () => {
    if (isOwner) {
      removeFromCollectionMutation.mutate({ id: collectionId, artworkId: artwork.slug || artwork.id });
    }
  };

  const handleRemoveUpload = () => {
    deleteArtworkMutation.mutate({ id: artwork.id, collectionId });
  };

  return (
    <>
      <Wrapper>
        <UpperWrapper>
          <ThumbnailContainer to={`/artwork/${artwork.slug || artwork.id}`} ref={drag}>
            <ThumbnailAspectRatioBox ref={ref}>
              {artwork.sourceFile?.status !== 'COMPLETED' && (
                <>
                  <img src={LoadingImage} alt="Incomplete" />
                </>
              )}
              {artwork.sourceFile?.status === 'COMPLETED' && (
                <VideoPlayer
                  videoUrl={artwork.media?.video.hls}
                  posterUrl={artwork.media?.image.low.landscape}
                  artistName=""
                  initialize={isHovered}
                  rotate={artwork?.orientation === 'portrait'}
                  autoplay={isHovered}
                  muted
                  showLogo={false}
                  showLoading={false}
                />
              )}
            </ThumbnailAspectRatioBox>
          </ThumbnailContainer>
          <ArtTitleWrapper>
            <ArtworkTitle>{artwork.name}</ArtworkTitle>
            <ArtistWrapper to={`/artists/${artwork.artist.slug || artwork.artist.id}`}>
              <img src={artwork.artist.media.images.avatar} alt={artwork.artist.displayName} />
              <span>{artwork.artist.displayName}</span>
            </ArtistWrapper>
          </ArtTitleWrapper>
          {artwork.artworkType === 'USER_UPLOAD' && (
            <RemoveButton type="button" alt="Delete" onClick={handleRemoveUpload}>
              <Trash size="30px" />
            </RemoveButton>
          )}
        </UpperWrapper>
        <LowerWrapper>
          {artwork.playable && (
            <PlayableWrapper>
              <FavoriteButton onClick={handleToggleFavorite}>
                {isFavorite && <StarSolid size={25} />}
                {!isFavorite && <StarOutline size={25} />}
              </FavoriteButton>

              {isCollectionPlayable && (
                <PlayButton onClick={handlePlay}>
                  <Play size={32} />
                </PlayButton>
              )}

              {!isCollectionPlayable && (
                <AddButton type="button" onClick={() => setIsAddActive(!isAddActive)} alt="Add to Collection">
                  <Add size={36} />
                </AddButton>
              )}

              <MoreButton onClick={() => setIsActive(!isActive)}>
                <Menu size={26} />
              </MoreButton>
            </PlayableWrapper>
          )}

          {artwork.artworkType === 'NFT' && !artwork.playable && (
            <PurchaseWrapper to={`/artwork/${artwork.slug || artwork.id}`}>
              <CTA className="left">
                <div className="header">Price</div>
                <div className="sub">
                  {tokensAvailable > 0 ? `${Web3.utils.fromWei(artwork.tokenMetadata.price)} ETH` : 'Sold Out'}
                </div>
              </CTA>
              <CTA className="right">
                <div className="header">Editions</div>
                <div className="sub">{artwork?.tokenMetadata?.total}</div>
              </CTA>
            </PurchaseWrapper>
          )}

          {artwork.artworkType === 'OPEN' && !artwork.playable && (
            <PurchaseWrapper to={`/artwork/${artwork.slug || artwork.id}`}>
              <CTA>
                <div className="header">Price</div>
                <div className="sub">${artwork?.products?.[0]?.price}</div>
              </CTA>
            </PurchaseWrapper>
          )}
        </LowerWrapper>
      </Wrapper>
      <NavMenu ref={navRef} visible={isActive}>
        <div>
          <ul>
            <button type="button" onClick={handleCollections}>
              <Icon src={arrowLeftIcon} />
              Add to collection
            </button>
            <SubNavMenu ref={subNavRef} visible={isSubActive}>
              <ul>
                {userCollections?.data?.collections.map((collection) => (
                  <button
                    key={collection.id}
                    type="button"
                    onClick={() => addToCollection.mutate({ id: collection.id, artworkId: artwork.id })}
                  >
                    {collection.name}
                  </button>
                ))}
              </ul>
            </SubNavMenu>
            <button type="button" onClick={handleCopy}>
              Share
            </button>
            {isOwner && (
              <>
                <button type="button" onClick={handleRemove}>
                  Delete
                </button>
              </>
            )}
          </ul>
        </div>
      </NavMenu>
      <AddMenu ref={addRef} visible={isAddActive}>
        <div>
          <ul>
            {userCollections?.data?.collections.map((collection) => (
              <button
                key={collection.id}
                type="button"
                onClick={() => addToCollection.mutate({ id: collection.id, artworkId: artwork.id })}
              >
                {collection.name}
              </button>
            ))}
          </ul>
        </div>
      </AddMenu>
    </>
  );
}

ArtworkCard.propTypes = {
  artwork: PropTypes.object.isRequired,
  collectionId: PropTypes.string.isRequired,
  isCollectionPlayable: PropTypes.bool.isRequired,
  isOwner: PropTypes.bool.isRequired,
};
