import styled from '@emotion/styled';
import { keyframes } from '@emotion/core';

const slideIn = keyframes`
  from { right: -480px; }
  to { right: 0px; }
`;

const slideOut = keyframes`
  from { right: 0px; }
  to { right: -480px; }
`;

export const RootWrapper = styled.div`
  width: 480px;
  max-width: 100vw;
  height: 100vh;
  position: fixed;
  z-index: 200;
  top: 0;
  right: -480px;
  display: flex;
  flex-direction: column;
  background-color: #222222;
  box-shadow: 6px 6px 48px #111111;
  border-radius: 0px 0px 0px 12px;
  overflow-x: hidden;
  overflow: scroll;
  overflow-x: auto;
  animation: 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards;
  animation-name: ${({ open, touched }) => {
    if (touched && open) return slideIn;
    if (touched && !open) return slideOut;
    return null;
  }};

  &::-webkit-scrollbar {
    width: 0;
  }
`;

export const TitleWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 80px 24px 24px;
  background: #444444;
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.25);
  border-radius: 0px 0px 24px 24px;
`;

export const Title = styled.div`
  font-style: normal;
  font-weight: bold;
  font-size: 30px;
  line-height: 36px;
  letter-spacing: -0.02em;
`;

export const CloseIcon = styled.img`
  width: 17px;
  height: 17px;
  cursor: pointer;
`;

export const DeviceListWrapper = styled.div`
  padding: 24px;
  flex-basis: 75%;
`;

export const DeviceCardWrapper = styled.div`
  margin-bottom: 24px;
`;

export const ButtonWrapper = styled.div`
  background: #333333;
  box-shadow: 0px -2px 5px rgba(0, 0, 0, 0.25);
  border-radius: 0px 0px 0px 12px;
  padding: 24px;
  width: 100%;
  align-self: flex-end;
`;

export const DevicePairWrapper = styled.div`
  display: flex;
  padding: 24px;
  background: #910048;
  box-shadow: 2px 2px 6px rgba(0, 0, 0, 0.45);
  border-radius: 12px;
  margin-bottom: 24px;
  cursor: pointer;
`;

export const IconWrapper = styled.div`
  margin: auto;
`;

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 22px;
`;

export const Header = styled.div`
  font-style: normal;
  font-weight: bold;
  font-size: 16px;
  line-height: 24px;
  letter-spacing: 0.025em;
  margin-bottom: 6px;
`;
export const Body = styled.div`
  font-style: normal;
  font-weight: normal;
  font-size: 11px;
  line-height: 16px;
  letter-spacing: 0.025em;
`;

export const Wrapper = styled.div`
  ${({ open }) =>
    open
      ? `
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.7);
  z-index: 100;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow-y: scroll;

  ::-webkit-scrollbar {
    display: none;
  }`
      : `display: none`}
`;
