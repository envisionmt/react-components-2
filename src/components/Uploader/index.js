import React, { useCallback, useState } from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import { useNotifications } from 'reapop';

import logo from '../../assets/images/bd-logo-dove.svg';

const Wrapper = styled.div`
  text-align: center;
  border: 4px dashed ${({ theme }) => theme.colors.light};
  background: ${({ theme, dragOver }) => (dragOver ? theme.colors.secondary : theme.colors.secondaryDarker)};
  height: 200px;
  width: 100%;
  cursor: pointer;
  margin-bottom: 2em;
  overflow: hidden;
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

const Uploader = ({ allowedTypes, maxFileSizeMB, onUpload }) => {
  const { notify } = useNotifications();
  const [dragOver, setDragOver] = useState(false);

  const validateFile = (file) => {
    const fileSize = file.size / 1000000;
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

  const handleClick = useCallback(() => {});

  const handleDrop = useCallback((e) => {
    e.preventDefault();
    setDragOver(false);

    const files = e.target.files || e.dataTransfer.files;
    const file = files[0];
    const fileValid = validateFile(file);

    if (fileValid) {
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

  return (
    <Wrapper
      onClick={handleClick}
      onDrop={handleDrop}
      onDragOver={handleDragOver}
      onDragEnter={handleDragEnter}
      onDragLeave={handleDragLeave}
      dragOver={dragOver}
    >
      <Logo src={logo} alt="envision" />
      <UploadInstructions>Drop your artwork here to start uploading.</UploadInstructions>
      <UploadInstructions>.mp4 or .mov | 10GB Max</UploadInstructions>
    </Wrapper>
  );
};

Uploader.propTypes = {
  allowedTypes: PropTypes.arrayOf(PropTypes.string),
  maxFileSizeMB: PropTypes.number,
  onUpload: PropTypes.func,
};

Uploader.defaultProps = {
  allowedTypes: ['*'],
  maxFileSizeMB: 1000,
  onUpload: null,
};

export default Uploader;
