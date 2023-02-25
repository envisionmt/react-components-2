import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';

// Components
import { HeaderSplash } from '../HeaderSplash';
import { Button } from '../Button';
import { WalletList } from '../Wallets/WalletList';

// Actions
import { openModal } from '../../store/app/actions';

// Hooks
import { useDeleteCollection } from '../../hooks/mutations';
import { useMenuClickOutside } from '../../hooks/useMenuClickOutside';
import { useAllWallets } from '../../hooks/data';

// Assets
import bdlogo from '../../assets/images/bd-logo-dove.svg';
import dots from '../../assets/images/More.svg';

// Styled
import {
  SplashWrapper,
  CollectionInfoWrapper,
  InteractionWrapper,
  VideoAspectRatioBoxHeader,
  CollectionPic,
  CollectionPicWrapper,
  CollectionTitle,
  ButtonWrapper,
  MetadataWrapper,
  CollectionDescription,
  Dropdown,
} from './styled';

const CollectionHeader = ({
  id,
  image,
  creator,
  name,
  user,
  total,
  artwork,
  followerCount,
  description,
  collectionType,
  isFollowing,
  handlePlay,
  handleFollow,
  handleUnfollow,
  handleAddDiscovery,
  handleUpload,
  handleAddWallet,
  handleWalletRefresh,
}) => {
  const [more, setMore] = React.useState(false);
  const dropRef = useRef(null);
  const [isActive, setIsActive] = useMenuClickOutside(dropRef, false);
  const dispatch = useDispatch();
  const wallets = useAllWallets();
  const deleteCollection = useDeleteCollection();

  const handleEditCollection = () => {
    dispatch(openModal({ modal: 'COLLECTION', params: { id, name, description, image } }));
  };

  const handleReorder = () => {
    dispatch(openModal({ modal: 'ORDER_ARTWORK', params: { id } }));
  };

  const handleDeleteCollection = () => {
    if (confirm('Are you sure you want to delete this playlist?')) {
      deleteCollection.mutate({ id });
    }
  };

  return (
    <>
      <SplashWrapper>
        <VideoAspectRatioBoxHeader>
          <img src={artwork?.[0]?.media?.image?.low?.landscape} alt="header splash" />
        </VideoAspectRatioBoxHeader>
        <CollectionPicWrapper>
          <CollectionPic>
            <img src={image || bdlogo} alt="collection" />
          </CollectionPic>
        </CollectionPicWrapper>
      </SplashWrapper>
      <HeaderSplash padding="0" paddingLarge="0">
        <InteractionWrapper>
          <MetadataWrapper xsUp="true">
            <span>{total || 0} Artworks</span>
            <span>{followerCount || 0} Followers</span>
          </MetadataWrapper>
          {collectionType === 'STANDARD' && (
            <>
              {creator?.id === user?.data?.user?.id && (
                <>
                  <Dropdown isActive={isActive} ref={dropRef}>
                    <Button type="button" onClick={() => setIsActive(!isActive)}>
                      <img src={dots} alt="more" />
                    </Button>
                    <div className="cards">
                      <button className="button" type="button" onClick={handleEditCollection}>
                        Edit
                      </button>
                      <button className="button" type="button" onClick={handleDeleteCollection}>
                        Delete
                      </button>
                    </div>
                  </Dropdown>
                  <Button type="button" color="red" onClick={handleReorder}>
                    Reorder
                  </Button>
                  <Button type="button" color="red" className="more" onClick={handleAddDiscovery}>
                    Submit for discovery
                  </Button>
                </>
              )}
              {!isFollowing && creator?.id !== user?.data?.user?.id && (
                <Button type="button" color="red" onClick={handleFollow}>
                  Follow
                </Button>
              )}
              {isFollowing && creator?.id !== user?.data?.user?.id && (
                <Button type="button" onClick={handleUnfollow}>
                  Unfollow
                </Button>
              )}
            </>
          )}
        </InteractionWrapper>
        <CollectionInfoWrapper>
          <CollectionTitle>{name}</CollectionTitle>
          {description && (
            <CollectionDescription>
              {more ? description : description.slice(0, 200)}
              <button type="button" onClick={() => setMore(!more)}>
                {description > 200 && (more ? '...Show less' : '...Show more')}
              </button>
            </CollectionDescription>
          )}

          {collectionType === 'NFT_IMPORT' && wallets.isFetched && <WalletList wallets={wallets} />}

          {collectionType !== 'NFT_IMPORT' && (
            <MetadataWrapper>
              <p>Curated by</p>
              <div>{creator?.displayName}</div>
            </MetadataWrapper>
          )}

          <ButtonWrapper>
            {collectionType === 'STANDARD' && (
              <Button color="red" onClick={handlePlay}>
                Play
              </Button>
            )}

            {collectionType === 'USER_UPLOAD' && creator?.id === user?.data?.user?.id && (
              <Button type="button" color="red" onClick={handleUpload}>
                Add New
              </Button>
            )}

            {collectionType === 'NFT_IMPORT' && creator?.id === user?.data?.user?.id && (
              <>
                {wallets.isFetched && wallets.data.length > 0 && (
                  <Button type="button" color="red" onClick={handleWalletRefresh}>
                    Resync Wallets
                  </Button>
                )}
                {!wallets.isFetched ||
                  (wallets.data.length === 0 && (
                    <Button type="button" color="red" onClick={handleAddWallet}>
                      Add Wallet
                    </Button>
                  ))}
              </>
            )}
          </ButtonWrapper>
          <MetadataWrapper mDown="true">
            <span>{artwork ? artwork.length : 0} Artworks</span>
            <span>{followerCount || 0} Followers</span>
          </MetadataWrapper>
        </CollectionInfoWrapper>
      </HeaderSplash>
    </>
  );
};
export default CollectionHeader;

CollectionHeader.propTypes = {
  id: PropTypes.number.isRequired,
  creator: PropTypes.object.isRequired,
  name: PropTypes.string.isRequired,
  user: PropTypes.object,
  total: PropTypes.number,
  artwork: PropTypes.object.isRequired,
  followerCount: PropTypes.number.isRequired,
  image: PropTypes.string,
  description: PropTypes.string,
  collectionType: PropTypes.string.isRequired,
  isFollowing: PropTypes.bool.isRequired,
  handlePlay: PropTypes.func.isRequired,
  handleFollow: PropTypes.func.isRequired,
  handleUnfollow: PropTypes.func.isRequired,
  handleAddDiscovery: PropTypes.func.isRequired,
  handleUpload: PropTypes.func.isRequired,
  handleAddWallet: PropTypes.func.isRequired,
  handleWalletRefresh: PropTypes.func.isRequired,
};

CollectionHeader.defaultProps = {
  image: null,
  description: null,
  user: null,
  total: null,
};
