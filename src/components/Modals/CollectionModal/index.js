import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Formik, Form, Field } from 'formik';
import * as yup from 'yup';

// Components
import { TextInput, TextArea, ImageInput } from '../../FormNext';
import MainButton from '../../Button/MainButton';

// Hooks
import { useCreateCollection, useUpdateCollection } from '../../../hooks/mutations';

// Assets
import IconClose from '../../../assets/images/icons/icon-close.svg';

// Styled
import {
  RootWrapper,
  ModalHeader,
  CollectionTitle,
  CloseModalIcon,
  ModalContent,
  CollectionImageWrapper,
  CollectionInfoWrapper,
} from './styled';

const validationSchema = yup.object().shape({
  name: yup.string().max(50).required(),
  description: yup.string().max(300),
});

export function CollectionModal({ closeModal, id, name, description, image }) {
  const [initialValues] = useState({
    name: name || '',
    description: description || '',
    image: image || '',
  });

  const createCollectionMutation = useCreateCollection();
  const updateCollectionMutation = useUpdateCollection();

  const handleCloseModal = () => {
    closeModal();
  };

  const handleSubmit = async (values, { setSubmitting }) => {
    const params = {
      name: values.name,
      description: values.description,
      image: values.image,
    };

    if (params.image === '' || params.image === image) delete params.image;

    if (id) {
      await updateCollectionMutation.mutateAsync({
        params,
        id,
        setSubmitting,
      });
    } else {
      await createCollectionMutation.mutateAsync({ params, setSubmitting });
    }

    closeModal();
  };

  return (
    <RootWrapper>
      <>
        <ModalHeader>
          <CollectionTitle>{id ? 'Edit Collection' : 'Add Collection'}</CollectionTitle>
          <CloseModalIcon src={IconClose} onClick={handleCloseModal} />
        </ModalHeader>

        <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={handleSubmit}>
          {({ isSubmitting }) => (
            <Form>
              <ModalContent>
                <CollectionImageWrapper>
                  <Field name="image" defaultImage={image ? initialValues.image : ''} component={ImageInput} />
                </CollectionImageWrapper>
                <CollectionInfoWrapper>
                  <Field
                    name="name"
                    label="Name"
                    placeholder="Nature, Abstract, etc."
                    maxLength={50}
                    component={TextInput}
                  />
                  <Field
                    name="description"
                    label="Description"
                    placeholder="Give your collection a captivating description"
                    maxLength={300}
                    rows={6}
                    component={TextArea}
                    resize="none"
                  />
                  <MainButton
                    type="submit"
                    color="red"
                    borderColor="#222222"
                    title={id ? 'Update Collection' : 'Create Collection'}
                    disabled={isSubmitting}
                  />
                </CollectionInfoWrapper>
              </ModalContent>
            </Form>
          )}
        </Formik>
      </>
    </RootWrapper>
  );
}

CollectionModal.propTypes = {
  closeModal: PropTypes.func.isRequired,
  id: PropTypes.string,
  name: PropTypes.string,
  description: PropTypes.string,
  image: PropTypes.string,
};

CollectionModal.defaultProps = {
  id: null,
  name: null,
  description: null,
  image: null,
};
