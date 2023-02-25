import React from 'react';
import { useHistory } from 'react-router-dom';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';

import IconClose from '../../../assets/images/icons/icon-close.svg';

const RootWrapper = styled.div`
  width: 100%;
  height: 144px;
  background: #444444;
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.25);
  border-radius: 0px 0px 12px 0px;
  position: relative;
  display: flex;
  align-items: center;
`;

const HeaderTitle = styled.h1`
  font-weight: bold;
  font-size: 48px;
  color: #ffffff;
  margin-left: 48px;
`;

const CloseIcon = styled.img`
  position: absolute;
  width: 24px;
  height: 24px;
  right: 24px;
  top: 24px;
  cursor: pointer;
`;

export default function AccountContentHeader(props) {
  const history = useHistory();
  const { title } = props;

  const handleCloseAccountPage = () => {
    history.push(`/`);
    location.reload();
  };

  return (
    <RootWrapper>
      <HeaderTitle>{title}</HeaderTitle>
      <CloseIcon src={IconClose} onClick={handleCloseAccountPage} />
    </RootWrapper>
  );
}

AccountContentHeader.propTypes = {
  title: PropTypes.string,
};

AccountContentHeader.defaultProps = {
  title: '',
};
