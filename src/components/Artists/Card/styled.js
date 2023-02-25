import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

export const StyledLink = styled(Link)`
  display: flex;
  background: #222222;
  border-radius: 100px 12px 12px 100px;
  height: 84px;
  text-decoration: none;

  &:hover {
    background: #333333;
  }

  @media (min-width: 768px) {
    height: 144px;
  }
`;

export const ThumbnailContainer = styled.div`
  img {
    object-fit: cover;
    height: 84px;
    width: 84px;
    border-radius: 100px;

    @media (min-width: 768px) {
      width: 144px;
      height: 144px;
    }
  }
`;

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 16px;
  justify-content: center;

  @media (min-width: 768px) {
    padding: 24px;
  }
`;

export const ArtistTitle = styled.div`
  font-style: normal;
  font-weight: bold;
  font-size: 16px;
  line-height: 24px;
  letter-spacing: 0.025em;
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
  margin-bottom: 8px;
  overflow-wrap: break-word;
  word-wrap: break-word;
  word-break: break-all;
  -ms-hyphens: auto;
  -moz-hyphens: auto;
  -webkit-hyphens: auto;
  hyphens: auto;

  @media (min-width: 768px) {
    font-size: 20px;
    line-height: 32px;
    letter-spacing: -0.015em;
    margin-bottom: 16px;
  }
`;

export const ArtistBio = styled.div`
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 20px;
  letter-spacing: 0.025em;
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

  @media (min-width: 768px) {
    font-size: 16px;
    line-height: 24px;
    -webkit-line-clamp: 2;
  }
`;
