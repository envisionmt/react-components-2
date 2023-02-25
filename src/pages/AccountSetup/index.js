import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Formik, Form, Field } from 'formik';
import { Box } from 'reflexbox';
import * as yup from 'yup';

// Components
import { Button } from '../../components/Button';
import { TextInput } from '../../components/Form';
import { Loader } from '../../components/Loader';

// Hooks
import { useSetupToken } from '../../hooks/data';
import { useQuery } from '../../hooks/useQuery';
import { useSetupUser, useAuthenticate } from '../../hooks/mutations';

// Styled
import { Wrapper } from './styles';

const validationSchema = yup.object().shape({
  password: yup.string().min(8).required(),
  repeatPassword: yup
    .string()
    .oneOf([yup.ref('password'), null], 'Passwords must match')
    .required()
    .label('Repeat Password'),
});
const initialValues = {
  password: '',
  repeatPassword: '',
};

export function AccountSetup() {
  const query = useQuery();
  const history = useHistory();
  const setupToken = useSetupToken(query.get('token'), query.get('email'));
  const authenticate = useAuthenticate();
  const setupUser = useSetupUser();
  const [loading, setLoading] = useState(false);

  const handleSetupSubmit = async (values) => {
    setLoading(true);

    await setupUser.mutateAsync({
      values: { ...values, userId: setupToken.data.userId },
      setLoading,
      token: setupToken.data.token,
    });
    await authenticate.mutateAsync({ values: { email: query.get('email'), password: values.password }, setLoading });
    history.push('/collections');
  };

  return (
    <>
      {setupToken.isLoading && <Loader size={15} />}
      {setupToken.isFetched && (
        <Wrapper>
          <Box width={1 / 2} mr="auto" ml="auto">
            <div>
              <h1>Welcome to envision</h1>
              <p>Please create a password to continue setting up your account.</p>
            </div>

            <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={handleSetupSubmit}>
              <Form>
                <Field name="password" type="password" label="Password" component={TextInput} />
                <Field name="repeatPassword" type="password" label="Repeat Password" component={TextInput} />
                <Button type="submit" color={loading ? '' : 'red'} disabled={loading}>
                  {loading ? 'Loading....' : 'Finish'}
                </Button>
              </Form>
            </Formik>
          </Box>
        </Wrapper>
      )}
    </>
  );
}
