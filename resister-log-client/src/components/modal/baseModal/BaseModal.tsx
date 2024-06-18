'use client';
import React, { ReactNode, useLayoutEffect, useState } from 'react';
import styles from '@/components/modal/baseModal/BaseModal.module.scss';
import ReactDOM from 'react-dom';
import classNames from 'classnames/bind';

const cn = classNames.bind(styles);

type Props = {
  type: 'base' | 'dark' | 'blur' | 'blur-dark';
  children: ReactNode;
};

const BaseModal = ({ type, children }: Props) => {
  const [isMount, setIsMount] = useState<boolean>(false);
  console.log('Hello, World');

  useLayoutEffect(() => {
    setIsMount(true);
  }, []);

  if (typeof window === 'undefined' || !isMount) return null;

  return ReactDOM.createPortal(
    <section className={cn(`container-${type}`)}>{children}</section>,
    document.getElementById('modal-root') as HTMLDivElement,
  );
};

export default BaseModal;
