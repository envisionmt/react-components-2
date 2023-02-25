import styled from '@emotion/styled';

export const Wrapper = styled.div`
  max-width: 1440px;
  margin: auto;
  padding: 84px 24px 24px;

  @media (min-width: 768px) {
    padding: 108px 48px 48px;
  }
`;

export const PricingTable = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 24px;

  @media (min-width: 1024px) {
    flex-direction: row;
    gap: 48px;
  }
`;

export const PricingTier = styled.div`
  box-shadow: 2px 2px 6px rgba(0, 0, 0, 0.45);
  border-radius: 12px;
  background: ${({ theme }) => theme.colors.base2};
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (min-width: 1024px) {
    flex-basis: 33%;
    max-width: 33%;
  }
`;

export const PlanDetails = styled.div`
  padding: 24px;
  width: 100%;

  @media (min-width: 768px) {
    padding: 48px;
  }
`;

export const PlanTitle = styled.div`
  font-style: normal;
  font-weight: bold;
  font-size: 20px;
  line-height: 32px;
  text-align: center;
  letter-spacing: -0.015em;
  margin-bottom: 4px;

  @media (min-width: 768px) {
    font-size: 30px;
    line-height: 40px;
    letter-spacing: -0.02em;
  }
`;

export const FeatureList = styled.ul`
  min-height: 120px;
  list-style: none;
  margin: 0;
  padding: 0;

  li {
    margin: 0;
    padding: 16px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;

    .number {
      font-style: normal;
      font-weight: bold;
      font-size: 20px;
      line-height: 32px;
      display: flex;
      align-items: center;
      letter-spacing: -0.015em;
    }
    .subtext {
      flex-grow: 1;
      font-style: normal;
      font-weight: normal;
      font-size: 11px;
      line-height: 16px;
      display: flex;
      text-align: start;
      letter-spacing: 0.025em;
      margin-top: 16px;
      width: 100%;
    }

    &:nth-child(odd) {
      background: ${({ theme }) => theme.colors.base3};
    }

    img {
      width: 20px;
      height: 20px;
    }

    .first {
    }
    .last {
      display: flex;
      align-items: center;
      justify-content: flex-end;
      text-align: end;
    }

    @media (min-width: 768px) {
      img {
        width: 24px;
        height: 24px;
      }
    }
  }
`;

export const PlanPrice = styled.div`
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 20px;
  text-align: center;
  letter-spacing: 0.025em;
  color: #a5a5a5;
  margin-bottom: 24px;

  @media (min-width: 768px) {
    margin-bottom: 48px;
    font-size: 16px;
    line-height: 24px;
  }
`;

export const SubscribeWrapper = styled.div`
  background: ${({ theme }) => theme.colors.base2};
  width: 100%;
  border-radius: 12px;
`;

export const FlexContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  width: 100%;
  max-width: 1440px;
  margin: auto;

  @media (min-width: 768px) {
    flex-direction: row;
  }
`;

export const InfoWrapper = styled.div`
  background: #222222;
  width: 100%;
`;

export const FeatureItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 48px;
  flex-basis: 100%;

  img {
    width: 48px;
    height: 48px;
    margin-bottom: 24px;
  }
  .text {
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 20px;
    text-align: center;
    letter-spacing: 0.025em;
  }

  @media (min-width: 768px) {
    flex-basis: 50%;

    img {
      width: 60px;
      height: 60px;
    }
    .text {
      font-size: 16px;
      line-height: 24px;
    }
  }
  @media (min-width: 1440px) {
    flex-basis: 25%;
  }
`;

export const FAQContainer = styled.div`
  padding: 0px 36px 36px;
  max-width: 1440px;
  margin: auto;

  @media (min-width: 768px) {
    padding: 0 48px 48px;
  }
`;

export const FAQCard = styled.div`
  padding: 12px;
  background: ${({ theme }) => theme.colors.base2};
  box-shadow: 2px 2px 6px rgba(0, 0, 0, 0.45);
  border-radius: 24px;
  display: flex;
  flex-direction: column;

  &:not(:last-child) {
    margin-bottom: 24px;
  }

  @media (min-width: 768px) {
    padding: 24px;
  }
`;

export const FAQTitle = styled.div`
  font-style: normal;
  font-weight: bold;
  font-size: 16px;
  line-height: 24px;
  letter-spacing: 0.025em;
  display: flex;
  flex-basis: 85%;
  justify-content: space-between;
  padding: 12px;
  transition: all 0.4s ease-out;
  cursor: pointer;

  img {
    ${(props) => props.open && 'transform: rotate(90deg); transition: all 0.4s ease;'}

  @media (min-width: 768px) {
    padding: 24px;
    font-size: 20px;
    letter-spacing: -0.015em;
  }
`;

export const FAQAnswer = styled.div`
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 24px;
  letter-spacing: 0.025em;
  display: flex;
  justify-content: space-between;
  padding: ${(props) => (props.open ? '12px' : '0px')};
  opacity: ${(props) => (props.open ? '1' : '0')};
  overflow-y: hidden;
  transition: all 0.4s ease-out;
  max-height: ${(props) => (props.open ? '1000px' : '0px')};
  cursor: pointer;

  @media (min-width: 768px) {
    font-size: 20px;
    letter-spacing: -0.015em;
  }
`;

export const SectionHeader = styled.div`
  font-style: normal;
  font-weight: bold;
  font-size: 20px;
  line-height: 24px;
  letter-spacing: -0.015em;
  text-align: center;
  color: #a5a5a5;
  padding: 60px;

  @media (min-width: 768px) {
    font-size: 36px;
    line-height: 44px;
    letter-spacing: -0.02em;
  }
`;

export const ImageWrapper = styled.div`
  padding: 5px;
  max-height: 30px;
  max-width: 30px;
  min-height: 30px;
  min-width: 30px;
  margin-left: 12px;
  cursor: pointer;
  ${(props) => props.open && `background: #333333; border-radius: 12px;`}

  &:hover {
    background: #333333;
    border-radius: 12px;
  }

  .forward {
    inset: 0px;
    box-sizing: border-box;
    padding: 0px;
    border: none;
    margin: auto;
    display: block;
    width: 0px;
    height: 0px;
    min-width: 100%;
    max-width: 100%;
    min-height: 100%;
    max-height: 100%;
  }
`;
