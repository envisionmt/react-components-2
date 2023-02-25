import React, { useCallback, useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import styled from '@emotion/styled';
import { Flex, Box } from 'reflexbox';
import { envisionClient } from '@envision/utils';
import { useNotifications } from 'reapop';
import { Label, Form, SubmitButton, Switch } from '@envision/ui';

import { Loader } from '../../components/Loader';
import { PageTitle } from '../../components/Typography';

const Wrapper = styled.div``;

const NotificationSettingsPage = () => {
  const { notify } = useNotifications();
  const history = useHistory();
  const user = useSelector((state) => state.user);
  const [loading, setLoading] = useState(true);
  const [submitting, setSubmitting] = useState(false);
  const [formState, setFormState] = useState({
    introductionEmails: false,
  });

  useEffect(() => {
    if (user?.data?.user?.id) {
      setFormState({ introductionEmails: user?.data?.user?.emailNotification });
      setLoading(false);
    }
  }, [user]);

  const handleInputChange = useCallback((e) => {
    setFormState({ ...formState, [e.target.name]: e.target.value });
  });

  const handleFormSubmit = useCallback(async (e) => {
    try {
      e.preventDefault();
      if (submitting) return;
      setSubmitting(true);

      const params = {
        emailNotification: formState.introductionEmails,
      };

      const { status } = await envisionClient.put(`/users/${user?.data?.user?.id}/email-notification`, params);

      if (status === 200) {
        notify({
          status: 'success',
          title: 'Settings Saved',
          message: 'Your setings have been saved successfully.',
        });
        history.push('/account');
        return;
      }

      notify({
        status: 'error',
        title: 'Uh oh!',
        message: 'There was a problem updating your settings.',
      });
      setSubmitting(false);
      return;
    } catch (err) {
      notify({
        status: 'error',
        title: 'Uh oh!',
        message: 'There was a problem updating your settings.',
      });
      setSubmitting(false);
    }
  });

  return (
    <Wrapper>
      {loading && <Loader />}
      {!loading && (
        <>
          <PageTitle>Notifications Settings</PageTitle>
          <Form onSubmit={handleFormSubmit}>
            <Flex flexWrap="wrap">
              <Box width={[1, 1 / 3]}>
                <Label>Introduction Emails</Label>
                <Switch
                  name="introductionEmails"
                  defaultValue={user?.data?.user?.emailNotification}
                  onChange={handleInputChange}
                />
              </Box>
            </Flex>
            <SubmitButton submitting={submitting}>Save Changes</SubmitButton>
          </Form>
        </>
      )}
    </Wrapper>
  );
};

export default NotificationSettingsPage;
