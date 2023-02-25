import React from 'react';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';

const Wrapper = styled.div`
  width: 100%;
  height: 0;
  padding-bottom: ${({ height }) => height}%;
`;

export function AspectRatioBox({ aspectRatio, children }) {
  return <Wrapper height={aspectRatio * 100}>{children}</Wrapper>;
}

AspectRatioBox.propTypes = {
  aspectRatio: PropTypes.number.isRequired,
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.arrayOf(PropTypes.node)]).isRequired,
};
