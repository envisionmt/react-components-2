import React from 'react';
import PropTypes from 'prop-types';
import { Flex, Box } from 'reflexbox';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';

// Components
import { Button } from '../../Button';
import { TextInput, ToggleSwitch } from '../../FormNext';
import YourUploader from '../../Uploader/YourUploader';
import ProgressBar from '../../ProgressBar';

// Hooks
import { useArtworkUpload } from '../../../hooks/useArtworkUpload';
import { useUser } from '../../../hooks/data';
import { useAddPrivateArtwork } from '../../../hooks/mutations';

// Assets
import IconClose from '../../../assets/images/icons/icon-close.svg';

// Styled
import { Wrapper, ModalHeader, Title, CloseModalIcon, ModalContent } from './styled';

const validationSchema = Yup.object().shape({
  name: Yup.string().required(),
});

const AddNewUploadModal = ({ closeModal }) => {
  const user = useUser();
  const upload = useArtworkUpload();
  const addPrivateArtworkMutation = useAddPrivateArtwork();

  const handleCloseModal = () => {
    closeModal();
  };

  const handleUpload = (file) => {
    upload.selectFile(file);
  };

  const handleSubmit = async (values, { setSubmitting }) => {
    if (upload.isStarted && !upload.isPending) {
      setSubmitting(false);
      return;
    }

    const result = await upload.finalizeFile(values.rotation);

    await addPrivateArtworkMutation.mutateAsync({
      params: {
        name: values.name,
        qrUrl: values.qrUrl,
        sourceFileId: result.sourceFileId,
      },
    });

    handleCloseModal();
  };

  return (
    <Wrapper>
      <ModalHeader>
        <Title>Upload video</Title>
        <CloseModalIcon src={IconClose} onClick={handleCloseModal} />
      </ModalHeader>
      <ModalContent>
        {!upload.isStarted && (
          <YourUploader
            allowedTypes={['video/mp4', 'image/jpeg', 'image/gif', 'image/png', 'image/bmp']}
            maxFileSizeMB={2000}
            onUpload={handleUpload}
          />
        )}
        {upload.isStarted && <ProgressBar current={upload.progress?.loaded} total={upload.progress?.total} />}
        <Formik
          initialValues={{ name: '', qrUrl: '', rotation: false }}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {({ isSubmitting }) => (
            <Form>
              <Field name="name" label="Name" component={TextInput} autoComplete="off" />
              <Field name="qrUrl" label="QR Code URL (optional)" component={TextInput} autoComplete="off" />
              {user.isFetched && user.data?.user.rotationEnabled && (
                <Flex>
                  <Box width={['80px']}>
                    <Field name="rotation" label="Rotate Artwork" block component={ToggleSwitch} />
                  </Box>
                </Flex>
              )}
              <Flex>
                <Box width={[1 / 2]} mr="10px">
                  <Button onClick={handleCloseModal} secondary block>
                    Cancel
                  </Button>
                </Box>
                <Box width={[1 / 2]} ml="10px">
                  <Button
                    type="submit"
                    primary
                    block
                    pending={isSubmitting || upload.isUploading}
                    disabled={isSubmitting || !upload.isPending}
                  >
                    Complete Upload
                  </Button>
                </Box>
              </Flex>
            </Form>
          )}
        </Formik>
      </ModalContent>
    </Wrapper>
  );
};

AddNewUploadModal.propTypes = {
  closeModal: PropTypes.func.isRequired,
};

export default AddNewUploadModal;
