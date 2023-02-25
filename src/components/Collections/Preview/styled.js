import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

export const RootWrapper = styled.div`
  position: relative;
  background: #222222;
  border-radius: 24px;
  cursor: pointer;
  overflow: hidden;
  box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.3);
`;

export const StyledLink = styled(Link)`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px;
  text-decoration: none;
  padding: 20px;
`;

export const CollectionTitle = styled.div`
  display: block;
  font-size: 20px;
  line-height: 24px;
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const CardContent = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
`;

export const ThumbnailContainer = styled.div`
  position: relative;
`;

export const ThumbnailAspectRatioBox = styled.div`
  padding-bottom: 100%;
  position: relative;
  width: 100%;
`;

export const ThumbnailImage = styled.img`
  height: 100%;
  width: 100%;
  top: 0;
  left: 0;
  position: absolute;
`;
