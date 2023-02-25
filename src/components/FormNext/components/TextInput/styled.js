import styled from '@emotion/styled';

export const InputWrapper = styled.div`
  width: 100%;
  position: relative;
  margin-bottom: 15px;
`;

export const Input = styled.input`
  width: 100%;
  background: ${({ theme }) => theme.colors.base3};
  border: 2px solid ${({ theme }) => theme.colors.base3};
  box-shadow: 2px 2px 6px rgba(0, 0, 0, 0.45);
  border-radius: 12px;
  color: ${({ theme }) => theme.colors.white};
  padding: 12px;
  font-size: 16px;
  margin-bottom: 5px;
  max-height: 46px;

  &:focus {
    outline: none;
  }

  &:disabled {
    opacity: 0.5;
  }

  &:-webkit-autofill {
    border: 2px solid ${({ theme }) => theme.colors.base3};
    -webkit-text-fill-color: ${({ theme }) => theme.colors.white};
    box-shadow: 0 0 0px 1000px ${({ theme }) => theme.colors.base3} inset;
    transition: background-color 5000s ease-in-out 0s;
  }
`;

export const Label = styled.label`
  font-weight: 600;
  font-size: 12px;
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.white};
  margin-bottom: 12px;
  display: inline-block;
`;

export const LengthCounter = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  background: ${({ exceed, theme }) => (exceed ? theme.colors.warning : theme.colors.base3)};
  box-shadow: 2px 2px 6px rgba(0, 0, 0, 0.45);
  border-radius: 12px;
  font-weight: 600;
  font-size: 11px;
  color: ${({ theme }) => theme.colors.white};
  padding: 1px 9px 2px;
`;

export const HelperText = styled.span`
  display: block;
`;

export const ErrorText = styled.span`
  display: block;
  color: ${({ theme }) => theme.colors.warning};
  text-transform: uppercase;
  font-size: 12px;
  font-weight: bold;
  padding-left: 10px;
  padding-top: 5px;
`;
