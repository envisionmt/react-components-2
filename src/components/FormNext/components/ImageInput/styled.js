import styled from '@emotion/styled';

export const ImageInputWrapper = styled.div`
  position: relative;
`;

export const ClickWrapper = styled.div`
  cursor: pointer;
  position: relative;
  margin-bottom: 10px;
`;

export const FileInput = styled.input`
  display: none;
`;

export const PreviewImageWrapper = styled.div`
  display: flex;
  width: 300px;
  height: 300px;
  flex-direction: column;
  justify-content: center;
  background: #333;
  border: 2px solid #333;
  box-shadow: 2px 2px 6px rgba(0, 0, 0, 0.45);
  border-radius: 12px;
  overflow: hidden;
  position: relative;
`;

export const PreviewImage = styled.img`
  width: 300px;
  height: 300px;
  object-fit: cover;
`;

export const EditOverlay = styled.div`
  position: absolute;
  top: 0px;
  left: 0px;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.9);

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  opacity: 0;
  transition: opacity 0.5s ease;
  &:hover {
    opacity: 1;
  }
`;

export const OverlayIcon = styled.img`
  width: 40px;
  height: 40px;
  margin-bottom: 20px;
`;

export const OverlayTitle = styled.span`
  color: rgba(255, 255, 255, 0.5);
`;

export const ProgressBarWrapper = styled.div`
  bottom: 5px;
  left: 0px;
  width: 100%;
  height: 3px;
`;

export const ProgressBarFill = styled.div`
  width: ${({ progress }) => (progress === -1 ? '0%' : `${progress}%`)};
  height: 3px;
  background: #910048;
`;
