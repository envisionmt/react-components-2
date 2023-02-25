import styled from '@emotion/styled';
import { css } from '@emotion/core';
import { Link } from 'react-router-dom';
import isPropValid from '@emotion/is-prop-valid';

export const Wrapper = styled.div`
  height: 70vh;
  justify-content: flex-end;

  .header {
    height: 100%;
  }
`;

export const ArtworkContainer = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: center;

  filter: drop-shadow(0px 8px 7px rgba(0, 0, 0, 0.25)) drop-shadow(0px 3.34221px 2.92443px rgba(0, 0, 0, 0.179714))
    drop-shadow(0px 1.7869px 1.56354px rgba(0, 0, 0, 0.149027))
    drop-shadow(0px 1.00172px 0.876509px rgba(0, 0, 0, 0.125))
    drop-shadow(0px 0.532008px 0.465507px rgba(0, 0, 0, 0.100973))
    drop-shadow(0px 0.221381px 0.193708px rgba(0, 0, 0, 0.0702864));
`;

export const AspectRatioBox = styled.div`
  button {
    position: absolute;
    right: 0;
    bottom: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    background: transparent;
    background: rgba(26, 26, 26, 0.75);
    border-radius: 18px;
    padding: 8px;
    width: 32px;
    height: 32px;
    border: ${({ muted }) => (muted ? '2px solid #910048' : '0')};
  }
`;

export const Frame = styled.div`
  height: 50vh;
  position: relative;
  margin: auto;
  max-height: 50vh;
  ${({ rotate }) =>
    rotate &&
    `padding-top: 85px;
  padding-right: 60px;`}

  img,
  video,
  div {
    display: flex;
    max-height: '100%';
    max-width: 100%;
    object-fit: contain;
    width: 100%;
    margin: auto;
  }

  div,
  video,
  img {
    max-height: ${({ rotate }) => (rotate ? '92%' : '100%')};
    ${({ rotate }) =>
      rotate &&
      `transform: rotate(150deg) translateY(-100%);
  transform-origin: center top;`}
  }

  button {
    ${({ rotate }) =>
      rotate &&
      `transform: rotate(208deg) translateY(-100%);
  transform-origin: center top;`}
  }

  @media (min-width: 768px) {
    ${({ menu }) => menu}
  }
`;

export const ActionButtonContainer = styled.div`
  display: flex;
  margin: 12px 0 0 0;
  position: relative;
  width: 100%;
  justify-content: center;

  button {
    padding: 8px 24px;
    margin: 12px;
    border: 0;
    color: white;
    cursor: pointer;
    width: 92px;
    height: 32px;
    position: absolute;
    text-transform: uppercase;
    background: ${({ theme }) => theme.colors.base3};
    box-shadow: 2px 2px 6px rgba(0, 0, 0, 0.45);
    border-radius: 18px;
  }

  .share {
    top: -4px;
    margin-left: 120px;
    font-style: normal;
    font-weight: bold;
    font-size: 12px;
    line-height: 16px;
    letter-spacing: 0.1em;
  }
  .more {
    top: -4px;
    margin-right: 120px;
    width: 64px;
  }

  @media (min-width: 768px) {
    justify-content: flex-end;

    .share {
      top: 8px;
    }
    .more {
      top: 8px;
    }
  }
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
`;

export const NavLink = styled(Link, {
  shouldForwardProp: (prop) => isPropValid(prop) && !['isActive'].includes(prop),
})`
  flex-basis: calc(33.33% - 24px);
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
