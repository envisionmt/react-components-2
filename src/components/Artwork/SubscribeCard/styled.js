import styled from '@emotion/styled';
import { lighten } from 'polished';

export const Wrapper = styled.div`
  padding: 24px;
  border-radius: 24px;
  background: #222222;
  box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.3);
`;

export const SignupText = styled.span`
  div {
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 24px;
    letter-spacing: 0.025em;
  }

  .text {
    color: ${lighten(0.2, '#910048')};
    background: transparent;
    text-decoration: none;
    border: 0;
    cursor: pointer;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 24px;
    letter-spacing: 0.025em;
    padding: 0;
  }

  @media (max-width: 767px) {
    text-align: center;
  }
`;

export const ButtonWrapper = styled.div`
  display: flex;

  button {
    font-weight: bold;
    font-size: 16px;
    line-height: 24px;
    max-height: 48px;
  }

  @media (max-width: 767px) {
    flex-direction: column;

    > * {
      margin: 12px 0;
    }

    #left {
      order: 1;
    }
    #right {
      order: 0;
    }
  }
`;

export const BreakWrapper = styled.div`
  display: flex;
  margin: 24px 0;
  align-items: center;

  div {
    font-style: normal;
    font-weight: bold;
    font-size: 12px;
    line-height: 16px;
    display: flex;
    align-items: center;
    letter-spacing: 0.05em;
    text-transform: uppercase;
    color: #777777;
    margin: 0 12px;
  }
`;

export const Divider = styled.div`
  display: flex;
  border-bottom: 2px solid #333333;
  width: 50%;
  margin: auto;
  flex-basis: 50%;
  height: 0;
`;
