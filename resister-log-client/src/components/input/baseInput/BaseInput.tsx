import React, {
  ChangeEvent,
  ReactNode,
  useCallback,
  useMemo,
  useState,
} from 'react';
import styles from '@/components/input/baseInput/BaseInput.module.scss';
import classNames from 'classnames/bind';
import { IoEyeOffOutline, IoEyeOutline } from 'react-icons/io5';

type Props = {
  id: string;
  type: 'text' | 'number' | 'password' | 'email';
  label?: string;
  labelVisible?: boolean;
  placeholder: string;
  readonly?: boolean;
  disabled?: boolean;
  value: string | (number | '');
  error?: any | null;
  children?: ReactNode;
  classNames?: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
};

const cn = classNames.bind(styles);

const BaseInput = ({
  id,
  type,
  label = '',
  labelVisible = false,
  placeholder,
  readonly = false,
  disabled = false,
  value,
  error = null,
  classNames = '',
  onChange,
  children,
}: Props) => {
  const isPassword = type === 'password';
  const [_type, setType] = useState<'text' | 'password' | 'number' | 'email'>(
    type,
  );

  const handlePwView = useCallback(() => {
    if (_type === 'text') {
      setType('password');
    } else {
      setType('text');
    }
  }, [_type]);

  const passwordIcon = useMemo(() => {
    return _type === 'password' ? (
      <IoEyeOffOutline color="#CCCCCC" size={18} />
    ) : (
      <IoEyeOutline color="#CCCCCC" size={18} />
    );
  }, [_type]);

  return (
    <div className={cn('container')}>
      <label htmlFor={id} className={cn('label')}>
        {label}
      </label>
      <input
        type={_type}
        placeholder={placeholder}
        className={cn('input')}
        disabled={disabled}
        readOnly={readonly}
        onChange={onChange}
        value={value}
      />
      {children && <div className={cn('icon')}>{children}</div>}
      {isPassword && (
        <button
          className={cn('password')}
          onClick={(event) => {
            handlePwView();
            event.preventDefault();
            event.stopPropagation();
          }}
        >
          {passwordIcon}
        </button>
      )}
    </div>
  );
};

export default BaseInput;
