import React from 'react';
import styles from '@/widget/checkbox/autoSignInCheckbox/AutoSignInCheckbox.module.scss';
import classNames from 'classnames/bind';
import { BaseCheckboxProps } from '@/interface/ui/checkbox';
import BaseCheckbox from '@/components/checkbox/baseCheckbox/BaseCheckbox';
import { AUTO_SIGNIN_MESSAGE } from '@/constants/strings';

const cn = classNames.bind(styles);

type Props = BaseCheckboxProps & {};

const AutoSignInCheckbox = ({
  label = '자동 로그인',
  checked,
  orientation = 'top',
  disabled = false,
  message = AUTO_SIGNIN_MESSAGE,
  onChange,
}: Props) => {
  return (
    <BaseCheckbox
      label={label}
      checked={checked}
      disabled={disabled}
      orientation={orientation}
      message={message}
      onChange={onChange}
    />
  );
};

export default AutoSignInCheckbox;
