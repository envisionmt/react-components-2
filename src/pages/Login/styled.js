import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

export const RootWrapper = styled.div`
  height: 100vh;
  @media (max-width: 699px) {
    width: auto;
    height: auto;
  }
`;

export const LandingWrapper = styled.div`
  width: 50%;
  height: 100%;
  position: relative;
`;

export const LandingPageBg = styled.img`
  height: 100%;
  position: relative;
`;

export const LadingDetailWrapper = styled.div`
  width: 396px;
  position: absolute;
  top: 30%;
  left: 72px;
`;

export const LandingTitle = styled.div`
  font-weight: bold;
  font-size: 48px;
  line-height: 48px;
  margin-bottom: 24px;
`;

export const LandingText = styled.div`
  font-size: 16px;
  line-height: 24px;
  margin-bottom: 48px;
`;

export const Wrapper = styled.div`
  @media (min-width: 700px) {
    flex-basis: 50%;
  }
  @media (max-width: 699px) {
    margin-top: 60px;
  }
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background: #222222;
  z-index: 0;
  transition-property: left;
  transition-duration: 1s;
  transition-timing-function: linear;
  transition-delay: 1s;
`;

export const FlexContainer = styled.div`
  display: flex;
  @media (max-width: 699px) {
    flex-direction: column;
  }
  height: 100%;
`;

export const LoginFormWrapper = styled.div`
  width: 100%;
  margin: auto;
  padding: 20px;
  text-align: -webkit-right;
  @media (min-width: 700px) {
    padding: 30px;
  }
  @media (min-width: 1000px) {
    padding: 60px;
  }
`;

export const Title = styled.div`
  font-weight: bold;
  font-size: 20px;
  text-align: left;
  margin-bottom: 24px;
`;

export const Label = styled.label`
  font-weight: 600;
  font-size: 12px;
  text-align: left;
  text-transform: uppercase;
`;

export const SocialButtonWrapper = styled.div`
  padding-bottom: 32px;
`;

export const LineWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 24px;
`;

export const Line = styled.img`
  width: 218.5px;
  height: 1px;
`;

export const Text = styled.span`
  font-weight: 600;
  font-size: 12px;
  text-transform: uppercase;
  color: #999999;
  margin: 0 12px;
`;

// export const Heading = styled.h1`
//   margin-bottom: 1.5em;
//   font-weight: 300;
// `;

export const Form = styled.form``;

export const InputWrapper = styled.div`
  padding-bottom: 28px;
  width: 100%;
`;

export const LabelWrapper = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  margin-bottom: 12px;
`;

export const ForgotPasswordLink = styled(Link)`
  display: flex;
  justify-content: flex-end;
  text-decoration: none;
  margin-top: 12px;
`;

export const ButtonWrapper = styled.div`
  width: 100%;
`;

export const InputCheckboxLabel = styled.label`
  position: relative;
  cursor: pointer;
  font-weight: 600;
  font-size: 12px;
  text-align: left;
  text-transform: uppercase;

  &:before {
    content: '';
    -webkit-appearance: none;
    background-color: transparent;
    border: 2px solid #ffffff;
    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.05), inset 0px -15px 10px -12px rgba(0, 0, 0, 0.05);
    padding: 10px;
    display: inline-block;
    position: relative;
    vertical-align: middle;
    cursor: pointer;
    margin-right: 15px;
    border-radius: 5px;
  }
`;

export const InputCheckbox = styled.input`
  cursor: pointer;
  display: none;

  &:checked + ${InputCheckboxLabel}:before {
    background: #910048;
    border: 2px solid #910048;
  }

  &:checked + ${InputCheckboxLabel}:after {
    content: '';
    display: block;
    position: absolute;
    top: 0px;
    left: 8px;
    width: 6px;
    height: 14px;
    border: solid #ffffff;
    border-width: 0 2px 2px 0;
    transform: rotate(45deg);
  }
`;

// export const OrDivider = styled.span`
//   display: block;
//   font-size: 1.3em;
//   margin-bottom: 1.1em;
//   font-weight: 300;
//   text-transform: uppercase;
//   text-align: center;
// `;

// export const FbIcon = styled.img`
//   display: inline-block;
//   vertical-align: top;
//   margin-top: -1px;
//   margin-right: 0.6em;
// `;

export const SignupOption = styled.span`
  display: block;
  text-align: center;
`;

// export const ForgotOption = styled.span`
//   display: block;
//   text-align: center;
//   margin-top: 0.8em;
// `;
