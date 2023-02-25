import styled from '@emotion/styled';

// Assets
import CanvasBg from '../../../assets/images/digital-canvas/Background.png';

export const RootWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 60px;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: auto;
  max-width: 1800px;

  @media (min-width: 700px) {
    flex-direction: row;
    max-height: calc(100vh - 60px);
  }
`;

export const CanvasDisplayWrapper = styled.div`
  pointer-events: none;
  height: 70vh;
  @media (min-width: 700px) {
    position: absolute;
    width: ${({ width }) => width}px;
    padding: 36px 18px 48px 36px;
    height: 95vh;
  }
`;

export const CanvasImageWrapper = styled.div`
  width: 100%;
  height: 100%;
  pointer-events: none;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: url(${CanvasBg});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;

  @media (min-width: 700px) {
    border-radius: 24px;
  }
`;

export const SettingsWrapper = styled.div`
  width: 100%;
`;

export const SettingWrapper = styled.div`
  padding: 20px;
  height: 100%;
  padding-top: ${({ top }) => top};

  @media (min-width: 700px) {
    overflow-y: scroll;
  }

  &::-webkit-scrollbar {
    width: 0;
  }
`;

export const ContentWrapper = styled.div`
  margin-bottom: 24px;
  @media (min-width: 700px) {
    margin-left: 50%;
  }
`;

export const ContentTitle = styled.div`
  font-style: normal;
  font-weight: bold;
  font-size: 30px;
  line-height: 32px;
  letter-spacing: -0.02em;
  margin: 0 0 24px 0;
  @media (max-width: 767px) {
    font-size: 20px;
    line-height: 24px;
    letter-spacing: -0.015em;
  }
`;

export const ConfigureBlock = styled.div`
  background: ${({ theme }) => theme.colors.base3};
  padding: 48px 36px 48px 48px;
  box-shadow: 2px 2px 6px rgba(0, 0, 0, 0.45);
  border-radius: 24px;
  margin-bottom: 48px;
  @media (max-width: 767px) {
    padding: 24px 12px 24px 24px;
  }
`;

export const Title = styled.p`
  font-style: normal;
  font-weight: bold;
  font-size: 72px;
  line-height: 72px;
  letter-spacing: -0.005em;
  width: 100%;
  flex-basis: 10%;
  padding: 10px 10px 20px 10px;
  margin: 0;

  @media (max-width: 699px) {
    font-size: 44px;
    line-height: 44px;
  }
`;

export const DisplaySizeWrapper = styled.div`
  margin-bottom: 10px;
`;

export const ConfigureBlockTitle = styled.div`
  font-style: normal;
  font-weight: bold;
  font-size: 12px;
  line-height: 16px;
  display: flex;
  align-items: center;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  margin-bottom: 24px;
`;
export const ConfigureBlockPriceTitle = styled.div`
  font-style: normal;
  font-weight: bold;
  font-size: 12px;
  line-height: 16px;
  display: flex;
  align-self: center;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  margin-bottom: 12px;
`;
export const DisplaySizeItemWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

export const DisplaySizeItemColumn = styled.div`
  margin: 0 12px 12px 0;
  flex-basis: calc(33.33% - 12px);
`;

export const DisplaySizeItem = styled.div`
  background: ${({ theme }) => theme.colors.base4};
  box-shadow: 2px 2px 6px rgba(0, 0, 0, 0.45);
  border-radius: 12px;
  padding: 12px 0px;
  text-align: center;
  cursor: pointer;
  border: 2px solid ${({ isActive }) => (isActive ? '#910048' : '#444444')};
`;

export const FrameColorWrapper = styled.div`
  margin-bottom: 12px;
`;

export const FrameColorItemWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

export const FrameColorItemColumn = styled.div`
  margin: 0 12px 12px 0;
  flex-basis: calc(25% - 12px);
  text-align: center;
  background: ${({ theme }) => theme.colors.base4};
  box-shadow: 2px 2px 6px rgba(0, 0, 0, 0.45);
  border-radius: 12px;
  position: relative;
  @media (max-width: 767px) {
    flex-basis: calc(50% - 12px);
  }
