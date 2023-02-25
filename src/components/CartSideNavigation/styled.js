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
  animation-name: ${({ open }) => {
    if (open) return slideIn;
    if (!open) return slideOut;
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
  padding: 84px 24px 24px;
  background: #444444;
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.25);
  border-radius: 0px 0px 24px 24px;
`;

export const Title = styled.div`
  font-size: 20px;
`;

export const CloseIcon = styled.img`
  width: 17px;
  height: 17px;
  cursor: pointer;
`;

export const DeviceListWrapper = styled.div`
  padding: 24px 24px 136px 24px;
`;

export const DeviceNavigationCardWrapper = styled.div`
  margin-bottom: 24px;
`;

export const ButtonWrapper = styled.div`
  background: #333333;
  box-shadow: 0px -2px 5px rgba(0, 0, 0, 0.25);
  border-radius: 0px 0px 0px 12px;
  padding: 24px;
  width: 480px;
  max-width: 100vw;
  position: fixed;
  bottom: 0;
`;

export const TotalPriceWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 12px;
`;

export const TotalPriceLabel = styled.span`
  font-weight: 600;
  font-size: 12px;
`;

export const TotalPrice = styled.span`
  font-weight: bold;
  font-size: 16px;
`;

export const FlexContainer = styled.div`
  display: flex;
  align-items: center;

  > * {
    flex-basis: 50%;
    max-width: 50%;
  }
`;

export const SubscribeWrapper = styled.div`
  position: fixed;
  bottom: 0;
  margin-bottom: 136px;
  background: #444444;
  padding: 24px;

  button {
    width: 190px;
    height: 48px;
  }
`;

export const SubscribeTitle = styled.div`
  font-weight: bold;
  font-size: 20px;
  line-height: 24px;
  letter-spacing: -0.015em;
  margin-bottom: 12px;
`;

export const SubscribeSubtitle = styled.div`
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  letter-spacing: 0.025em;
  margin-bottom: 12px;
`;

export const Price = styled.div`
  font-style: normal;
  font-weight: normal;
  font-size: 20px;
  line-height: 24px;
  letter-spacing: -0.015em;
`;

export const Flex = styled.div`
  display: flex;
  justify-content: space-between;
`;
