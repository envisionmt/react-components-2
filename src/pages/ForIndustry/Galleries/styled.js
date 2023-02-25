import styled from '@emotion/styled';

export const Wrapper = styled.div``;
export const HeaderWrapper = styled.div`
  position: relative;
  display: flex;
  width: 100%;
  max-width: 1440px;
  margin: auto;
  padding: 24px;
  justify-content: space-between;
  align-items: flex-end;
  height: 100%;
  @media (min-width: 1440px) {
    padding: 48px;
  }
`;
export const TopHeader = styled.h1`
  font-size: 60px;
  font-weight: bold;
  text-transform: none;
  margin: 0;
  @media (max-width: 699px) {
    font-size: 48px;
  }
`;
export const TopSubheader = styled.p`
  font-style: normal;
  font-weight: bold;
  font-size: 16px;
  line-height: 24px;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  margin: 0;
`;
export const Section = styled.div`
  max-width: 1440px;
  margin: auto;
  padding: 24px;
`;
export const SectionTitle = styled.h1`
  @media (max-width: 699px) {
    font-size: 36px;
    line-height: 40px;
    text-align: center;
  }
  @media (min-width: 700px) {
    font-size: 48px;
    line-height: 48px;
    text-align: center;
    padding: 36px;
  }
  margin: 12px;
  font-weight: bold;
  text-transform: none;
`;
export const FlexContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: ${({ flexDirection }) => flexDirection};
`;
export const CardItem = styled.div`
  margin: 12px;
  padding: 36px;
  position: relative;
  background: #222222;
  border-radius: 24px;
  display: flex;
  flex-direction: column;
  text-align: center;
  @media (max-width: 699px) {
    padding: 12px;
  }
  @media (max-width: 569px) {
    flex-basis: calc(${(1 / 1) * 100}% - 24px);
    max-width: calc(${(1 / 1) * 100}% - 24px);
  }
  @media (min-width: 570px) {
    flex-basis: calc(${(1 / 2) * 100}% - 24px);
    max-width: calc(${(1 / 2) * 100}% - 24px);
  }
  @media (min-width: 850px) {
    flex-basis: calc(${(1 / 3) * 100}% - 24px);
    max-width: calc(${(1 / 3) * 100}% - 24px);
  }
`;
export const CardItemTwo = styled.div`
  padding: 36px;
  text-align: center;
  margin: 12px;
  @media (max-width: 699px) {
    padding: 12px;
  }
  position: relative;
  background: #222222;
  border-radius: 24px;
  display: flex;
  flex-direction: column;
  flex-basis: calc(${(1 / 1) * 100}% - 24px);
  max-width: calc(${(1 / 1) * 100}% - 24px);
`;
export const CardTop = styled.div`
  font-weight: bold;
  font-size: 24px;
  line-height: 32px;
  padding: 12px;
`;
export const CardBot = styled.div`
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  letter-spacing: 0.025em;
  padding: 12px;
  margin-left: ${({ marginLeft }) => marginLeft};
`;
export const IconContainer = styled.div`
  padding: 12px;
`;
export const CardIcon = styled.img``;

export const VideoContainer = styled.div`
  margin-bottom: 16px;
  position: relative;
  display: flex;
  flex-direction: column;
`;

export const VideoAspectRatioBox = styled.div`
  width: 100%;
  padding-bottom: ${({ paddingBottom }) => paddingBottom}%;
  position: relative;
`;
export const VideoAspectRatioBoxHeader = styled.div`
  height: 40vh;
  overflow: hidden;
  padding: 0;
  position: relative;
`;
export const VideoFrame = styled.div``;

export const VimeoVideoHeader = styled.iframe`
  box-sizing: border-box;
  height: 56.25vw;
  left: 50%;
  min-height: 100%;
  min-width: 100%;
  transform: translate(-50%, -50%);
  position: absolute;
  top: 50%;
  width: 177.77777778vh;
  border: none;
`;
export const VimeoVideo = styled.iframe`
  height: 100%;
  width: 100%;
  top: 0;
  left: 0;
  position: absolute;
  border: none;
`;
