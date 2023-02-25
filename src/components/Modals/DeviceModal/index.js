import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Flex, Box } from 'reflexbox';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';

// Components
import MainButton from '../../Button/MainButton';
import { Select, TextInput, ToggleSwitch } from '../../FormNext';
import { Loader } from '../../Loader';

// Hooks
import { useSingleDevice } from '../../../hooks/data';
import { useAddDevice, useRemoveDevice, useUpdateDevice } from '../../../hooks/mutations';

// Utils
import { msToReadable, readableToMs } from '../../../util/dateHelpers';

// Assets
import IconClose from '../../../assets/images/icons/icon-close.svg';

// Styled
import { RootWrapper, ModalHeader, Title, CloseModalIcon, ModalContent, FormWrapper } from './styled';

const validationSchema = Yup.object().shape({
  name: Yup.string().required().label('Device Name'),
  uid: Yup.string().required().label('Device ID'),
});

export function DeviceModal({ closeModal, id }) {
  const device = useSingleDevice(id);
  const addDeviceMutation = useAddDevice();
  const updateDeviceMutation = useUpdateDevice();
  const removeDeviceMutation = useRemoveDevice();
  const [initialValues, setInitialValues] = useState({
    name: '',
    uid: '',
    playAudio: false,
    qr: false,
    orientation: 'horizontal',
    rotation: true,
    interval: 30,
    units: 'minutes',
  });

  useEffect(() => {
    if (device.isFetched) {
      setInitialValues({
        name: device.data?.name,
        uid: device.data?.uid,
        playAudio: !device.data?.mute,
        qr: device.data?.qr,
        orientation: device.data?.orientation,
        rotation: device.data?.interval > 0,
        interval: msToReadable(device.data?.interval).value,
        units: msToReadable(device.data?.interval).type,
      });
    }
  }, [device.data]);

  const handleCloseModal = () => {
    closeModal();
  };

  const handleSubmit = async (values, { setSubmitting }) => {
    const params = {
      name: values.name,
      uid: values.uid,
      mute: !values.playAudio,
      qr: values.qr,
      orientation: values.orientation,
      interval: values.rotation ? readableToMs(values.interval, values.units) : 0,
    };

    if (device.data?.id) {
      await updateDeviceMutation.mutateAsync({ id: device.data?.id, params, setSubmitting });
    } else {
      await addDeviceMutation.mutateAsync({ params, setSubmitting });
    }
    closeModal();
  };

  const handleDeleteDevice = async () => {
    await removeDeviceMutation.mutateAsync({ id: device.data?.id });
    closeModal();
  };

  return (
    <RootWrapper>
      {id && device.isLoading && <Loader />}
      {(!id || (!device.isLoading && initialValues.name)) && (
        <>
          <ModalHeader>
            <Title>{device.isFetched ? 'Update Display' : 'Add Display'}</Title>
            <CloseModalIcon src={IconClose} onClick={handleCloseModal} />
          </ModalHeader>
          <ModalContent>
            <FormWrapper>
              <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={handleSubmit}>
                {({ isSubmitting, values }) => (
                  <Form>
                    <Field name="name" label="Display Name" component={TextInput} autoComplete="off" />
                    <Field
                      name="uid"
                      label="Device ID"
                      component={TextInput}
                      disabled={device.isFetched}
                      autoComplete="off"
                      maxWidth="100vw"
                    />
                    <Flex maxWidth="100vw">
                      <Box width={2 / 9} pr={10}>
                        <Field name="playAudio" label="Play Audio" block component={ToggleSwitch} />
                      </Box>
                      <Box width={2 / 9} pr={10}>
                        <Field name="qr" label="Show QR" block component={ToggleSwitch} />
                      </Box>
                      <Box width={5 / 9} pl={10}>
                        <Field name="orientation" label="Display Orientation" component={Select}>
                          <option value="horizontal">Landscape (horizontal)</option>
                          <option value="vertical">Portrait (vertical)</option>
                        </Field>
                      </Box>
                    </Flex>
                    <Flex>
                      <Box width={2 / 9} pr={10}>
                        <Field name="rotation" label="Switch Art" block component={ToggleSwitch} />
                      </Box>
                      <Box width={3 / 9} pr={10} pl={10}>
                        <Field
                          name="interval"
                          label="Every"
                          placeholder="30"
                          type="number"
                          min={1}
                          component={TextInput}
                          disabled={!values.rotation}
                        />
                      </Box>
                      <Box width={4 / 9} pl={10} pt={33}>
                        <Field name="units" component={Select} disabled={!values.rotation}>
                          <option value="seconds">Seconds</option>
                          <option value="minutes">Minutes</option>
                          <option value="hours">Hours</option>
                        </Field>
                      </Box>
                    </Flex>
                    <MainButton
                      type="submit"
                      color="red"
                      borderColor="#222222"
                      title={device.isFetched ? 'Update Display' : 'Add Display'}
                      disabled={isSubmitting}
                    />
                  </Form>
                )}
              </Formik>
            </FormWrapper>

            {device.isFetched && (
              <MainButton type="button" borderColor="#222222" title="Remove Device" onClick={handleDeleteDevice} />
            )}
          </ModalContent>
        </>
      )}
    </RootWrapper>
  );
}

DeviceModal.propTypes = {
  id: PropTypes.string,
  closeModal: PropTypes.func.isRequired,
};

DeviceModal.defaultProps = {
  id: null,
};
