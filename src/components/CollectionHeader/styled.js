import styled from '@emotion/styled';

export const SplashWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const VideoAspectRatioBoxHeader = styled.div`
  height: 25vh;
  overflow: hidden;
  padding: 0;
  position: relative;

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
    height: 30vh;
  }
`;

export const CollectionPic = styled.div`
  position: absolute;
  top: -94px;
  z-index: 1;
  margin: 12px 12px 0px 48px;

  img {
    border: 3px solid #222222;
    border-radius: 24px;

    @media (max-width: 374px) {
      width: 99px;
      height: 99px;
    }
    @media (max-width: 767px) {
      width: 111px;
      height: 111px;
    }
    @media (min-width: 768px) {
      width: 163px;
      height: 163px;
    }
  }

  @media (max-width: 767px) {
    margin: 12px 12px 0px 12px;
    top: -67px;
  }
`;

export const InteractionWrapper = styled.div`
  display: flex;
  align-self: flex-end;

  button {
    margin: 6px;
    width: 102px;
    height: 32px;
    font-style: normal;
    font-weight: bold;
    font-size: 12px;
    line-height: 16px;
    display: flex;
    align-items: center;
    text-align: center;
    letter-spacing: 0.05em;
    text-transform: uppercase;

    @media (max-width: 767px) {
      font-size: 12px;
      line-height: 16px;
      text-transform: uppercase;
    }
  }
  .more {
    width: auto;
  }

  @media (max-width: 767px) {
    flex-direction: column;
    align-items: end;
    margin: 12px 12px 0px 12px;
  }
  @media (min-width: 768px) {
    margin: 24px 48px 24px 24px;
  }
`;

export const CollectionInfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;

  @media (max-width: 374px) {
    padding: 6px 12px 24px 12px;
  }
  @media (min-width: 375px) {
    padding: 12px 24px 24px 24px;
  }
  @media (min-width: 768px) {
    padding: 0 48px 24px 48px;
  }
`;

export const CollectionPicWrapper = styled.div`
  position: relative;
`;

export const CollectionTitle = styled.div`
  font-style: normal;
  font-weight: bold;
  font-size: 48px;
  line-height: 48px;
  display: flex;
  align-items: center;
  letter-spacing: -0.04em;
  margin: 12px 0px 24px 0px;

  @media (max-width: 767px) {
    margin: 12px 0px 6px 0px;
    font-style: normal;
    font-weight: bold;
    font-size: 30px;
    line-height: 32px;
    display: flex;
    align-items: center;
    letter-spacing: -0.02em;
  }
`;

export const CollectionDescription = styled.div`
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 16px;
  letter-spacing: 0.025em;
  color: #ffffff;
  overflow: hidden;

  button {
    background: transparent;
    border: 0;
    font-weight: bold;
    font-size: 16px;
    color: #444444;
  }

  @media (max-width: 767px) {
    margin: 6px 0px 12px 0px;
  }

  @media (min-width: 768px) {
    margin: 0px 0px 18px 0px;

    button {
      font-size: 16x;
    }
  }
`;

export const CreatorWrapper = styled.div`
  margin-top: 12px;
  margin-bottom: 24px;
  display: flex;
`;

export const CreatorImage = styled.img`
  width: 36px;
  height: 36px;
  margin-right: 12px;
  border-radius: 50%;
`;

export const CreatorName = styled.div`
  font-weight: 600;
  font-size: 18px;
  text-transform: uppercase;
  letter-spacing: 0.1em;
`;

export const ButtonWrapper = styled.div`
  position: relative;

  button {
    position: absolute;
    width: 240px;
    height: 48px;
    bottom: -46px;
    right: -12px;

    @media (max-width: 850px) {
      left: 50%;
      bottom: -105px;
      right: 0;
      transform: translate(-50%, -50%);
    }
  }
`;

export const MetadataWrapper = styled.span`
  display: flex;

  p {
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 24px;
    letter-spacing: 0.025em;
    color: #ffffff;
    display: flex;
    align-items: flex-end;
    margin: 12px 6px 6px 0;
  }
  span {
    margin: 12px 0px 12px 0;
    font-style: normal;
    font-weight: 600;
    font-size: 12px;
    line-height: 16px;
    letter-spacing: 0.05em;
    color: #777777;
    margin-right: 6px;

    @media (max-width: 767px) {
      margin: 6px 6px 12px 0px;
    }
  }
  div {
    display: flex;
    font-style: normal;
    font-weight: bold;
    font-size: 16px;
    line-height: 24px;
    letter-spacing: 0.025em;
    align-items: center;
    margin: 12px 6px 6px 0;
  }

  @media (max-width: 850px) {
    display: ${({ xsUp }) => (xsUp ? 'none' : '')};
  }
  @media (min-width: 851px) {
    display: ${({ mDown }) => (mDown ? 'none' : '')};
  }
`;

export const Dropdown = styled.div`
  position: relative;
  display: inline-block;

  .cards {
    display: ${({ open, isActive }) => (open || isActive ? 'block' : 'none')};
    position: absolute;
    background-color: #333333;
    min-width: 100px;
    box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
    z-index: 1;
  }
  .button {
    color: #fff;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 24px;
    letter-spacing: 0.025em;
    display: block;
    min-width: 100px;
    border-bottom: 1px solid #444444;
    border-left: 0;
    border-top: 0;
    background: none;
    color: inherit;
    font: inherit;
    cursor: pointer;
    outline: inherit;
    text-transform: none;
    text-align: start;
    margin: 0;
    padding: 12px;
    height: 47px;

    &:hover {
      background: #444444;
    }
  }

  @media (max-width: 767px) {
  }
`;
