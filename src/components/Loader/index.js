import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import { Spinner } from '@envision/ui';

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: center;
  z-index: 210;
`;

export function Loader({ size, color, type }) {
  return (
    <Wrapper>
      <Spinner color={color} size={size} type={type} />
    </Wrapper>
  );
}

Loader.propTypes = {
  size: PropTypes.string,
  color: PropTypes.string,
  type: PropTypes.string,
};

Loader.defaultProps = {
  size: '40px',
  color: 'white',
  type: 'ZEN_CIRCLE',
};
