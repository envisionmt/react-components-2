import React from 'react';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';

const TabItemWrapper = styled.div`
  background: #910048;
  cursor: pointer;
  display: flex;
  align-items: center;
  padding: 36px 24px 24px;
`;

const InActiveTabItemWrapper = styled.div`
  cursor: pointer;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  ${
    '' /* opacity: 0.3;
  filter: grayscale(100%); */
  }
  padding: 36px 24px 24px;
`;

const TabId = styled.div`
  font-size: 36px;
  margin-right: 24px;
  color: #ffffff;
`;

const TabTitle = styled.div`
  margin: 10px 0;
  font-weight: 600;
  font-size: 12px;
  text-transform: uppercase;
  color: #ffffff;
`;

const TabItemComponent = ({ id, title = '', onTabItemClicked = () => {}, isActive = false }) => {
  return (
    <>
      {isActive ? (
        <TabItemWrapper onClick={onTabItemClicked}>
          <TabId>{id}</TabId>
          <TabTitle>{title}</TabTitle>
        </TabItemWrapper>
      ) : (
        <InActiveTabItemWrapper onClick={onTabItemClicked}>
          <TabId>{id}</TabId>
        </InActiveTabItemWrapper>
      )}
    </>
  );
};

TabItemComponent.propTypes = {
  id: PropTypes.number,
  title: PropTypes.string,
  isActive: PropTypes.bool,
  onTabItemClicked: PropTypes.func,
};

TabItemComponent.defaultProps = {
  id: 0,
  title: '',
  isActive: false,
  onTabItemClicked: null,
};

export default TabItemComponent;
