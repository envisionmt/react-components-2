import React from 'react';
import PropTypes from 'prop-types';
import { getIn } from 'formik';

// Styled
import { InputWrapper, StyledTextarea, Label, LengthCounter, HelperText, ErrorText } from './styled';

export function TextArea({ field, form: { touched, errors }, label, helperText, maxLength, ...props }) {
  const hasError = getIn(touched, field.name) && Boolean(getIn(errors, field.name));
  const errorText = getIn(errors, field.name);

  return (
    <InputWrapper>
      {label && <Label htmlFor={field.name}>{label}</Label>}
      {maxLength > 0 && field.value?.length >= maxLength * 0.7 && (
        <LengthCounter
          exceed={field.value?.length > maxLength}
        >{`${field.value?.length} / ${maxLength}`}</LengthCounter>
      )}
      <StyledTextarea
        id={field.name}
        name={field.name}
        value={field.value}
        onChange={field.onChange}
        onBlur={field.onBlur}
        maxLength={maxLength > 0 ? maxLength : ''}
        {...props}
      />
      {helperText && <HelperText>{helperText}</HelperText>}
      {hasError && <ErrorText>{errorText}</ErrorText>}
    </InputWrapper>
  );
}

TextArea.propTypes = {
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
  resize: PropTypes.string,
};

TextArea.defaultProps = {
  label: '',
  helperText: '',
  maxLength: 0,
  resize: 'both',
};
