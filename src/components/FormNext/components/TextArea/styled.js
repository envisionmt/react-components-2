import styled from '@emotion/styled';

export const InputWrapper = styled.div`
  width: 100%;
  position: relative;
  margin-bottom: 10px;
`;

export const StyledTextarea = styled.textarea`
  width: 100%;
  background: #333;
  border: 2px solid #333;
  box-shadow: 2px 2px 6px rgba(0, 0, 0, 0.45);
  border-radius: 12px;
  color: #fff;
  padding: 12px;
  font-size: 16px;
  margin-bottom: 5px;
  resize: ${({ resize }) => resize};

  &:focus {
    outline: none;
  }
`;

export const Label = styled.label`
  font-weight: 600;
  font-size: 12px;
  text-transform: uppercase;
  color: #ffffff;
  margin-bottom: 12px;
  display: inline-block;
`;

export const LengthCounter = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  background: ${({ exceed }) => (exceed ? '#ffa800' : '#333')};
  box-shadow: 2px 2px 6px rgba(0, 0, 0, 0.45);
  border-radius: 12px;
  font-weight: 600;
  font-size: 11px;
  color: #ffffff;
  padding: 1px 9px 2px;
`;

export const HelperText = styled.span`
  display: block;
`;

export const ErrorText = styled.span`
  display: block;
  color: #ffa800;
  text-transform: uppercase;
  font-size: 12px;
  font-weight: bold;
  padding-left: 10px;
  padding-top: 5px;
`;
