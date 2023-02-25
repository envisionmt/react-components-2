import React, { useRef, useState } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import { envisionClient } from '@envision/utils';

// Assets
import IconEdit from '../../../../assets/images/icons/icon-edit-collection.svg';

import {
  ImageInputWrapper,
  ClickWrapper,
  FileInput,
  PreviewImage,
  PreviewImageWrapper,
  EditOverlay,
  OverlayIcon,
  OverlayTitle,
  ProgressBarWrapper,
  ProgressBarFill,
} from './styled';

export function ImageInput({ field, form: { setFieldValue }, defaultImage }) {
  const [uploadState, setUploadState] = useState({ progress: -1 });
  const [previewImage, setPreviewImage] = useState(defaultImage);
  const fileInputRef = useRef(null);

  const handleFileChange = async (e) => {
    if (!e.target.files) return;

    const file = e.target.files[0];
    setUploadState((state) => ({ ...state, error: undefined, progress: 0, file }));

    const formData = new FormData();
    formData.append('file', file);

    const creds = envisionClient.getCredentials();

    const axiosConfig = {
      headers: { Authorization: `Bearer ${creds.accessToken}` },
      onUploadProgress: (p) => {
        setUploadState((state) => ({ ...state, progress: Math.round((p.loaded * 100) / p.total) }));
      },
    };

    try {
      const result = await axios.post('https://upload.envision.io/files', formData, axiosConfig);
      setUploadState((state) => ({ ...state, error: undefined, progress: -1 }));
      setPreviewImage(() => result.data.location);
      setFieldValue(field.name, result.data.id);
    } catch (evt) {
      setUploadState((state) => ({ ...state, errors: evt.message, progress: -1 }));
    }
  };

  return (
    <ImageInputWrapper>
      <ClickWrapper onClick={() => fileInputRef.current && fileInputRef.current.click()}>
        <PreviewImageWrapper>
          {previewImage && <PreviewImage src={previewImage} />}
          <EditOverlay>
            <OverlayIcon src={IconEdit} alt="Edit Collection Thumbnail" />
            <OverlayTitle>Edit Thumbnail</OverlayTitle>
          </EditOverlay>
        </PreviewImageWrapper>
        <FileInput
          id={`file-input-${field.name}`}
          type="file"
          onChange={handleFileChange}
          ref={fileInputRef}
          accept="image/*"
        />
      </ClickWrapper>
      <input type="hidden" id={field.name} name={field.name} value={field.value} />
      {uploadState.progress !== -1 && (
        <ProgressBarWrapper>
          <ProgressBarFill progress={uploadState.progress} />
        </ProgressBarWrapper>
      )}
    </ImageInputWrapper>
  );
}

ImageInput.propTypes = {
  field: PropTypes.shape({
    name: PropTypes.string,
    value: PropTypes.string,
    onBlur: PropTypes.func,
    onChange: PropTypes.func,
  }).isRequired,
  form: PropTypes.shape({
    touched: PropTypes.object,
    errors: PropTypes.object,
    setFieldValue: PropTypes.func,
  }).isRequired,
  defaultImage: PropTypes.string,
};

ImageInput.defaultProps = {
  defaultImage: '',
};
