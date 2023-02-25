import styled from '@emotion/styled';
import { css } from '@emotion/core';
import isPropValid from '@emotion/is-prop-valid';
import { lighten } from 'polished';
import { Link } from 'react-router-dom';

export const Wrapper = styled.div`
  min-height: 800px;
`;

export const DiscoverNav = styled.div`
  padding-bottom: 5px;
`;

const activeNavStyles = css`
  color: white;

  &::after {
    content: '';
    bottom: -10px;
    left: 0px;
    width: 100%;
    height: 3px;
    background: ${lighten(0.2, '#910048')};
    position: absolute;
  }
`;

export const NavLink = styled(Link, {
  shouldForwardProp: (prop) => isPropValid(prop) && !['isActive'].includes(prop),
})`
  font-size: 20px;
  font-weight: 300;
  color: rgba(255, 255, 255, 0.5);
  text-transform: uppercase;
  margin: 0 12px;
  position: relative;
  display: inline-block;
  text-decoration: none;
  ${({ isActive }) => (isActive ? activeNavStyles : null)}

  &:hover {
    color: white;
  }
`;

export const ArtistImage = styled.div`
  display: block;
  width: 240px;
  height: 240px;
  margin: 0 auto 20px;
  border-radius: 50%;
  background-color: rgba(0, 0, 0, 0.5);
  background-image: url(${({ bgImage }) => bgImage});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.3);
`;

export const ArtistName = styled.h1`
  color: #ffffff;
  font-weight: bold;
  font-size: 48px;
  text-align: center;
  display: block;
  text-transform: none;
`;

export const FollowWrapper = styled.div`
  display: flex;
  align-items: center;
  margin: 24px 0;
  justify-content: center;
  max-width: 100vw;
`;

export const FollowButton = styled.div`
  background: #910048;
  border: 1px solid #910048;
  border-radius: 20px;
  padding: 4px 30px;
  color: #fff;
  text-transform: uppercase;
  font-size: 12px;
  cursor: pointer;
  margin-right: 12px;

  &:hover {
    border: 1px solid #ea1680;
  }

  &:active {
    border: 1px solid #33001a;
  }
`;

export const FollowIconWrapper = styled.button`
  width: 40px;
  background: #444444;
  border: 1px solid #444444;
  border-radius: 12px;
  padding: 3px;
  cursor: pointer;
  &:focus {
    outline: none !important;
  }
`;

export const FollowIcon = styled.img`
  margin-bottom: -3px;
  width: 16px;
  height: 16px;
`;

export const FlexWrapper = styled.div`
  padding: 20px 12px 0 12px;
  display: flex;
  flex-wrap: wrap;

  @media (min-width: 800px) {
    padding: 20px 24px 0 24px;
  }
`;

export const GridItem = styled.div`
  margin: 12px;

  @media (max-width: 499px) {
    flex-basis: calc(${(1 / 1) * 100}% - 24px);
    max-width: calc(${(1 / 1) * 100}% - 24px);
  }

  @media (min-width: 500px) {
    flex-basis: calc(${(1 / 2) * 100}% - 24px);
    max-width: calc(${(1 / 2) * 100}% - 24px);
  }
  @media (min-width: 800px) {
    margin: 24px;
    flex-basis: calc(${(1 / 2) * 100}% - 48px);
    max-width: calc(${(1 / 2) * 100}% - 48px);
  }
  @media (min-width: 1000px) {
    flex-basis: calc(${(1 / 2) * 100}% - 48px);
    max-width: calc(${(1 / 2) * 100}% - 48px);
  }
`;
