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
  z-index: 201;
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

export const LoginFormWrapper = styled.div`
  width: 100%;
  padding: 24px;
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

export const SignUpWrapper = styled.div`
  background: #333333;
  border-radius: 12px;
  padding: 12px;
  margin-top: 24px;
  text-align: center;

  div {
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 24px;
    letter-spacing: 0.025em;
  }
  .bold {
    font-style: normal;
    font-weight: bold;
    font-size: 16px;
    line-height: 24px;
    letter-spacing: 0.025em;
    border: 0;
    background: transparent;
    color: #ffffff;
    cursor: pointer;
  }
`;

export const IndicatorContainer = styled.div`
  display: flex;
  flex-wrap: no-wrap;
  justify-content: center;
  padding: 0 0 24px 0;

  .left {
    margin-right: 24px;
  }
`;

export const Indicator = styled.div`
  background: ${({ index }) => (index ? '#910048' : '#333333')};
  border-radius: 12px;
  height: 6px;
  flex-basis: 50%;
`;

export const SubTitle = styled.div`
  font-style: normal;
  font-weight: bold;
  font-size: 20px;
  line-height: 24px;
  letter-spacing: -0.015em;
  margin-bottom: 24px;
`;

export const Description = styled.div`
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 24px;
  letter-spacing: 0.025em;
  margin-bottom: 48px;
`;

export const DescriptionTwo = styled.div`
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 24px;
  letter-spacing: 0.025em;
  margin-bottom: 24px;
`;

export const ConnectWrapper = styled.div`
  text-align: start;

  .finish {
    margin-top: 24px;
  }
`;

export const ButtonContainer = styled.div`
  display: flex;

  button,
  div {
    flex-basis: 50%;
    height: 48px;
  }

  .skip {
    margin-right: 24px;
  }
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

export const ForgotWrapper = styled.div`
  margin-bottom: 48px;
  display: flex;
  justify-content: flex-end;

  button {
    border: 0;
    background: transparent;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 24px;
    letter-spacing: 0.025em;
    text-decoration-line: underline;
    color: #ffffff;
    cursor: pointer;
  }
`;

export const AlertWrapper = styled.div`
  margin-top: 24px;
`;
