import styled from '@emotion/styled';

export const Wrapper = styled.div`
  flex: 1;
  position: relative;
`;

export const StyledButton = styled.button`
  display: flex;
  align-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  border: 0;
  cursor: pointer;
  transition: all 0.1s ease-in;
  background: #333333;
  color: rgba(255, 255, 255, 0.5);

  &:hover {
    color: white;
  }
`;