`;

export const FrameColorItem = styled.div`
  width: 100%;
  height: 48px;
  border-radius: 12px;
  border: 2px solid ${({ isActive, theme }) => (isActive ? theme.colors.accent : theme.colors.base4)};
  background: url(${({ color }) => color});
  background-repeat: no-repeat;
  background-size: ${({ width }) => (width > 144 ? 'contain' : 'cover')};
  background-position: center;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;

export const PurchaseWrapper = styled.div`
  padding: 0 12px 0 0;
`;

export const PurchasePriceWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const PurchaseTotalWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const DividerLine = styled.div`
  border-bottom: 1px solid ${({ theme }) => theme.colors.base4};
  margin: 0 0 24px 0;
`;

export const ItemTotal = styled.div`
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 24px;
  letter-spacing: 0.025em;
  margin-bottom: 12px;
`;

export const PurchaseTotalPrice = styled.div`
  font-style: normal;
  font-weight: bold;
  font-size: 20px;
  line-height: 24px;
  letter-spacing: -0.015em;
  margin-bottom: 12px;
`;

export const ContentDescriptionWrapper = styled.ul`
  margin: 0;
  padding: 0;
  margin: 0 12px 0 0;
`;

export const ContentDescriptionItem = styled.div`
  background: ${({ theme }) => theme.colors.base4};
  box-shadow: 2px 2px 6px rgba(0, 0, 0, 0.45);
  border-radius: 12px;
  width: 100%;
  height: 48px;
  display: flex;
  align-items: center;
  padding: 12px;
`;

export const ContentDescription = styled.div`
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 24px;
  letter-spacing: 0.025em;
  @media (max-width: 767px) {
    font-size: 14px;
    line-height: 16px;
  }
`;

export const ContentDescriptionAttribute = styled.div`
  font-size: 16px;
  line-height: 24px;
`;

export const CardContainer = styled.div`
  background: ${({ theme }) => theme.colors.base3};
  box-shadow: 0px 37px 31px rgba(0, 0, 0, 0.2), 0px 18.5181px 15.5151px rgba(0, 0, 0, 0.152067),
    0px 11.1544px 9.34559px rgba(0, 0, 0, 0.130318), 0px 7.14833px 5.98915px rgba(0, 0, 0, 0.114179),
    0px 4.63297px 3.88168px rgba(0, 0, 0, 0.1), 0px 2.9164px 2.44347px rgba(0, 0, 0, 0.0858211),
    0px 1.67566px 1.40393px rgba(0, 0, 0, 0.0696822), 0px 0.7375px 0.617905px rgba(0, 0, 0, 0.0479335);
  border-radius: 24px;
  margin: 0 0 48px 0;
`;

export const CardTopContainer = styled.div`
  padding: 48px;
  @media (max-width: 767px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 24px;
    text-align: center;
  }
`;
export const ThumbnailContainer = styled.div`
  width: 100%;
  position: relative;
  overflow: hidden;
  border-radius: 0 0 24px 24px;
  filter: drop-shadow(0px 8px 7px rgba(0, 0, 0, 0.25)) drop-shadow(0px 3.34221px 2.92443px rgba(0, 0, 0, 0.179714))
    drop-shadow(0px 1.7869px 1.56354px rgba(0, 0, 0, 0.149027))
    drop-shadow(0px 1.00172px 0.876509px rgba(0, 0, 0, 0.125))
    drop-shadow(0px 0.532008px 0.465507px rgba(0, 0, 0, 0.100973))
    drop-shadow(0px 0.221381px 0.193708px rgba(0, 0, 0, 0.0702864));
`;

export const ThumbnailAspectRatioBox = styled.div`
  padding-bottom: 50%;
  position: relative;
  width: 100%;
`;

export const ThumbnailFrame = styled.div``;

export const ThumbnailImage = styled.div`
  height: 100%;
  width: 100%;
  top: 0;
  left: 0;
  position: absolute;
  background-image: url(${(props) => props.backgroundImage});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
`;
