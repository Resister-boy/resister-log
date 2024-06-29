import React, { Fragment, ReactNode } from 'react';
import styles from '@/components/button/baseButton/BaseButton.module.scss';
import classNames from 'classnames/bind';

const cn = classNames.bind(styles);

type Props = {
  name: string;
  type: 'fill' | 'outline';
  theme: 'gray' | 'primary';
  onClick: () => void;
  disabled?: boolean;
  loading?: boolean;
  children?: ReactNode;
  classNames?: string[];
  bgColor?: string;
};

const BaseButton = ({
  name,
  onClick,
  type,
  theme,
  disabled = false,
  loading = false,
  children = null,
  classNames = ['radius-4'],
}: Props) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={cn(`container-${type}-${theme}`, ...classNames)}
    >
      {loading ? (
        <></>
      ) : (
        <Fragment>
          {children && children}
          {name}
        </Fragment>
      )}
    </button>
  );
};

export default BaseButton;
