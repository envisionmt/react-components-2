import React from 'react';
import PropTypes from 'prop-types';

// Components
import { Button } from '../../Button';

// Images
import LandingBg from '../../../assets/images/login/landing-bg.jpg';

// Styled
import { LandingWrapper, LandingBackground, LandingDetailWrapper, LandingTitle, LandingText } from './styled';

export default function SignUpLanding({ left, onClick }) {
  return (
    <LandingWrapper left={left}>
      <LandingBackground src={LandingBg} />
      <LandingDetailWrapper>
        <LandingTitle>New to envision?</LandingTitle>
        <LandingText>
          Sign up today to discover, collect and share the art of our generation. Experience art like never before.
        </LandingText>
        <Button type="submit" color="red" onClick={onClick}>
          Create Account
        </Button>
      </LandingDetailWrapper>
    </LandingWrapper>
  );
}

SignUpLanding.propTypes = {
  left: PropTypes.string,
  onClick: PropTypes.func,
};

SignUpLanding.defaultProps = {
  left: '',
  onClick: () => {},
};
