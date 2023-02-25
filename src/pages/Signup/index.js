import React, { useState, useCallback } from 'react';
import { useHistory } from 'react-router-dom';
import { Formik, Form, Field } from 'formik';
import { Flex, Box } from 'reflexbox';
import * as yup from 'yup';

// Component
import LoginLanding from '../../components/Landing/Login';
import { Button } from '../../components/Button';
import { TextInput } from '../../components/Form';

// Hooks
import { useCreateUser, useAuthenticate } from '../../hooks/mutations';

// Styled
import { RootWrapper, FlexContainer, LoginFormWrapper, Wrapper, Title } from './styled';

const validationSchema = yup.object().shape({
  email: yup.string().email().required(),
  givenName: yup.string().required().label('First Name'),
  surname: yup.string().required().label('Last Name'),
  password: yup.string().min(8).required(),
  repeatPassword: yup
    .string()
    .oneOf([yup.ref('password'), null], 'Passwords must match')
    .required()
    .label('Repeat Password'),
});
const initialValues = {
  email: '',
  givenName: '',
  surname: '',
  password: '',
  repeatPassword: '',
};

const SignupPage = () => {
  const history = useHistory();
  const createUser = useCreateUser();
  const authenticate = useAuthenticate();
  const [isClickSignIn, setIsClickSignIn] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleClickSignIn = () => {
    setIsClickSignIn(true);
    history.push(`/login`);
  };

  const handleSignupSubmit = useCallback(async (values) => {
    setLoading(true);
    await createUser.mutateAsync({ values, setLoading, history });
    await authenticate.mutate({ values, setLoading, history });
  });

  return (
    <RootWrapper>
      <FlexContainer>
        <LoginLanding left={isClickSignIn ? '50%' : '0%'} onClick={handleClickSignIn} />
        <Wrapper left={isClickSignIn ? '0%' : '50%'}>
          <LoginFormWrapper>
            <Title>Create an account</Title>
            <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={handleSignupSubmit}>
              <Form>
                <Field name="email" type="email" label="Email" placeholder="you@email.com" component={TextInput} />
                <Flex>
                  <Box width={1 / 2} marginRight={10}>
                    <Field name="password" type="password" label="Password" component={TextInput} />
                  </Box>
                  <Box width={1 / 2} marginLeft={10}>
                    <Field name="repeatPassword" type="password" label="Repeat Password" component={TextInput} />
                  </Box>
                </Flex>
                <Flex>
                  <Box width={1 / 2} marginRight={10}>
                    <Field name="givenName" label="First Name" component={TextInput} />
                  </Box>
                  <Box width={1 / 2} marginLeft={10}>
                    <Field name="surname" label="Last Name" component={TextInput} />
                  </Box>
                </Flex>
                <Button type="submit" color={loading ? '' : 'red'} disabled={loading}>
                  {loading ? 'Loading....' : 'Create Account'}
                </Button>
              </Form>
            </Formik>
          </LoginFormWrapper>
        </Wrapper>
      </FlexContainer>
    </RootWrapper>
  );
};

export default SignupPage;
