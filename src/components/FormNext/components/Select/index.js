import React from 'react';
import PropTypes from 'prop-types';
import { getIn } from 'formik';

import { InputWrapper, Input, Label, LengthCounter, HelperText, ErrorText } from './styled';

export function Select({ field, form: { touched, errors }, label, helperText, maxLength, children, ...props }) {
  const hasError = getIn(touched, field.name) && Boolean(getIn(errors, field.name));
  const errorText = getIn(errors, field.name);

  return (
    <InputWrapper>
      {label && <Label htmlFor={field.name}>{label}</Label>}
      {maxLength > 0 && field.value.length >= maxLength * 0.7 && (
        <LengthCounter exceed={field.value.length > maxLength}>{`${field.value.length} / ${maxLength}`}</LengthCounter>
      )}
      <Input
        type="text"
        hasError={hasError}
        id={field.name}
        name={field.name}
        value={field.value}
        onChange={field.onChange}
        onBlur={field.onBlur}
        {...props}
      >
        {children}
      </Input>
      {helperText && <HelperText>{helperText}</HelperText>}
      {hasError && <ErrorText>{errorText}</ErrorText>}
    </InputWrapper>
  );
}

Select.propTypes = {
  field: PropTypes.shape({
    name: PropTypes.string,
    value: PropTypes.string,
    onBlur: PropTypes.func,
    onChange: PropTypes.func,
  }).isRequired,
  form: PropTypes.shape({
    touched: PropTypes.object,
    errors: PropTypes.object,
  }).isRequired,
  label: PropTypes.string,
  helperText: PropTypes.string,
  maxLength: PropTypes.number,
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]),
};

Select.defaultProps = {
  label: '',
  helperText: '',
  maxLength: 0,
  children: null,
};
