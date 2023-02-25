import styled from '@emotion/styled';
import { keyframes } from '@emotion/core';

const modalAppear = keyframes`
  from { opacity: 0; }
  to { opacity: 1; }
`;

export const RootWrapper = styled.div`
  position: relative;
  padding: 24px;
  animation: ${modalAppear} 0.5s ease-in forwards;
  max-width: 100vw;
`;

export const ModalHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 24px;
`;

export const Title = styled.span`
  font-weight: bold;
  font-size: 20px;
  text-transform: capitalize;
  color: #ffffff;
`;

export const CloseModalIcon = styled.img`
  width: 24px;
  height: 24px;
  cursor: pointer;
`;

export const ModalContent = styled.div`
  margin-bottom: 24px;
`;

export const FormWrapper = styled.div`
  max-width: 100vw;
  margin-bottom: 20px;
`;
