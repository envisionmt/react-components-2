import React from 'react';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';

const TabItemWrapper = styled.div`
  position: relative;
  border-bottom: 5px solid #910048;
  cursor: pointer;
  display: flex;
  margin: 8px;
  flex-direction: column;
  justify-content: center;
  color: rgba(255, 255, 255, 0.9);
`;

const InActiveTabItemWrapper = styled.div`
  cursor: pointer;
  text-align: center;
  margin: 8px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  opacity: 0.3;
  filter: grayscale(100%);
`;

const TabTitle = styled.div`
  margin: 10px 0;
  font-weight: 300;
  font-size: 20px;
  text-transform: uppercase;
  @media (max-width: 767px) {
    font-size: 16px;
  }
`;

const TabItemComponent = ({ title = '', onTabItemClicked = () => {}, isActive = false }) => {
  return (
    <>
      {isActive ? (
        <TabItemWrapper onClick={onTabItemClicked}>
          <TabTitle>
            {title}
            {/* <ActiveBottomLine></ActiveBottomLine> */}
          </TabTitle>
        </TabItemWrapper>
      ) : (
        <InActiveTabItemWrapper onClick={onTabItemClicked}>
          <TabTitle>{title}</TabTitle>
        </InActiveTabItemWrapper>
      )}
    </>
  );
};

TabItemComponent.propTypes = {
  title: PropTypes.string,
  isActive: PropTypes.bool,
  onTabItemClicked: PropTypes.func,
};

TabItemComponent.defaultProps = {
  title: '',
  isActive: false,
  onTabItemClicked: null,
};

export default TabItemComponent;
