import styled from '@emotion/styled';

export const InputWrapper = styled.div`
  width: ${({ block }) => (block ? '100%' : '100px')};
  position: relative;
  margin-bottom: 25px;
`;

export const ToggleTrack = styled.div`
  background: white;
  width: 100%;
  height: 36px;
  border: 0px;
  padding: 0px;
  background: #333;
  cursor: pointer;
  color: white;
  margin-right: 10px;
  border-radius: 12px;
  transition: width 0.3s ease-in;
  text-align: left;
  overflow: hidden;
  box-shadow: 2px 2px 6px rgba(0, 0, 0, 0.45);
`;

export const ToggleFill = styled.div`
  height: 100%;
  background: #910048;
  position: relative;
  border-radius: 12px;
  width: ${({ toggled }) => (toggled ? '100%' : '36px')};
  transition: width 0.2s ease-in-out;

  &::after {
    content: '';
    top: 0px;
    right: 0px;
    width: 36px;
    height: 36px;
    background: white;
    position: absolute;
    border-radius: 12px;
  }
`;

export const Input = styled.input`
  display: none;
`;

export const Label = styled.label`
  font-weight: 600;
  font-size: 12px;
  text-transform: uppercase;
  color: #ffffff;
  margin-bottom: 12px;
  display: inline-block;
`;
