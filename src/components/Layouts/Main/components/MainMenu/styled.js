import styled from '@emotion/styled';
import { keyframes } from '@emotion/core';

const slideIn = keyframes`
  from { left: -228px; }
  to { left: 0px; }
`;

const slideOut = keyframes`
  from { left: 0; }
  to { left: -228px; }
`;

const slideInButton = keyframes`
  from { bottom: -80px; }
  to { bottom: 0px; }
`;

const slideOutButton = keyframes`
  from { bottom: 0px; }
  to { bottom: -80px; }
`;

export const Wrapper = styled.div`
  background: #222;
  position: ${({ open, touched }) => {
    if (touched && open) return 'relative';
    if (touched && !open) return 'absolute';
    return null;
  }};
  @media (max-width: 1023px) {
    position: fixed;
    height: 100%;
  }
  min-width: 228px;
  max-width: 228px;
  width: 228px;
  padding: 70px 0 65px 0px;
  z-index: 100;
  box-shadow: 5px 5px 20px rgba(0, 0, 0, 0.3);
  animation: 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards;
  animation-name: ${({ open, touched }) => {
    if (touched && open) return slideIn;
    if (touched && !open) return slideOut;
    return null;
  }};
  flex-shrink: 0;
  flex: 0 0 auto;
  ::-webkit-scrollbar {
    display: none;
  }
`;
export const NavPaper = styled.div`
  height: 100%;
  display: flex;
  outline: 0;
  z-index: 1200;
  position: fixed;
  overflow-y: scroll;
  overscroll-behavior-y: contain;
  min-width: 228px;
  padding-bottom: 130px;
  flex-direction: column;
  ::-webkit-scrollbar {
    display: none;
  }
`;
export const AddCollectionButton = styled.button`
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  padding: 20px;
  box-shadow: 0px -10px 20px rgba(0, 0, 0, 0.3);
  border-radius: 24px 24px 0 0;
  width: 230px;
  background: #333;
  border: none;
  color: rgb(179, 179, 179);
  font-size: 12px;
  text-transform: uppercase;
  cursor: pointer;
  transition: background 0.2s ease-in, color 0.2s ease-in;
  animation: 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards;
  animation-name: ${({ open, touched }) => {
    if (touched && open) return slideInButton;
    if (touched && !open) return slideOutButton;
    return null;
  }};

  &:hover {
    color: white;
    background: #910048;
  }

  svg {
    margin-right: 10px;
  }

  span {
    display: inline-block;
    vertical-align: top;
    margin-top: 4px;
  }
`;
