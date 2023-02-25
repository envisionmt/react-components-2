import styled from '@emotion/styled';

export const VideoAspectRatioBoxHeader = styled.div`
  height: 40vh;
  overflow: hidden;
  padding: 0;
  position: relative;
  border-radius: 24px;

  img {
    height: 100%;
    width: 100%;
    top: 0;
    left: 0;
    position: absolute;
    border: none;
    object-fit: cover;
  }

  @media (min-width: 768px) {
  }
`;

export const ArtistName = styled.h2`
  font-style: normal;
  font-weight: bold;
  font-size: 30px;
  line-height: 36px;
  display: flex;
  align-items: center;
  letter-spacing: -0.02em;
  text-transform: none;
  color: #ffffff;
  margin: 0;

  @media (min-wdith: 768px) {
    font-size: 36px;
    line-height: 42px;
  }

  @media (min-wdith: 1024px) {
    font-size: 48px;
    line-height: 48px;
  }
`;

export const ArtistDescription = styled.div`
  margin: 24px 0 0 0;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 16px;
  letter-spacing: 0.025em;

  button {
    background: transparent;
    border: 0;
    font-weight: bold;
    font-size: 16px;
    color: #444444;
  }

  @media (min-width: 768px) {
    font-size: 16px;
    line-height: 24px;

    button {
      font-size: 16x;
    }
  }
`;

export const ArtistPic = styled.div`
  position: absolute;
  top: -94px;
  z-index: 1;
  margin: 12px 12px 0px 48px;

  img {
    border: 6px solid #222222;
    border-radius: 360px;

    @media (max-width: 767px) {
      width: 120px;
      height: 120px;
    }
    @media (min-width: 768px) {
      width: 156px;
      height: 156px;
    }
  }

  @media (max-width: 767px) {
    margin: 12px 12px 0px 12px;
    top: -75px;
  }
`;

export const ArtistPicWrapper = styled.div`
  position: relative;
`;

export const SplashWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 100%;
  margin: 24px 0;

  .share {
    width: 92px;
    height: 32px;
    box-shadow: 2px 2px 6px rgba(0, 0, 0, 0.45);
    border-radius: 18px;
    text-transform: uppercase;
    font-style: normal;
    font-weight: bold;
    font-size: 12px;
    line-height: 16px;
    letter-spacing: 0.1em;
  }
`;
