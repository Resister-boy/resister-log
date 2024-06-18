import React from 'react';
import styles from '@/components/checkbox/baseCheckbox/BaseCheckBox.module.scss';
import classNames from 'classnames/bind';
import { BaseCheckboxProps } from '@/interface/ui/checkbox';
import BaseTooltip from '@/components/tooltip/baseTooltip/BaseTooltip';

const cn = classNames.bind(styles);

const BaseCheckbox = ({
  label,
  checked,
  orientation,
  disabled,
  message,
  onChange,
}: BaseCheckboxProps) => {
  return (
    <label className={cn('container')}>
      <input
        type="checkbox"
        checked={checked}
        disabled={disabled}
        onChange={onChange}
        className={cn('checkbox')}
      />
      <span className={cn('text')}>{label}</span>
      {checked && (
        <BaseTooltip
          position={{
            top: 24,
            left: -5,
          }}
          orientation={orientation}
          message={message}
        />
      )}
    </label>
  );
};

export default BaseCheckbox;
