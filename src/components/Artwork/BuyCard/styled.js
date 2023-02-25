import styled from '@emotion/styled';
import { lighten } from 'polished';

export const RootWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 24px;
  border-radius: 24px;
  background: #222222;
  box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.3);
  margin-bottom: 30px;

  @media (max-width: 767px) {
    text-align: center;
  }
`;

export const PriceDetailWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-bottom: 24px;
  border-bottom: 1px solid #333333;
  width: 100%;

  @media (min-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
    flex-basis: 50%;
    max-width: 50%;
    margin-right: 24px;
    margin-bottom: 24px;
    justify-content: flex-start;
    border-bottom: 0px solid #333333;
    border-right: 1px solid #333333;
  }
`;

export const Label = styled.div`
  font-style: normal;
  font-weight: bold;
  font-size: 16px;
  line-height: 24px;
  letter-spacing: 0.025em;
  color: #a5a5a5;
`;

export const Price = styled.div`
  font-weight: bold;
  font-size: 20px;
`;

export const Description = styled.div`
  width: 100%;
  margin: 24px 0 0 0;
  flex-basis: 100%;
`;

export const ButtonWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;

  button {
    font-weight: bold;
    font-size: 16px;
    line-height: 24px;
    max-height: 48px;
  }

  .description {
    margin: 16px 0 24px 0;
  }

  #left {
    margin: 0 24px 0 0;
    flex-basis: calc(50% - 12px);
  }
  #right {
    flex-basis: calc(50% - 12px);
  }

  @media (max-width: 767px) {
    flex-direction: column;
    text-align: center;

    button {
      margin: 12px 0;
    }

    #left {
      order: 1;
      flex-basis: 100%;
    }
    #right {
      order: 0;
      flex-basis: 100%;
    }
  }
`;

export const SignupText = styled.span`
  a {
    color: ${lighten(0.2, '#910048')};
  }
`;

export const FlexWrapper = styled.div`
  display: flex;
  margin-bottom: 24px;

  @media (max-width: 767px) {
    flex-direction: column;
  }
  @media (min-width: 768px) {
    border-bottom: 1px solid #333333;
  }
`;

export const TextWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;

  @media (min-width: 768px) {
    padding; 12px 12px 12px 12px;
    align-items: flex-start;
    flex-basis: 50%;
    max-width: 50%;
    justify-content: flex-start;

    div {
      margin: 0 0 24px 0;
    }
  }
`;
