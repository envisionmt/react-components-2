import styled from '@emotion/styled';

export const Wrapper = styled.div`
  width: 100%;
  height: 48px;
  background: ${({ theme }) => theme.colors.secondary};
  border: 1px solid ${({ theme }) => theme.colors.secondary};
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 2px 2px 6px rgba(0, 0, 0, 0.45);
  border-radius: 12px;
`;

export const ProgressInner = styled.div`
  width: ${({ progress }) => progress}%;
  height: 100%;
  background: ${({ progress }) => (progress === 100 ? '#009D3F' : '#910048')};
  transition: width 0.5s ease;
  position: absolute;
  top: 0px;
  left: 0px;
  border-radius: 12px;
`;

export const Metadata = styled.div`
  display: flex;
  flex-direction: column;
  z-index: 10;
  text-align: center;
`;

export const Percentage = styled.span`
  font-size: 16px;
  font-weight: 700;
`;

export const SizeProgress = styled.span`
  font-size: 11px;
  font-weight: 600;
  color: #999999;
`;
