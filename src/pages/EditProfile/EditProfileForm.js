import React, { useState, useEffect, useCallback } from 'react';
import { useDispatch } from 'react-redux';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';
import { Flex, Box } from 'reflexbox';
import { countries, genders, months } from '@envision/utils';
import { useNotifications } from 'reapop';
import { generateYears, generateDays } from '../../util/dateHelpers';

import MainButton from '../../components/Button/MainButton';
import RaidoButton from '../../components/Radio';

import { updateUser, fetchUser } from '../../store/user/actions';
import { UPDATE_USER_SUCCESS, UPDATE_USER_FAILURE } from '../../store/user/constants';

const Form = styled.form`
  width: 100%;
`;

const InputWrapper = styled.div`
  display: block;
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

const RadioButtonGroupWrapper = styled.div`
  display: flex;
  margin-bottom: -20px;
`;

const RadioButtonGroup = styled.ul`
  list-style: none;
  margin: 0 0 20px;
  padding: 0;
`;

const RadioButtonList = styled.li`
  float: left;
  margin-right: 30px;
`;

const Select = styled.select`
  width: 100%;
  height: 48px;
  background: #444444;
  border: 2px solid #444444;
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

const SelectOption = styled.option`
  border: 1px solid #444444;
`;

const ButtonGroup = styled.div`
  width: 100%;
  margin-top: 40px;
`;

const ButtonWrapper = styled.div``;

