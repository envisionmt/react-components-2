import styled from '@emotion/styled';
import { lighten } from 'polished';

export const InputWrapper = styled.div`
  width: 100%;
  position: relative;
  margin-bottom: 15px;
`;

export const Input = styled.select`
  display: block;
  width: 100%;
  padding: 12px 20px;
  border-radius: 12px;
  color: white;
  cursor: pointer;
  border: 1px solid ${({ hasError }) => (hasError ? '#ffa800' : 'rgba(0, 0, 0, 0.2)')};
  background: ${({ hasError }) => (hasError ? lighten(0.45, '#ffa800') : '#333')};
  box-shadow: 2px 2px 6px rgba(0, 0, 0, 0.45);

  &:focus {
    outline: none;
    border: 1px solid #4373f6;
  }

  &:disabled {
    cursor: default;
    opacity: 0.5;
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
  padding-left: 22px;
  padding-top: 5px;
`;
