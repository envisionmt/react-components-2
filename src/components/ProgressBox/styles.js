import styled from '@emotion/styled';

import IconButton from '../IconButton';

export const Wrapper = styled.div`
  width: 100%;
  height: ${({ height }) => height};
  background: ${({ theme }) => theme.colors.secondary};
  border: 1px solid ${({ theme }) => theme.colors.secondary};
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ProgressInner = styled.div`
  width: ${({ progress }) => progress}%;
  height: ${({ height }) => height};
  background: ${({ theme }) => theme.colors.primary};
  transition: width 0.5s ease;
  position: absolute;
  top: 0px;
  left: 0px;
`;

export const Metadata = styled.div`
  display: flex;
  flex-direction: column;
  z-index: 10;
  text-align: center;
`;

export const Percentage = styled.span`
  font-size: 3em;
`;

export const Uploading = styled.span`
  font-size: 1.2em;
`;

export const Name = styled.span`
  font-size: 1.2em;
  font-weight: bold;
  margin-bottom: 1.5em;
`;

export const SizeProgress = styled.span`
  font-size: 0.8em;
`;

export const Remaining = styled.span`
  font-size: 0.8em;
`;

export const CancelButton = styled(IconButton)`
  position: absolute;
  top: 0px;
  right: 0px;
  padding: 10px;
`;