export default function EditProfileForm(props) {
  const { notify } = useNotifications();
  const dispatch = useDispatch();
  const { user, pageType, onNextClick, onBackClick } = props;

  const [submitting, setSubmitting] = useState(false);
  const [gender, setGender] = useState('');
  const [days] = useState(generateDays());
  const [years] = useState(generateYears());
  const [formState, setFormState] = useState({
    firstName: '',
    lastName: '',
    email: '',
    country: '',
    state: '',
    day: '',
    month: '',
    year: '',
    phoneNumber: '',
  });

  useEffect(() => {
    if (user?.data?.user?.id) {
      const userData = user?.data?.user;
      const userDob = new Date(Date.parse(userData?.dateOfBirth));

      setGender(userData.gender);
      setFormState({
        firstName: userData.givenName,
        lastName: userData.surname,
        email: userData.email,
        country: userData.country,
        state: userData.state,
        day: userDob?.getDate(),
        month: userDob?.getMonth() + 1,
        year: userDob?.getFullYear(),
        phoneNumber: userData?.phoneNumber,
      });
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
    setFormState({
      firstName: '',
      lastName: '',
      email: '',
      state: '',
      phoneNumber: '',
    });
    setGender('');
  };

  const handleFormSubmit = useCallback(async (e) => {
    try {
      e.preventDefault();
      if (submitting) return;
      setSubmitting(true);

      const params = {
        givenName: formState.firstName,
        surname: formState.lastName,
        email: formState.email,
        gender,
        country: formState.country,
        state: formState.state,
        dateOfBirth: `${formState.year}-${formState.month}-${formState.day}`,
        phoneNumber: formState.phoneNumber,
      };

      const result = await dispatch(updateUser(user?.data?.user?.id, params));

      if (result.type === UPDATE_USER_SUCCESS) {
        await dispatch(fetchUser());
        notify({
          status: 'success',
          title: 'Details Updated',
          message: 'Your details have been updated.',
        });
        setSubmitting(false);
      }

      if (result.type === UPDATE_USER_FAILURE) {
        notify({
          status: 'error',
          title: 'Uh oh!',
          message: 'There was a problem updating your details.',
        });
        setSubmitting(false);
      }
    } catch (err) {
      notify({
        status: 'error',
        title: 'Uh oh!',
        message: 'There was a problem updating your details.',
      });
      setSubmitting(false);
    }
  });

  return (
    <Form onSubmit={handleFormSubmit}>
      <InputWrapper>
        <Label>First Name</Label>
        <Input
          type="text"
          value={formState.firstName}
          name="firstName"
          placeholder="First Name"
          onChange={handleInputChange}
          required
        />
      </InputWrapper>
      <InputWrapper>
        <Label>Last Name</Label>
        <Input
          type="text"
          value={formState.lastName}
          name="lastName"
          placeholder="Last Name"
          onChange={handleInputChange}
          required
        />
      </InputWrapper>
      <InputWrapper>
        <Label>Gender</Label>
        <RadioButtonGroupWrapper>
          <RadioButtonGroup>
            {genders.map((genderItem) => (
              <RadioButtonList key={genderItem}>
                <RaidoButton
                  label={genderItem}
                  checked={genderItem === gender}
                  onChange={() => setGender(genderItem)}
                />
              </RadioButtonList>
            ))}
          </RadioButtonGroup>
        </RadioButtonGroupWrapper>
      </InputWrapper>
      <InputWrapper>
        <Label>Date of Birth</Label>
        <Flex flexWrap="wrap">
          <Box width={[1, 1 / 3, 1 / 3]} pr="3">
            <Select value={formState.day} name="day" onChange={handleInputChange}>
              {days.map((day) => (
                <SelectOption value={day.toString()} key={day.toString()}>
                  {day.toString()}
                </SelectOption>
              ))}
            </Select>
          </Box>
          <Box width={[1, 1 / 3, 1 / 3]} pl="1" pr="2">
            <Select value={formState.month} name="month" onChange={handleInputChange}>
              {Object.keys(months).map((key) => (
                <SelectOption value={months[key].number} key={key}>
                  {months[key].number.toString()}
                </SelectOption>
              ))}
            </Select>
          </Box>
          <Box width={[1, 1 / 3, 1 / 3]} pl="3">
            <Select value={formState.year} name="year" onChange={handleInputChange}>
              {years.map((year) => (
                <SelectOption value={year.toString()} key={year.toString()}>
                  {year.toString()}
                </SelectOption>
              ))}
            </Select>
          </Box>
        </Flex>
      </InputWrapper>
      <InputWrapper>
        <Label>Email</Label>
        <Input
          type="text"
          value={formState.email}
          name="email"
          placeholder="john@email.com"
          onChange={handleInputChange}
          required
        />
      </InputWrapper>
      <InputWrapper>
        <Label>Phone Number</Label>
        <Input
          type="text"
          value={formState.phoneNumber}
          name="phoneNumber"
          placeholder="111 - 111 - 111"
          onChange={handleInputChange}
          required
        />
      </InputWrapper>
      <InputWrapper>
        <Label>Country</Label>
        <Select name="country" onChange={handleInputChange}>
          {countries.map((country) => (
            <>
              {country.name === formState.country ? (
                <SelectOption value={country.name} key={country.name} selected>
                  {country.name}
                </SelectOption>
              ) : (
                <SelectOption value={country.name} key={country.name}>
                  {country.name}
                </SelectOption>
              )}
            </>
          ))}
        </Select>
      </InputWrapper>
      <ButtonGroup>
        <Flex flexWrap="wrap">
          <Box width={[1, 1 / 2, 1 / 2]}>
            <ButtonWrapper>
              {pageType === 'editProfile' && (
                <MainButton type="button" title="Cancel" color="grey" borderColor="#111111" onClick={handleResetForm} />
              )}
              {pageType === 'subscriptionPlan' && (
                <MainButton type="button" title="Back" color="grey" borderColor="#111111" onClick={onBackClick} />
              )}
            </ButtonWrapper>
          </Box>
          <Box width={[1, 1 / 2, 1 / 2]}>
            <ButtonWrapper>
              {pageType === 'editProfile' && (
                <MainButton type="submit" title="Save Changes" color="red" borderColor="#111111" />
              )}
              {pageType === 'subscriptionPlan' && (
                <MainButton type="submit" title="Next" color="red" borderColor="#111111" onClick={onNextClick} />
              )}
            </ButtonWrapper>
          </Box>
        </Flex>
      </ButtonGroup>
    </Form>
  );
}

EditProfileForm.propTypes = {
  user: PropTypes.object,
  pageType: PropTypes.string,
  onNextClick: PropTypes.func,
  onBackClick: PropTypes.func,
};

EditProfileForm.defaultProps = {
  user: {},
  pageType: '',
  onNextClick: () => {},
  onBackClick: () => {},
};
