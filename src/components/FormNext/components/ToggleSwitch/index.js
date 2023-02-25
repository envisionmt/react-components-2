import React, { useRef } from 'react';
import PropTypes from 'prop-types';

import { InputWrapper, Input, Label, ToggleTrack, ToggleFill } from './styled';

export function ToggleSwitch({ field, label, block, ...props }) {
  const inputRef = useRef(null);

  return (
    <InputWrapper block={block}>
      {label && (
        <Label isChecked={!!field.value} htmlFor={field.name}>
          {label}
        </Label>
      )}
      <ToggleTrack isChecked={!!field.value} onClick={() => inputRef.current.click()}>
        <Input
          ref={inputRef}
          type="checkbox"
          id={field.name}
          name={field.name}
          value={field.value}
          onChange={field.onChange}
          onBlur={field.onBlur}
          {...props}
        />
        <ToggleFill toggled={field.value} />
      </ToggleTrack>
    </InputWrapper>
  );
}

ToggleSwitch.propTypes = {
  field: PropTypes.shape({
    name: PropTypes.string,
    value: PropTypes.oneOfType(PropTypes.string, PropTypes.bool),
    onBlur: PropTypes.func,
    onChange: PropTypes.func,
  }).isRequired,
  block: PropTypes.bool,
  label: PropTypes.string,
};

ToggleSwitch.defaultProps = {
  label: '',
  block: false,
};
