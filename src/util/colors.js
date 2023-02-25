import { lighten, darken } from 'polished';

const colors = {
  white: '#fff',
  black: '#000',
  base: '#171717',
  baseLighter: lighten(0.08, '#171717'),
  baseDarker: darken(0.05, '#171717'),
  primary: '#ee1e23',
  primaryLighter: lighten(0.1, '#ee1e23'),
  primaryDarker: darken(0.1, '#ee1e23'),
  secondary: '#333333',
  secondaryLighter: lighten(0.1, '#333333'),
  secondaryDarker: darken(0.1, '#333333'),
  light: '#d5d3d3',
  lightLighter: lighten(0.1, '#d5d3d3'),
  lightDarker: darken(0.2, '#d5d3d3'),
  facebookBlue: '#3C5999',
  facebookBlueLighter: lighten(0.05, '#3C5999'),
  facebookBlueDarker: darken(0.05, '#3C5999'),
};

export default colors;
