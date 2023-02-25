import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import {
  Home,
  People,
  Image,
  Albums,
  AddCircle,
  Cart,
  Wallet,
  CloudUpload,
  Pricetags,
} from '@emotion-icons/ionicons-outline';

// Components
import { NavMenu } from './components/NavMenu';
import { NavItem } from './components/NavItem';
import { CollectionMenu } from './components/CollectionMenu';

// Hooks
import { useManyCollections, useUser } from '../../../../../hooks/data';
import { useClickOutside } from '../../../../../hooks/useClickOutside';

// Actions
import { openModal } from '../../../../../store/app/actions';
import { closeMainMenu, openMainMenu } from '../../../../../store/mainMenu/actions';
import { toggleSigninMenu } from '../../../../../store/signinMenu/actions';

// Assets
import artist from '../../../../../assets/images/icons/Artist.svg';

// Styled
import { Wrapper, AddCollectionButton, NavPaper } from './styled';

export function MainMenu() {
  const dispatch = useDispatch();
  const location = useLocation();
  const user = useUser();
  const mainMenu = useSelector((state) => state.mainMenu);
  const userCollections = useManyCollections('userCollections', '', 100);
  const followedCollections = useManyCollections('followedCollections', '/followed', 100);
  const ref = React.useRef(null);
  const [isActive] = useClickOutside(ref, false, mainMenu.menuOpen);

  useEffect(() => {
    if (user.status !== 'success') {
      dispatch(closeMainMenu());
    }

    if (user.status === 'success') {
      if (window.innerWidth < 1024) {
        dispatch(closeMainMenu());
      }
      if (window.innerWidth >= 1024) {
        dispatch(openMainMenu());
      }
    }
  }, [user.status]);

  useEffect(() => {
    if (window.innerWidth < 1024) {
      if (isActive) {
        dispatch(closeMainMenu());
      }
    }
  }, [isActive]);

  const handleAddCollection = () => {
    dispatch(openModal({ modal: 'COLLECTION', params: {} }));
  };

  const handleToggle = () => {
    dispatch(toggleSigninMenu());
  };

  useEffect(() => {}, [location]);

  return (
    <Wrapper open={mainMenu.menuOpen} touched={mainMenu.touched} ref={ref}>
      <NavPaper>
        <NavMenu>
          {/* Logged Out Nav Items */}
          {!user.isFetched && (
            <>
              <NavItem to="/" icon={Home} label="Home" activeFor={['!/', '/home']} />
              <NavItem to="/shop" icon={Image} label="Digital Canvas" href="https://canvas.envision.com" />
              <NavItem to="/pricing" icon={Pricetags} label="Pricing" activeFor={['/pricing']} />
              <NavItem to="/marketplace" icon={Cart} label="NFT Artwork" />
              <NavItem to="/artists" icon={People} label="Artists" />
              <NavItem to="/collections" icon={Albums} label="Collections" />
            </>
          )}
          {/* Logged In Nav Items */}
          {user.isFetched && user.data && (
            <>
              <NavItem to="/collections" icon={Home} label="Home" activeFor={['!/', '!/home', '!/collections']} />
              {user.data?.user?.artist?.id && (
                <NavItem icon={artist} label="Portal" to="/portal" href="https://artist.envision.com" />
              )}
              <NavItem to="/shop" icon={Image} label="Digital Canvas" href="https://canvas.envision.com" />
              <NavItem to="/pricing" icon={Pricetags} label="Pricing" activeFor={['/pricing']} />
              <NavItem to="/marketplace" icon={Cart} label="NFT Artwork" />
              <NavItem to="/artists" icon={People} label="Artists" />
              <NavItem to="/collections" icon={Albums} label="Collections" activeFor={['!/collections']} />
              <NavItem to="/collections/nft" icon={Wallet} label="NFT Sync" />
              <NavItem to="/collections/personal" icon={CloudUpload} label="My Uploads" />
            </>
          )}
          {user.isFetched && user.data ? (
            <>
              <CollectionMenu collections={userCollections} title="Your Collections" droppable />
              <CollectionMenu collections={followedCollections} title="Followed Collections" />
              <AddCollectionButton onClick={handleAddCollection} open={mainMenu.menuOpen} touched={mainMenu.touched}>
                <AddCircle size={25} />
                <span>New Collection</span>
              </AddCollectionButton>
            </>
          ) : (
            <AddCollectionButton onClick={handleToggle} open={mainMenu.menuOpen} touched={mainMenu.touched}>
              <span>Login / Signup</span>
            </AddCollectionButton>
          )}
        </NavMenu>
      </NavPaper>
    </Wrapper>
  );
}
