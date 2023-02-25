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
  height: 80vh;
  overflow: hidden;
  overflow-y: scroll;
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

export const WalletConnectWrapper = styled.div`
  text-align: center;
`;

export const LoadingMore = styled.div`
  text-align: center;
  padding: 40px;
`;

export const List = styled.div``;

export const ListItem = styled.div`
  width: 100%;
  height: 50px;
  display: flex;
  align-items: center;

  &:hover {
    background: #910048;
  }

  img {
    height: 30px;
    width: 30px;
    margin-right: 10px;
  }
`;

export const ListWrapper = styled.div`
  border: 4px dashed ${({ isDraggingOver }) => (isDraggingOver ? '#6173cf' : 'black')};
  padding: 15px;
  margin-bottom: 24px;
  transition: background-color 0.2s ease;
  background: 'whitesmoke';
`;
