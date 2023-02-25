import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from '@emotion/styled';

import { Loader } from '../../components/Loader';
import ContentHeader from '../../components/Layouts/Account/AccountContentHeader';
import EditProfileForm from './EditProfileForm';

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

export default function EditProfile() {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);

  const [loading, setLoading] = useState(true);

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

  return (
    <RootWrapper>
      {loading && <Loader color="white" />}
      {!loading && (
        <>
          <ContentHeader title="Edit Profile" />
          <ContentWrapper>
            <EditProfileForm user={user} pageType="editProfile" />
          </ContentWrapper>
        </>
      )}
    </RootWrapper>
  );
}
