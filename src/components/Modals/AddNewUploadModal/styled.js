import styled from '@emotion/styled';

export const Wrapper = styled.div`
  padding: 24px;
  width: 864px;
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

export const ModalFooter = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const YourUploadInputWrapper = styled.div`
  margin-bottom: 24px;
`;

export const LabelWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const YourUploadLabel = styled.div`
  font-weight: 600;
  font-size: 12px;
  text-transform: uppercase;
  color: #ffffff;
  margin-bottom: 12px;
`;

export const TextInput = styled.input`
  width: 100%;
  background: #333333;
  border: 2px solid #333333;
  box-shadow: 2px 2px 6px rgba(0, 0, 0, 0.45);
  border-radius: 12px;
  color: #ffffff;
  padding: 11px;
  font-size: 16px;

  &:focus {
    outline: none !important;
    border: 2px solid #910048;
  }
`;

export const Alert = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  background: ${({ bgColor }) => bgColor};
  box-shadow: 2px 2px 6px rgba(0, 0, 0, 0.45);
  border-radius: 12px;
  margin-bottom: 24px;
`;

export const WarningIcon = styled.img`
  width: 14px;
  height: 14px;
  margin-right: 5px;
`;

export const AlertText = styled.span`
  color: ${({ textColor }) => textColor};
  padding: 5px;
  font-weight: 600;
  font-size: 11px;
`;
