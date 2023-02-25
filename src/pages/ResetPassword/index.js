import React, { useState, useCallback } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useNotifications } from 'reapop';
import { Button, Form, TextInput, SubmitButton } from '@envision/ui';
import { Flex, Box } from 'reflexbox';

import { Wrapper, Logo, Heading, InputWrapper, ButtonWrapper, Message } from './styles';

import { resetPassword } from '../../store/password/actions';
import { RESET_USER_SUCCESS, RESET_USER_FAILURE } from '../../store/password/constants';

import logo from '../../assets/images/envision-logo.png';

const ResetPassword = () => {
  const { notify } = useNotifications();
  const history = useHistory();
  const { token } = useParams();
  const dispatch = useDispatch();
  const [submitting, setSubmitting] = useState(false);
  const [message, setMessage] = useState(false);
  const [err, setErr] = useState(false);
  const [formState, setFormState] = useState({ password: '', passwordRepeat: '' });
  const handleInputChange = useCallback((e) => setFormState({ ...formState, [e.target.name]: e.target.value }));
  const handleResetSubmit = useCallback(async (e) => {
    e.preventDefault();
    if (submitting) return;
    setSubmitting(true);

    if (
      formState.password.length === 0 ||
      formState.passwordRepeat.length === 0 ||
      formState.password !== formState.passwordRepeat
    ) {
      notify({
        status: 'error',
        title: 'Uh oh!',
        message: 'You must enter all required fields.',
      });
      setSubmitting(false);
      return;
    }

    const resetResult = await dispatch(resetPassword(token, formState));

    if (resetResult.type === RESET_USER_SUCCESS) {
      setMessage(true);
    }

    if (resetResult.type === RESET_USER_FAILURE) {
      notify({
        status: 'error',
        title: 'Uh oh!',
        message: 'Reset has expired, please try again.',
      });
      setSubmitting(false);
      setErr(true);
    }
  });

  return (
    <Wrapper>
      <Flex flexDirection="column" justifyContent="center" alignItems="center">
        <Box width={[1, 1, 0.4]}>
          <Logo src={logo} alt="envision" />
        </Box>
        <Box width={[0.8, 0.8, 0.3]}>
          <Heading>Reset Password</Heading>

          {message ? (
            <>
              <Message>
                Your new password has now been set and you <br />
                can now login with these credentials on the login page or in <br />
                the mobile app.
              </Message>
              <ButtonWrapper>
                <Button to="/login" block round outline>
                  Go to Login Page
                </Button>
              </ButtonWrapper>
            </>
          ) : (
            <>
              <Message>
                To make your password more secure, <br />
                use a combination of upper and lower case letters,
                <br /> numbers and special characters such as @, % and !
              </Message>
              <Form onSubmit={err ? history.push('/forgot-password') : handleResetSubmit}>
                <InputWrapper>
                  <TextInput name="password" type="password" placeholder="New Password" onChange={handleInputChange} />
                  <TextInput
                    name="passwordRepeat"
                    type="password"
                    placeholder="Confirm Password"
                    onChange={handleInputChange}
                  />
                </InputWrapper>
                <ButtonWrapper>
                  <SubmitButton submitting={submitting} block round to="">
                    Continue
                  </SubmitButton>
                </ButtonWrapper>
              </Form>
            </>
          )}
        </Box>
      </Flex>
    </Wrapper>
  );
};

export default ResetPassword;
