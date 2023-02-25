import React from 'react';
import PropTypes from 'prop-types';

// Components
import { Button } from '../../Button';

// Images
import LandingBg from '../../../assets/images/login/landing-bg.jpg';

// Styled
import { LandingWrapper, LandingBackground, LandingDetailWrapper, LandingTitle, LandingText } from './styled';

export default function LoginLanding(props) {
  const { left, onClick } = props;
  return (
    <LandingWrapper left={left}>
      <LandingBackground src={LandingBg} />
      <LandingDetailWrapper>
        <LandingTitle>Already a collector?</LandingTitle>
        <LandingText>
          If you have an account, just sign in and experience the latest creations by your favorite artists
        </LandingText>
        <Button type="submit" color="red" onClick={onClick}>
          Sign In
        </Button>
      </LandingDetailWrapper>
    </LandingWrapper>
  );
}

LoginLanding.propTypes = {
  left: PropTypes.string,
  onClick: PropTypes.func,
};

LoginLanding.defaultProps = {
  left: '',
  onClick: () => {},
};
