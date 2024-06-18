import React, { ReactNode } from 'react';
import styles from '@/components/button/shadowButton/ShadowButton.module.scss';
import classNames from 'classnames/bind';

const cn = classNames.bind(styles);

type Props = {
  name: string;
  theme: 'primary' | 'gray';
  onClick: () => void;
  disabled?: boolean;
  loading?: boolean;
  children?: ReactNode;
  classNames?: string;
};

const ShadowButton = ({
  name,
  onClick,
  theme,
  disabled = false,
  loading = false,
  children = null,
  classNames = '',
}: Props) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={cn(`container-${theme}`, classNames)}
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

export default ShadowButton;
