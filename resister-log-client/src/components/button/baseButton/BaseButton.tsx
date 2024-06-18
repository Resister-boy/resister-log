import React, { ReactNode } from 'react';
import styles from '@/components/button/baseButton/BaseButton.module.scss';
import classNames from 'classnames/bind';

const cn = classNames.bind(styles);

type Props = {
  name: string;
  type: 'fill' | 'outline';
  onClick: () => void;
  disabled?: boolean;
  loading?: boolean;
  children?: ReactNode;
  classNames?: string;
};

const BaseButton = ({
  name,
  onClick,
  type,
  disabled = false,
  loading = false,
  children = null,
  classNames = '',
}: Props) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={cn(`container-${type}`, classNames)}
    >
      {loading ? (
        <></>
      ) : (
        <div>
          {children && <span>{children}</span>}
          {name}
        </div>
      )}
    </button>
  );
};

export default BaseButton;
