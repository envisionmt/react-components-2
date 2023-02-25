import styled from '@emotion/styled';
import { Link } from 'react-router-dom';
import { lighten } from 'polished';

export const Wrapper = styled.div`
  position: relative;
  padding: 84px 24px 24px;

  @media (min-width: 768px) {
    padding: 108px 48px 48px;
  }
`;

export const ConfettiCanvas = styled.canvas`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`;

export const ContentWrapper = styled.div`
  position: relative;
  z-index: 2;
  display: flex;
  justify-content: center;

  @media (min-width: 768px) {
    max-height: 100vh;
  }
`;

export const MainPanel = styled.div`
  display: flex;
  max-height: 100%;
  border-radius: 30px;
  overflow: hidden;
  box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.3);

  @media (max-width: 767px) {
    flex-direction: column;
  }
`;

export const ItemDetails = styled.div`
  background: rgb(34, 34, 34);
  padding: 24px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex-basis: 50%;
  order: 1;
  text-align: center;

  @media (min-width: 768px) {
    flex-basis: 50%;
    padding: 48px;
    order: 0;
  }
`;

export const ItemName = styled.h2`
  font-weight: 600;
  font-size: 18px;
  color: #ffffff;
  margin: 0;
  text-transform: none;
  width: 100%;
`;

export const ItemPrice = styled(Link)`
  font-size: 18px;
  letter-spacing: 0.1em;
  text-decoration: none;
  margin-bottom: 12px;

  &:hover {
    color: ${lighten(0.1, '#910048')};
  }
`;

export const CallToAction = styled.div`
  background: linear-gradient(300deg, #ed5e70, #792fee);
  text-align: center;
  flex-basis: 50%;
  order: 0;

  @media (min-width: 768px) {
    order: 1;
  }
`;

export const CallToActionInner = styled.div`
  background: rgba(0, 0, 0, 0.8);
  padding: 24px;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media (min-width: 768px) {
    padding: 48px;
    text-align: left;
  }
`;

export const Greeting = styled.h1`
  font-style: normal;
  font-weight: 600;
  font-size: 36px;
  line-height: 36px;
  letter-spacing: -0.02em;
  margin: 0;
  text-transform: capitalize;
  margin-bottom: 10px;

  @media (min-width: 1024px) {
    font-size: 48px;
    line-height: 48px;
    letter-spacing: -0.02em;
  }
`;

export const Description = styled.p`
  font-size: 18px;
  margin-bottom: 30px;
`;
