import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';

const ProcessItemWrapper = styled.div``;

const ProcessImage = styled.img`
  width: 100%;
  height: 500px;
  object-fit: cover;
`;

const Title = styled.div`
  font-size: 40px;
  font-weight: bold;
  text-align: left;
  margin: 20px 0;
`;

const Description = styled.div`
  font-size: 18px;
`;

export default function ProcessItem(props) {
  const { process } = props;

  return (
    <ProcessItemWrapper>
      <ProcessImage src={process.image} />
      <Title>{process.title}</Title>
      <Description>{process.description}</Description>
    </ProcessItemWrapper>
  );
}

ProcessItem.propTypes = {
  process: PropTypes.object,
};

ProcessItem.defaultProps = {
  process: null,
};
