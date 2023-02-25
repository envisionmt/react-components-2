import React, { useState, useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { Link, useHistory } from 'react-router-dom';
import { useNotifications } from 'reapop';

import SignUpLanding from '../../components/Landing/SignUp';
import MainInput from '../../components/Input';
import Alert from '../../components/Alert';
import MainButton from '../../components/Button/MainButton';

import {
  RootWrapper,
  Wrapper,
  FormWrapper,
  Title,
  Description,
  Form,
  LabelWrapper,
  Label,
  InputWrapper,
  ButtonWrapper,
  BackIconWrapper,
  BackIcon,
  Flex,
  Box,
} from './styles';

import { forgotPassword } from '../../store/password/actions';
import { FORGOT_USER_SUCCESS, FORGOT_USER_FAILURE } from '../../store/password/constants';

import IconBack from '../../assets/images/login/icon-back.svg';
import IconChecked from '../../assets/images/icons/icon-checked.svg';
import WarningIcon from '../../assets/images/icons/icon-warning-black.svg';

const ForgotPassword = () => {
  const { notify } = useNotifications();
  const dispatch = useDispatch();
  const history = useHistory();

  const [submitting, setSubmitting] = useState(false);
  const [isEmailSending, setEmailSending] = useState(false);
  const [isFormRequired, setIsFormRequired] = useState(false);
  const [formState, setFormState] = useState({ email: '' });

  const handleInputChange = useCallback((e) => setFormState({ ...formState, [e.target.name]: e.target.value }));
  const handleForgotSubmit = useCallback(async (e) => {
    e.preventDefault();
    if (submitting) return;
    setSubmitting(true);

    if (formState.email.length === 0) {
      setIsFormRequired(true);
      setSubmitting(false);
      return;
    }

    const forgotResult = await dispatch(forgotPassword(formState));

    if (forgotResult.type === FORGOT_USER_SUCCESS) {
      setEmailSending(true);
    }

    if (forgotResult.type === FORGOT_USER_FAILURE) {
      notify({
        status: 'error',
        title: 'Uh oh!',
        message: 'Failed to request password reset.',
      });
      setSubmitting(false);
    }
  });

  return (
    <RootWrapper>
      <Flex>
        <Wrapper>
          <Box>
            <Link to="/login">
              <BackIconWrapper>
                <BackIcon src={IconBack} />
                <Label>Back</Label>
              </BackIconWrapper>
            </Link>
          </Box>
          <FormWrapper>
            <Title>Forgot your password?</Title>
            <Description>
              Do not worry happens to the best of us. Just enter your email below and we will send you instructions to
              your password
            </Description>
            <Form onSubmit={handleForgotSubmit}>
              <InputWrapper>
                <LabelWrapper>
                  <Label>Email</Label>
                </LabelWrapper>
                <MainInput
                  name="email"
                  type="email"
                  placeholder="Email"
                  value={formState.email}
                  onChange={handleInputChange}
                />
              </InputWrapper>
              {isEmailSending && (
                <Box>
                  <Alert
                    width="100%"
                    bgColor="#009D3F"
                    borderColor="#009D3F"
                    textColor="#ffffff"
                    icon={IconChecked}
                    text="Email with instructions has been sent"
                  />
                </Box>
              )}
              {isFormRequired && (
                <Box>
                  <Alert
                    width="100%"
                    bgColor="#FFA800"
                    borderColor="#FFA800"
                    textColor="#111111"
                    icon={WarningIcon}
                    text="Email is a required field"
                  />
                </Box>
              )}
              <ButtonWrapper>
                <Flex justifyContent="space-between" alignItems="center" mr={12}>
                  <Box>
                    <MainButton type="submit" color="red" borderColor="#222222" title="Send Reset Instructions" />
                  </Box>
                </Flex>
              </ButtonWrapper>
            </Form>
          </FormWrapper>
        </Wrapper>
        <SignUpLanding left="50%" onClick={() => history.push(`/signup`)} />
      </Flex>
    </RootWrapper>
  );
};

export default ForgotPassword;
