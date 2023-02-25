import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import { space } from 'styled-system';

import colors from '../../util/colors';

const StyledPanel = styled.div`
  ${space}
  background: ${({ theme }) => theme.colors.baseLighter};
  border: 1px solid ${colors.baseLighter};
  border-radius: 5px;
  box-shadow: 0 2px 4px 0 ${colors.black};
`;

const Panel = ({ children, ...props }) => {
  return <StyledPanel {...props}>{children}</StyledPanel>;
};

Panel.propTypes = {
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.arrayOf(PropTypes.node)]),
};

Panel.defaultProps = {
  children: null,
};

export default Panel;
