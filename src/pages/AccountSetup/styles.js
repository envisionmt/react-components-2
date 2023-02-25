import styled from '@emotion/styled';

export const Wrapper = styled.div`
  position: relative;
  padding: 80px 50px;
`;

export const PricingTable = styled.div`
  display: flex;
  gap: 30px;
`;

export const PricingTier = styled.div`
  flex: 1;
  background: blue;
  border-radius: 20px;
  overflow: hidden;
  background: linear-gradient(320deg, #ed5e70, #792fee);
  /* background: ${({ theme }) => theme.colors.base2}; */
`;

export const PlanDetails = styled.div`
  padding: 20px;
`;

export const PlanTitle = styled.h2`
  text-align: center;
  font-weight: bold;
`;

export const FeatureList = styled.ul`
  min-height: 120px;
  text-align: center;
  list-style: none;
  margin: 0;
  padding: 0;

  li {
    margin: 0;
    padding: 0;
  }
`;

export const PlanPrice = styled.span`
  display: block;
  font-size: 4rem;
  text-align: center;
  font-weight: bold;
`;

export const SubscribeWrapper = styled.div`
  padding: 30px 40px;
  background: ${({ theme }) => theme.colors.base2};
`;
