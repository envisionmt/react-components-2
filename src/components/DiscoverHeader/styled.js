import styled from '@emotion/styled';
import { css } from '@emotion/core';
import { Link } from 'react-router-dom';
import isPropValid from '@emotion/is-prop-valid';

export const Wrapper = styled.div`
  background: ${({ theme }) => theme.colors.base2};
  box-shadow: 2px 2px 6px rgba(0, 0, 0, 0.45);
  border-radius: 0px 0px 24px 24px;
`;

const activeNavStyles = ({ theme }) => css`
  background: ${theme.colors.base3};
  border-radius: 12px;
`;

export const TabWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 52px;

  button {
    border: 0;
    background: transparent;
    cursor: pointer;
  }
  img {
    margin-right: 12px;

    @media (min-width: 768px) {
      margin-right: 24px;
    }
  }
`;

export const Divider = styled.div`
  border: 1px solid #444444;
  transform: rotate(90deg);
  width: 16px;
  height: 0px;
`;

export const NavLink = styled(Link, {
  shouldForwardProp: (prop) => isPropValid(prop) && !['isActive'].includes(prop),
})`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  padding: 6px 12px;
  border-radius: 12px;
  position: relative;
  display: inline-block;
  text-decoration: none;
  text-align: center;
  font-style: normal;
  font-weight: bold;
  font-size: 10px;
  line-height: 16px;
  text-align: center;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  ${({ isActive }) => (isActive ? activeNavStyles : null)}

  @media (min-width: 375px) {
    font-size: 12px;
    line-height: 16px;
  }
  @media (min-width: 768px) {
    font-size: 14px;
    line-height: 24px;
    letter-spacing: 0.1em;
  }
`;

export const SearchWrapper = styled.div`
  width: 100%;
  max-height: 500px;
  overflow-y: auto;
  display: flex;
  flex-wrap: wrap;
  transition: width 600ms ease-out, height 600ms ease-out;
  animation: 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards;
`;

export const SearchItem = styled.button`
  height: 50px;
  background: ${({ color }) => (color === 'red' ? '#910048' : '#444444')};
  border-radius: 24px;
  border: 0;
  cursor: pointer;
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 6px;
  &:hover {
    background: #910048;
  }
  flex-basis: calc((100% / 2) - 12px);

  @media (min-width: 425px) {
    flex-basis: calc((100% / 3) - 12px);
  }

  @media (min-width: 768px) {
    flex-basis: calc((100% / 5) - 12px);
  }

  @media (min-width: 1024px) {
    flex-basis: calc((100% / 7) - 12px);
  }
  @media (min-width: 1440px) {
    flex-basis: calc((100% / 10) - 12px);
  }
`;
