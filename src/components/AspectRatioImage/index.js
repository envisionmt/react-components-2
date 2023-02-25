import React from 'react';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';

const Wrapper = styled.div`
  width: 100%;
  height: 0;
  padding-bottom: ${({ height }) => height}%;
  background-image: ${({ imageUrl }) => (imageUrl ? `url(${imageUrl})` : 'none')};
  background-size: ${({ type }) => type || 'cover'};
  background-repeat: no-repeat;
  background-position: center;
`;

export function AspectRatioImage({ aspectRatio, imageUrl, type }) {
  return <Wrapper height={aspectRatio * 100} imageUrl={imageUrl} type={type} />;
}

AspectRatioImage.propTypes = {
  aspectRatio: PropTypes.number.isRequired,
  imageUrl: PropTypes.string.isRequired,
  type: PropTypes.string,
};

AspectRatioImage.defaultProps = {
  type: 'cover',
};
