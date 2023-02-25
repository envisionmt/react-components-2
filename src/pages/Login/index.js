import React, { useCallback, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Formik, Form, Field } from 'formik';
import * as yup from 'yup';

// Components
import SignUpLanding from '../../components/Landing/SignUp';
import { Button } from '../../components/Button';
import { TextInput } from '../../components/Form';

// Hooks
import { useAuthenticate } from '../../hooks/mutations';

// Styled
import { RootWrapper, FlexContainer, Wrapper, LoginFormWrapper, Title } from './styled';

const validationSchema = yup.object().shape({
  email: yup.string().email().required(),
  password: yup.string().min(8).required(),
});
const initialValues = {
  email: '',
  password: '',
};

const LoginPage = () => {
  const authenticate = useAuthenticate();
  const history = useHistory();

  const [isClickSingUp, setIsClickSignUp] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleClickSignUp = () => {
    setIsClickSignUp(true);
    history.push(`/signup`);
  };

  const handleLoginSubmit = useCallback(async (values) => {
    setLoading(true);
    await authenticate.mutate({ values, setLoading, history });
  });

  return (
    <RootWrapper>
      <FlexContainer>
        <Wrapper left={isClickSingUp ? '50%' : '0%'}>
          <LoginFormWrapper>
            <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={handleLoginSubmit}>
              <Form style={{ maxWidth: 480, textAlign: 'start' }}>
                <Title>Sign In</Title>
                <Field name="email" type="email" label="Email" placeholder="you@email.com" component={TextInput} />
                <Field name="password" type="password" label="Password" component={TextInput} />
                <Button type="submit" color={loading ? '' : 'red'} disabled={loading}>
                  {loading ? 'Loading....' : 'Sign In'}
                </Button>
              </Form>
            </Formik>
          </LoginFormWrapper>
        </Wrapper>
        <SignUpLanding left={isClickSingUp ? '0%' : '50%'} onClick={handleClickSignUp} />
      </FlexContainer>
    </RootWrapper>
  );
};

export default LoginPage;
