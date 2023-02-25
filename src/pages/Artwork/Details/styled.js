import styled from '@emotion/styled';
import { Link } from 'react-router-dom';
import { lighten } from 'polished';

export const RootWrapper = styled.div`
  width: 100%;
  min-height: 800px;
  display: flex;
  flex-direction: column;

  .info {
    max-width: 1440px;
    margin: auto;
  }
`;

export const LoadWrapper = styled.div`
  padding: 200px 0px;
`;

export const DetailsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: center;
  margin: 12px;
  padding: 12px;

  .container {
    margin: 6px;
  }

  @media (min-width: 768px) {
    margin: 24px;
    flex-direction: row;
    flex-wrap: wrap;

    .container {
      margin: 12px;
    }
    #two {
      flex-basis: calc(50% - 24px);
      max-width: calc(50% - 24px);
    }
  }
`;

export const Title = styled.h2`
  font-style: normal;
  font-weight: bold;
  font-size: 30px;
  line-height: 32px;
  letter-spacing: -0.02em;
  margin: 0px 0px 12px 0px;
  text-transform: none;

  @media (min-width: 768px) {
    font-style: normal;
    font-weight: bold;
    font-size: 48px;
    line-height: 48px;
    letter-spacing: -0.04em;
    margin: 0px 0px 24px 0px;
  }
`;

export const SubTitle = styled.h4`
  font-style: normal;
  font-weight: bold;
  font-size: 16px;
  line-height: 24px;
  letter-spacing: 0.025em;
  text-transform: none;
  margin: 12px 0;

  @media (min-width: 768px) {
    font-size: 20px;
  }
`;

export const MoreSubTitle = styled.h4`
  font-style: normal;
  font-weight: bold;
  font-size: 16px;
  line-height: 24px;
  letter-spacing: 0.025em;
  text-transform: none;
  margin: 12px 0 12px 24px;

  @media (min-width: 768px) {
    font-size: 20px;
    margin: 12px 0 12px 48px;
  }
`;
export const ArtistWrapper = styled.div`
  margin: 0px 0px 24px 0px;
  display: flex;
  align-items: center;
  width: auto;

  @media (min-width: 768px) {
    margin: 0px 0px 48px 0px;
  }
`;

export const ArtistImage = styled.img`
  width: 24px;
  height: 24px;
  margin-right: 12px;
  border-radius: 50%;

  @media (min-width: 768px) {
    width: 36px;
    height: 36px;
  }
`;

export const ArtistName = styled(Link)`
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 24px;
  letter-spacing: 0.025em;
  text-transform: none;
  text-decoration: none;

  &:hover {
    color: ${lighten(0.1, '#910048')};
  }

  @media (min-width: 768px) {
    font-style: normal;
    font-weight: normal;
    font-size: 20px;
    line-height: 24px;
    letter-spacing: -0.015em;
  }
`;

export const DescriptionWrapper = styled.div`
  margin-bottom: 24px;
  @media (min-width: 768px) {
    flex-basis: calc(50% - 24px);
    max-width: calc(50% - 24px);
  }
`;

export const DescriptionText = styled.div`
  p {
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 16px;
    letter-spacing: 0.025em;
  }
  @media (min-width: 768px) {
    p {
      font-size: 16px;
      line-height: 24px;
    }
  }
`;

export const ArtworkDetailWrapper = styled.div`
  padding: 48px;
`;

export const HistoryCardWrapper = styled.div`
  margin-top: 24px;
`;

export const ButtonWrapper = styled.div`
  margin-top: 24px;
`;

export const BuyCardWrapper = styled.div`
  margin-bottom: 48px;
`;

export const MoreWrapper = styled.div`
  .more {
    margin-left: 12px;
  }
`;
