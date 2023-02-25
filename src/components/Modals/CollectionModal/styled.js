import styled from '@emotion/styled';

export const RootWrapper = styled.div`
  padding: 24px;
`;

export const ModalHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 24px;
`;

export const CollectionTitle = styled.span`
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
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  margin-bottom: 24px;
`;

export const CollectionImageWrapper = styled.div`
  position: relative;
  width: 300px;
  height: 300px;
  text-align: center;
`;

export const CollectionIconWrapper = styled.div`
  position: absolute;
  left: 30%;
  top: 30%;
  cursor: pointer;
`;

export const ImageIconLabel = styled.label``;

export const EditIcon = styled.img`
  width: 116px;
  height: 118px;
  cursor: pointer;
  opacity: ${({ opacity }) => opacity};
`;

export const InputFile = styled.input`
  display: none;
`;

export const CollectionImage = styled.img`
  width: 300px;
  height: 300px;
  border-radius: 12px;
`;

export const CollectionInfoWrapper = styled.div`
  width: 100%;
  padding-left: 24px;
`;

export const ModalContainer = styled.div``;
export const ModalTitle = styled.h3`
  text-align: center;
  margin: 0 0 20px; 0;
`;
export const ButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
`;
