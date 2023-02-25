import styled from '@emotion/styled';
import { lighten } from 'polished';

export const InputWrapper = styled.div`
  width: 100%;
  position: relative;
  margin-bottom: 15px;
`;

export const Input = styled.input`
  background: ${({ hasError }) => (hasError ? lighten(0.45, '#ffa800') : 'rgb(68, 68, 68)')};
  width: 100%;
  height: ${({ height }) => height};
  background: #444444;
  border: 2px solid #444444;
  box-sizing: border-box;
  box-shadow: 2px 2px 6px rgba(0, 0, 0, 0.45);
  border-radius: 12px;
  padding: 12px;
  color: #fff;
  font-size: 16px;
  margin: 12px 0 0 0;
  &:focus {
    outline: none !important;
    border: 2px solid #910048;
  }
`;

export const Label = styled.label`
  font-weight: 600;
  font-size: 12px;
  text-align: left;
  text-transform: uppercase;
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
  font-size: 12px;
  margin-top: 5px;
  color: rgba(0, 0, 0, 0.5);
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
