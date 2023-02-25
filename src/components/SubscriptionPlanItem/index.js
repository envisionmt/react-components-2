import React from 'react';
import styled from '@emotion/styled';
import { Flex, Box } from 'reflexbox';
import PropTypes from 'prop-types';

const RootWrapper = styled.div`
  background: #222222;
  border-radius: 12px;
  margin-bottom: 24px;
  border: 2px solid ${({ isSelected }) => (isSelected ? '#910048' : '#111111')};
  cursor: pointer;
`;

const TitleWrapper = styled.div`
  background: #333333;
  border-top-left-radius: 12px;
  border-bottom-left-radius: 12px;
  padding: 48px 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

// const SelectedText = styled.div`
//   width: 100px;
//   margin: 0 auto;
//   text-align: center;
//   background: #910048;
//   border-radius: 12px;
//   font-weight: 600;
//   font-size: 11px;
//   margin-bottom: 6px;
//   padding: 3px 3px 5px;
// `;

const Title = styled.div`
  color: #ffffff;
  font-size: 16px;
  font-weight: bold;
  text-align: center;
  text-transform: uppercase;
`;

const DescriptionWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0px 48px 0 24px;
`;

const Description = styled.div`
  font-weight: 600;
  font-size: 12px;
`;

const Membership = styled.div`
  font-weight: 600;
  font-size: 12px;
  text-transform: uppercase;
`;

export default function SubscriptionPlan(props) {
  const { title, description, membership, isSelected, onClickPlan } = props;

  return (
    <RootWrapper isSelected={isSelected} onClick={onClickPlan}>
      <Flex alignItems="center">
        <Box width={[1 / 5]}>
          <TitleWrapper>
            {/* <SelectedText>Current Plan</SelectedText> */}
            <Title>{title}</Title>
          </TitleWrapper>
        </Box>
        <Box width={[4 / 5]}>
          <DescriptionWrapper>
            <Description>{description}</Description>
            <Membership>{`$ ${membership} / year`}</Membership>
          </DescriptionWrapper>
        </Box>
      </Flex>
    </RootWrapper>
  );
}

SubscriptionPlan.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  membership: PropTypes.string,
  isSelected: PropTypes.bool,
  onClickPlan: PropTypes.func,
};

SubscriptionPlan.defaultProps = {
  title: '',
  description: '',
  membership: '',
  isSelected: false,
  onClickPlan: () => {},
};
