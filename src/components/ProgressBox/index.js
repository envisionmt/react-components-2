import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useTheme } from 'emotion-theming';
import { DateTime, Interval } from 'luxon';
import { Close } from '@emotion-icons/ionicons-sharp';

import {
  Wrapper,
  ProgressInner,
  Metadata,
  Percentage,
  Uploading,
  Name,
  SizeProgress,
  Remaining,
  CancelButton,
} from './styles';

const ProgressBox = ({ current, total, name, height, onCancel }) => {
  const theme = useTheme();
  const [startTime] = useState(DateTime.local());
  const currentTime = DateTime.local();

  const percentage = Math.round((current / total) * 100);
  const secondsElapsed = Interval.fromDateTimes(startTime, currentTime).toDuration('seconds').seconds;
  const bytesPerSecond = secondsElapsed && current ? current / secondsElapsed : 1;
  const bytesRemaining = total - current;
  const secondsRemaining = secondsElapsed ? bytesRemaining / bytesPerSecond : 0;

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

  const friendlyTime = (time) => {
    let remainingSeconds = parseInt(time, 10);
    let timeString = '';

    if (remainingSeconds >= 86400) {
      const days = Math.floor(remainingSeconds / 86400);
      remainingSeconds -= days * 86400;
      timeString += `${days} Days `;
    }

    if (remainingSeconds >= 3600) {
      const hours = Math.floor(remainingSeconds / 3600);
      remainingSeconds -= hours * 3600;
      timeString += `${hours} Hours `;
    }

    if (remainingSeconds >= 60) {
      const minutes = Math.floor(remainingSeconds / 60);
      remainingSeconds -= minutes * 60;
      timeString += `${minutes} Minutes `;
    }

    timeString += `${remainingSeconds} Seconds`;

    return timeString;
  };

  return (
    <Wrapper height={height}>
      <ProgressInner progress={percentage} height={height} />
      <Metadata>
        <Percentage>{`${percentage}%`}</Percentage>
        <Uploading>Uploading</Uploading>
        <Name>{name}</Name>
        <SizeProgress>{`${friendlySize(current)} of ${friendlySize(total)}`}</SizeProgress>
        <Remaining>{`${friendlyTime(secondsRemaining)} Remaining`}</Remaining>
      </Metadata>
      <CancelButton
        icon={Close}
        size="42"
        onClick={onCancel}
        bgColor={theme.colors.error}
        bgColorHover={theme.colors.errorDarker}
        color={theme.colors.white}
        colorHover={theme.colors.white}
      />
    </Wrapper>
  );
};

ProgressBox.propTypes = {
  current: PropTypes.number,
  total: PropTypes.number,
  name: PropTypes.string,
  height: PropTypes.string,
  onCancel: PropTypes.func,
};

ProgressBox.defaultProps = {
  current: 0,
  total: 100,
  name: 'File',
  height: '30px',
  onCancel: () => {},
};

export default ProgressBox;
