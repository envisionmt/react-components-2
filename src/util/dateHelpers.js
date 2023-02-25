import { DateTime } from 'luxon';

export const msToReadable = (ms) => {
  const second = 1000;
  const minute = 6000;
  const hour = 3600000;

  if (ms < minute) {
    return {
      value: ms / second,
      type: 'seconds',
    };
  }

  if (ms < hour) {
    return {
      value: ms / minute,
      type: 'minutes',
    };
  }

  return {
    value: ms / hour,
    type: 'hours',
  };
};

export const readableToMs = (value, type) => {
  const time = {
    seconds: 1000,
    minutes: 6000,
    hours: 3600000,
  };

  return Number(value) * time[type];
};

export const generateYears = () => {
  const current = DateTime.local().year;
  const years = [];
  for (let i = 0; i <= 110; i += 1) {
    years.push(current - i);
  }
  return years;
};

export const generateDays = () => {
  const days = [];
  for (let i = 1; i <= 31; i += 1) {
    days.push(i);
  }
  return days;
};
