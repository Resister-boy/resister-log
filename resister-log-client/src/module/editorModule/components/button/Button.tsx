import React, { ReactNode } from 'react';
import styles from '@/module/editorModule/components/button/Button.module.scss';
import classNames from 'classnames/bind';

const cn = classNames.bind(styles);

const Button = ({
  children,
  className,
  onClick,
  disabled,
  small,
  title,
}: {
  children: ReactNode;
  className?: string;
  disabled?: boolean;
  onClick: () => void;
  small?: boolean;
  title?: string;
}) => {
  return (
    <button
      disabled={disabled}
      className={cn(
        'button',
        disabled && 'button-disable',
        small && 'button-small',
        className,
      )}
      onClick={onClick}
      title={title}
      aria-label={title}
    >
      {children}
    </button>
  );
};

export default Button;
