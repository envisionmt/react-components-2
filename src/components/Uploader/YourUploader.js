import React, { useCallback, useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import { useNotifications } from 'reapop';

import uploadlogo from '../../assets/images/icons/icon-upload.svg';

const YourUploaderWrapper = styled.div`
  background: ${({ theme, dragOver }) => (dragOver ? theme.colors.secondary : theme.colors.secondaryDarker)};
  padding: 24px;
  border-radius: 12px;
  margin-bottom: 2em;
  margin-top: 2em;
  overflow: hidden;
  width: 100%;
`;

const Wrapper = styled.div`
  text-align: center;
  border: 1px dashed ${({ theme }) => theme.colors.secondaryLighter};
  background: ${({ theme, dragOver }) => (dragOver ? theme.colors.secondary : theme.colors.secondaryDarker)};
  min-height: 200px;
  width: 100%;
  cursor: pointer;
  border-radius: 12px;
`;

const Logo = styled.img`
  display: inline-block;
  height: 3em;
  margin-bottom: 1em;
  margin-top: 2.5em;
  pointer-events: none;
`;

const UploadInstructions = styled.span`
  display: block;
  pointer-events: none;
`;

const YourUploadFilesList = styled.div``;

const VideoPlayer = styled.video`
  max-width: 100%;
`;
const InputFile = styled.input`
  display: none;
`;

const YourUploader = ({ allowedTypes, maxFileSizeMB, onUpload }) => {
  const { notify } = useNotifications();
  const [dragOver, setDragOver] = useState(false);
  const [selectedFile, setSelectedFile] = useState();
  const videoElement = useRef(null);
  const hiddenFileInput = React.useRef(null);
  const validateFile = (file) => {
    const fileSize = file.size / 2000000;
    const validType = allowedTypes.includes(file.type);
    const validSize = fileSize <= maxFileSizeMB;

    if (!validType) {
      notify({
        status: 'error',
        title: 'Uh oh!',
        message: `That filetype is not allowed. The allowed types are ${allowedTypes.join(', ')}`,
      });
      return false;
    }

    if (!validSize) {
      notify({
        status: 'error',
        title: 'Uh oh!',
        message: `That file is too big. The max size is ${maxFileSizeMB}MB. Your file is ${parseInt(fileSize, 10)}MB`,
      });
      return false;
    }
    return true;
  };

  const uploadFile = () => {
    // TODO: Write default upload functionality.
  };

  const handleClick = useCallback(() => {
    if (!selectedFile) {
      hiddenFileInput.current.click();
    }
  });

  const handleDrop = useCallback((e) => {
    e.preventDefault();
    setDragOver(false);

    const files = e.target.files || e.dataTransfer.files;
    const file = files[0];
    const fileValid = validateFile(file);

    if (fileValid) {
      setSelectedFile(file);
      if (onUpload) {
        onUpload(file);
        return;
      }
      uploadFile(file);
    }
  });

  const handleDragOver = useCallback((e) => {
    e.preventDefault();
  });

  const handleDragEnter = useCallback((e) => {
    e.preventDefault();
    setDragOver(true);
  });

  const handleDragLeave = useCallback(() => {
    setDragOver(false);
  });

  useEffect(() => {
    if (selectedFile) {
      const URL = window.URL || window.webkitURL;
      const fileURL = URL.createObjectURL(selectedFile);
      videoElement.current.src = fileURL;
    }
  }, [selectedFile]);

  return (
    <YourUploaderWrapper>
      <Wrapper
        onClick={handleClick}
        onDrop={handleDrop}
        onDragOver={handleDragOver}
        onDragEnter={handleDragEnter}
        onDragLeave={handleDragLeave}
        dragOver={dragOver}
      >
        {selectedFile ? (
          <YourUploadFilesList>
            <VideoPlayer ref={videoElement} loop muted autoPlay width="20%" />
          </YourUploadFilesList>
        ) : (
          <>
            <Logo src={uploadlogo} alt="envision" />
            <UploadInstructions>Drop your artwork here to start uploading.</UploadInstructions>
            <UploadInstructions>{`.mp4, .jpg, .png, .bmp, .gif | ${maxFileSizeMB / 1000} GB Max`}</UploadInstructions>
            <InputFile
              type="file"
              ref={hiddenFileInput}
              onChange={(e) => handleDrop(e)}
              accept=".mp4,.jpg,.gif,.bmp,.png"
            />
          </>
        )}
      </Wrapper>
    </YourUploaderWrapper>
  );
};

YourUploader.propTypes = {
  allowedTypes: PropTypes.arrayOf(PropTypes.string),
  maxFileSizeMB: PropTypes.number,
  onUpload: PropTypes.func,
};

YourUploader.defaultProps = {
  allowedTypes: ['*'],
  maxFileSizeMB: 2000,
  onUpload: null,
};

export default YourUploader;
