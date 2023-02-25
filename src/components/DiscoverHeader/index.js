import React from 'react';
import PropTypes from 'prop-types';
import { useHistory, useLocation } from 'react-router-dom';
import Search from '../../assets/images/icons/Search.svg';

// Components
import { HeaderSplash } from '../HeaderSplash';

// Styled
import { Wrapper, NavLink, TabWrapper, Divider, SearchWrapper, SearchItem } from './styled';

export function DiscoverHeader({ activeLink, artistNames }) {
  const history = useHistory();
  const { pathname } = useLocation();
  const [open, setOpen] = React.useState(false);

  const handleSearch = () => {
    setOpen(!open);
  };
  const handleMore = () => {
    if (artistNames?.hasNextPage) {
      artistNames?.fetchNextPage();
    }
  };

  return (
    <>
      <Wrapper>
        <HeaderSplash height="10vh" />
        <TabWrapper>
          {pathname === '/artists' && (
            <button type="button" onClick={handleSearch}>
              <img src={Search} alt="search" />
            </button>
          )}
          <NavLink to="/artists" isActive={activeLink === 'artists'}>
            Artists
          </NavLink>
          <Divider />
          <NavLink to="/collections" isActive={activeLink === 'collections'}>
            Collections
          </NavLink>
          <Divider />
          <NavLink to="/artwork/latest" isActive={activeLink === 'latest'}>
            Latest
          </NavLink>
        </TabWrapper>
        {open && (
          <SearchWrapper>
            {artistNames?.data?.pages?.map((page) => (
              <React.Fragment key={`page-${page.nextOffset}`}>
                {page.artists?.map((artist) => (
                  <SearchItem onClick={() => history.push(`/artists/${artist.slug ? artist.slug : artist.id}`)}>
                    {artist.displayName}
                  </SearchItem>
                ))}
              </React.Fragment>
            ))}
            {(artistNames.isFetchingNextPage || artistNames.isLoading || artistNames.hasNextPage) && (
              <SearchItem color="red" onClick={handleMore}>
                ...More
              </SearchItem>
            )}
          </SearchWrapper>
        )}
      </Wrapper>
    </>
  );
}

DiscoverHeader.propTypes = {
  activeLink: PropTypes.string.isRequired,
  artistNames: PropTypes.object.isRequired,
};
