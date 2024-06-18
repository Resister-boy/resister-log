import React, { ReactNode } from 'react';
import styles from '@/components/button/textButton/TextButton.module.scss';
import classNames from 'classnames/bind';

const cn = classNames.bind(styles);

type Props = {
  name: string;
  onClick: () => void;
  children?: ReactNode;
  disabled?: boolean;
  classNames?: string;
  loading?: boolean;
};

const TextButton = ({
  name,
  onClick,
  disabled = false,
  classNames = '',
  loading = false,
  children,
}: Props) => {
  return (
    <button
      className={cn('container', classNames)}
      disabled={disabled}
      onClick={onClick}
    >
      <span className={cn('text')}>{name}</span>
      {children}
    </button>
  );
};

export default TextButton;
