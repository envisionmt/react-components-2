import styled from '@emotion/styled';
import { lighten } from 'polished';

export const RootWrapper = styled.div`
  width: 100%;
  height: 168px;
  background: ${({ cardType }) => (cardType === 'add' ? '#910048' : '#222')};
  box-shadow: 2px 2px 6px rgba(0, 0, 0, 0.45);
  border-radius: 12px;
  cursor: pointer;
  text-align: center;
  transition: background 0.2s ease-in-out;

  &:hover {
    background: ${({ cardType }) => (cardType === 'add' ? lighten(0.05, '#910048') : '#333')};
  }
`;

export const DisplayIcon = styled.img`
  width: 42px;
  height: 35px;
  margin: 31px 0 30px;
`;

export const PlusIcon = styled.img`
  width: 40px;
  height: 40px;
  margin: 40px 0 28px;
`;

export const DeviceCardName = styled.div`
  font-weight: bold;
  font-size: 16px;
  margin-bottom: 8px;
`;

export const DeviceId = styled.div`
  font-weight: 600;
  font-size: 12px;
  color: #999999;
  text-transform: uppercase;
`;
