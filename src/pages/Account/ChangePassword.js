import React, { useState, useEffect, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from '@emotion/styled';
import { Flex, Box } from 'reflexbox';

import { envisionClient } from '@envision/utils';
import { useNotifications } from 'reapop';

import IconError from '../../assets/images/icons/icon-error.svg';

import { Loader } from '../../components/Loader';
import ContentHeader from '../../components/Layouts/Account/AccountContentHeader';
import MainButton from '../../components/Button/MainButton';

import { fetchUser } from '../../store/user/actions';

const RootWrapper = styled.div`
  width: 768px;
  background: #111111;
  height: 100%;
`;

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 48px;
`;

const Form = styled.form`
  ${'' /* width: 100%; */}
`;

const InputWrapper = styled.div`
  width: 100%;
  margin-bottom: 20px;
`;

const Label = styled.div`
  font-size: 12px;
  text-transform: uppercase;
  color: #ffffff;
  margin-bottom: 10px;
`;

const Input = styled.input`
  width: 100%;
  height: 48px;
  background: #444444;
  border: 2px solid #444444;
  ${'' /* border: 2px solid #910048; */}
  box-sizing: border-box;
  box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.25);
  border-radius: 12px;
  padding: 10px;
  color: #fff;
  font-size: 16px;

  &:focus {
    outline: none !important;
    border: 2px solid #910048;
  }
`;

const ButtonGroup = styled.div`
  width: 100%;
  margin-top: 20px;
`;

const ButtonWrapper = styled.div``;

const ValidateWrapper = styled.div`
  display: flex;
  align-items: center;
  background: #910048;
  border-radius: 16px;
  padding: 5px 10px 7px;
  margin-bottom: 20px;
`;

const ValidateIcon = styled.img`
  width: 14px;
  height: 14px;
`;

const ValidateText = styled.span`
  font-size: 11px;
  color: #ffffff;
  margin-left: 5px;
`;

export default function ChangePassword() {
  const { notify } = useNotifications();
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);

  const [loading, setLoading] = useState(true);
  const [isPasswordWrong, setIsPasswordWrong] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [isVerifyPassword, setIsVerifyPassword] = useState(false);
  const [formState, setFormState] = useState({ currentPassword: '', newPassword: '', resetNewPassword: '' });

  useEffect(() => {
    if (user?.data?.user?.id) {
      setLoading(false);
    }
  }, [user]);

  useEffect(() => {
    const fetchData = async () => {
      dispatch(fetchUser());
    };
    fetchData();
  }, []);

  const handleInputChange = useCallback((e) => setFormState({ ...formState, [e.target.name]: e.target.value }));

  const handleResetForm = () => {
    setIsVerifyPassword(false);
    setFormState({ currentPassword: '', newPassword: '', resetNewPassword: '' });
  };

  const formValidate = () => {
    if (formState.newPassword !== formState.resetNewPassword) {
      setIsVerifyPassword(true);
      return false;
    }
    setIsVerifyPassword(false);
    return true;
  };

  const handleFormSubmit = useCallback(async (e) => {
    try {
      e.preventDefault();

      if (!formValidate()) return;
      if (submitting) return;
      setSubmitting(true);

      if (!formState.currentPassword || !formState.newPassword || !formState.resetNewPassword) {
        notify({
          status: 'error',
          title: 'Uh oh!',
          message: 'You must fill out all fields.',
        });
        setSubmitting(false);
        return;
      }

      if (formState.newPassword !== formState.resetNewPassword) {
        notify({
          status: 'error',
          title: 'Uh oh!',
          message: 'Passwords do not match.',
        });
        setIsPasswordWrong(true);
        setSubmitting(false);
        return;
      }

      const params = {
        oldPassword: formState.currentPassword,
        password: formState.newPassword,
        passwordAgain: formState.resetNewPassword,
      };

      const { status } = await envisionClient.put(`/users/${user?.data?.user?.id}/password`, params);

      if (status === 201) {
        notify({
          status: 'success',
          title: 'Password Changed',
          message: 'Your password has been changed.',
        });
        // history.push('/account');
        return;
      }

      notify({
        status: 'error',
        title: 'Uh oh!',
        message: 'There was a problem changing your password.',
      });
      setSubmitting(false);
      return;
    } catch (err) {
      notify({
        status: 'error',
        title: 'Uh oh!',
        message: 'There was a problem changing your password.',
      });
      setSubmitting(false);
    }
  });

  return (
    <RootWrapper>
      {loading && <Loader color="white" />}
      {!loading && (
        <>
          <ContentHeader title="Change Password" />
          <Form onSubmit={handleFormSubmit}>
            <ContentWrapper>
              <InputWrapper>
                <Label>Change Password</Label>
                <Input
                  type="password"
                  name="currentPassword"
                  placeholder="Current Password"
                  onChange={handleInputChange}
                  required
                />
              </InputWrapper>
              {isPasswordWrong && (
                <ValidateWrapper>
                  <ValidateIcon src={IconError} />
                  <ValidateText>Sorry, wrong password.</ValidateText>
                </ValidateWrapper>
              )}
              <InputWrapper>
                <Label>New Password</Label>
                <Input
                  type="password"
                  name="newPassword"
                  placeholder="New Password"
                  onChange={handleInputChange}
                  required
                />
              </InputWrapper>
              <InputWrapper>
                <Label>Reset New Password</Label>
                <Input
                  type="password"
                  name="resetNewPassword"
                  placeholder="Reset New Password"
                  onChange={handleInputChange}
                  required
                />
              </InputWrapper>
              {isVerifyPassword && (
                <ValidateWrapper>
                  <ValidateIcon src={IconError} />
                  <ValidateText>Please verify your password.</ValidateText>
                </ValidateWrapper>
              )}
              <ButtonGroup>
                <Flex flexWrap="wrap">
                  <Box width={[1, 1 / 2, 1 / 2]}>
                    <ButtonWrapper>
                      <MainButton
                        type="button"
                        title="Cancel"
                        color="grey"
                        borderColor="#111111"
                        onClick={handleResetForm}
                      />
                    </ButtonWrapper>
                  </Box>
                  <Box width={[1, 1 / 2, 1 / 2]}>
                    <ButtonWrapper>
                      <MainButton type="submit" title="Save Changes" color="red" borderColor="#111111" />
                    </ButtonWrapper>
                  </Box>
                </Flex>
              </ButtonGroup>
            </ContentWrapper>
          </Form>
        </>
      )}
    </RootWrapper>
  );
}
