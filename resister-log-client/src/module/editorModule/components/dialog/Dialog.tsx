import React, { ReactNode } from 'react';
import styles from '@/module/editorModule/components/dialog/Dialog.module.scss';
import classNames from 'classnames/bind';

const cn = classNames.bind(styles);

type Props = Readonly<{
  children: ReactNode;
}>;

export function DialogButtonsList({ children }: Props): JSX.Element {
  return <div className={cn('dialog-button-list')}>{children}</div>;
}

export function DialogActions({ children }: Props): JSX.Element {
  return <div className={cn('dialog-action')}>{children}</div>;
}
