import styled from '@emotion/styled';

export const LandingWrapper = styled.div`
  @media (min-width: 700px) {
    flex-basis: 50%;
  }
  display: flex;
  align-items: center;
  z-index: 10;
  transition-property: left;
  transition-duration: 1s;
  transition-timing-function: linear;
  transition-delay: 1s;
`;

export const LandingBackground = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  @media (max-width: 699px) {
    width: 100vw;
    height: 50vh;
    object-fit: cover;
  }
`;

export const LandingDetailWrapper = styled.div`
  position: absolute;

  @media (max-width: 699px) {
    margin: 70px 20px 20px;
  }
  @media (min-width: 700px) {
    padding: 30px;
    max-width: 50%;
  }
  @media (min-width: 1000px) {
    padding: 60px;
  }
  @media (min-width: 2000px) {
    margin: 96px;
  }
`;

export const LandingTitle = styled.div`
  font-weight: bold;
  font-size: 48px;
  line-height: 48px;
  margin-bottom: 24px;
  @media (max-width: 699px) {
    font-size: 30px;
    line-height: 30px;
    margin-bottom: 24px;
  }
`;

export const LandingText = styled.div`
  font-size: 16px;
  line-height: 24px;
  margin-bottom: 48px;
`;
