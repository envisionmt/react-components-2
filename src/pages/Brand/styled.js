import styled from '@emotion/styled';

export const Wrapper = styled.div`
  max-width: 1440px;
  margin: auto;
`;
export const HeaderWrapper = styled.div`
  height: 35vh;
  padding: 60px 24px 24px 24px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  @media (max-width: 699px) {
    height: 55vh;
  }
`;
export const Header = styled.div`
  font-size: 60px;
  font-weight: bold;
  margin: 0px 0px 20px 0px;
  text-transform: none;
  @media (max-width: 699px) {
    font-size: 48px;
  }
`;
export const SubHeader = styled.div`
  font-size: 20px;
  font-weight: bold;
`;
export const Section = styled.div`
  padding: 24px;
`;
export const SectionHeader = styled.div`
  display: flex;
  flex-direction: column;
`;
export const TopHeader = styled.div`
  flex-basis: 100%;
  font-size: 48px;
  font-weight: bold;
  margin: 0px 0px 20px 0px;
  text-transform: none;
`;
export const HeaderDescription = styled.div`
  display: flex;
  padding: 12px;
  margin: 0 0 12px 0;
  @media (max-width: 767px) {
    flex-direction: column;
  }
`;
export const Top = styled.div`
  flex-basis: 50%;
  font-size: 20px;
  line-height: 24px;
  font-weight: bold;
  text-transform: none;
  padding-top: 6px;
  margin: 0 12px 0 0;
  @media (max-width: 699px) {
    margin: 0;
  }
`;
export const Bot = styled.div`
  flex-basis: 50%;
  padding-top: 6px;
`;
export const BotList = styled.ul`
  margin: 0;
  padding: 0 0 0 12px;
`;
export const SectionBodyHeader = styled.div`
  font-size: 36px;
  font-weight: normal;
  margin: 0px 0px 20px 0px;
  text-transform: none;
`;
export const SectionCards = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 0 0 12px 0;
  flex-direction: row;
`;
export const SectionCard = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  padding: 12px;
  margin: auto;
  @media (max-width: 767px) {
    flex-basis: calc(100% - 24px);
    max-width: calc(100% - 24px);
  }
  @media (min-width: 768px) {
    flex-basis: calc(50% - 24px);
    max-width: calc(50% - 24px);
  }
  @media (min-width: 1440px) {
    flex-basis: calc(33.33% - 24px);
    max-width: calc(33.33% - 24px);
  }
`;
export const Link = styled.a`
  font-style: normal;
  font-weight: 600;
  font-size: 12px;
  line-height: 16px;
  text-align: center;
  letter-spacing: 0.05em;
  color: #444444;
  text-decoration: none;
  margin: 0 5px 0 5px;
  &:hover {
    text-decoration: underline;
  }
`;
export const Divider = styled.div`
  border-bottom: 1px solid #444444;
  margin: 0 0 24px 0;
`;
