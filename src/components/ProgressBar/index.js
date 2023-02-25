import React from 'react';
import PropTypes from 'prop-types';

import { Wrapper, ProgressInner, Metadata, Percentage, SizeProgress } from './styles';

const ProgressBar = ({ current, total }) => {
  const percentage = Math.round((current / total) * 100);

  const friendlySize = (size) => {
    const byte = parseInt(size, 10);

    if (byte > 1073741824) {
      return `${Math.round((byte / 1073741824) * 100) / 100} GB`;
    }

    if (byte > 1048576) {
      return `${Math.round((byte / 1048576) * 100) / 100} MB`;
    }

    if (byte > 1024) {
      return `${Math.round((byte / 1024) * 100) / 100} KB`;
    }

    return `${Math.round(byte * 100)} B`;
  };

  return (
    <Wrapper>
      <ProgressInner progress={percentage} />
      <Metadata>
        {percentage === 100 ? <Percentage>Transfer Complete</Percentage> : <Percentage>{`${percentage}%`}</Percentage>}
        {percentage === 100 || <SizeProgress>{`${friendlySize(current)} of ${friendlySize(total)}`}</SizeProgress>}
      </Metadata>
    </Wrapper>
  );
};

ProgressBar.propTypes = {
  current: PropTypes.number,
  total: PropTypes.number,
};

ProgressBar.defaultProps = {
  current: 0,
  total: 100,
};

export default ProgressBar;
