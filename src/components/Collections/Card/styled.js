import styled from '@emotion/styled';

export const Wrapper = styled.div`
  background: #222222;
  width: 100%;
`;

export const CardText = styled.div`
  width: 100%;
  height: 100%;
  padding: 16px;

  @media (min-width: 1024px) {
    padding: 24px;
  }
`;

export const CollectionTitle = styled.div`
  display: flex;
  font-style: normal;
  font-weight: bold;
  font-size: 14px;
  line-height: 20px;
  letter-spacing: 0.025em;
  width: 100%;
  margin-bottom: 8px;
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
  overflow-wrap: break-word;
  word-wrap: break-word;
  word-break: break-all;
  -ms-hyphens: auto;
  -moz-hyphens: auto;
  -webkit-hyphens: auto;
  hyphens: auto;

  @media (min-width: 1024px) {
    font-style: normal;
    font-weight: bold;
    font-size: 20px;
    line-height: 32px;
    letter-spacing: -0.015em;
    margin-bottom: 12px;
  }
`;

export const CollectionDescription = styled.div`
  font-style: normal;
  font-weight: normal;
  font-size: 11px;
  line-height: 16px;
  min-height: 32px;
  letter-spacing: 0.025em;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
  overflow-wrap: break-word;
  word-wrap: break-word;
  word-break: break-all;
  -ms-hyphens: auto;
  -moz-hyphens: auto;
  -webkit-hyphens: auto;
  hyphens: auto;
`;

export const CardContent = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  background: #222222;
  border-radius: 12px;
  cursor: pointer;

  &:hover {
    background: #333333;
  }
`;

export const ThumbnailContainer = styled.div`
  position: relative;
  width: 100%;
  border-radius: 12px;
`;

export const ThumbnailAspectRatioBox = styled.div`
  padding-bottom: 100%;
  position: relative;
  width: 100%;
  border-radius: 12px;
`;

export const ThumbnailImage = styled.img`
  height: 100%;
  width: 100%;
  top: 0;
  left: 0;
  position: absolute;
  border-radius: 12px;
`;
