import styled from '@emotion/styled';
import { css } from '@emotion/core';
import isPropValid from '@emotion/is-prop-valid';
import { lighten } from 'polished';

export const Wrapper = styled.div``;

export const DiscoverNav = styled.div`
  text-align: center;
  padding: 20px;
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

export const NavLink = styled('a', {
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
  cursor: pointer;
  ${({ isActive }) => (isActive ? activeNavStyles : null)}

  &:hover {
    color: white;
  }
`;

export const ContentWrapper = styled.div`
  padding: 40px;
`;
