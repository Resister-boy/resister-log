import React, { HTMLInputTypeAttribute } from 'react';
import styles from '@/module/editorModule/components/textInput/TextInput.module.scss';
import classNames from 'classnames/bind';

const cn = classNames.bind(styles);

type Props = Readonly<{
  'data-test-id'?: string;
  label: string;
  onChange: (val: string) => void;
  placeholder?: string;
  value: string;
  type?: HTMLInputTypeAttribute;
}>;

const TextInput = ({
  label,
  value,
  onChange,
  placeholder = '',
  type = 'text',
}: Props) => {
  return (
    <div className={cn('input-container')}>
      <label className={cn('input-label')}>{label}</label>
      <input
        type={type}
        className={'input'}
        placeholder={placeholder}
        value={value}
        onChange={(e) => {
          onChange(e.target.value);
        }}
      />
    </div>
  );
};

export default TextInput;
