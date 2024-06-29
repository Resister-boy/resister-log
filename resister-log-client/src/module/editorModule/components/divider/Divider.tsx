import React from 'react';
import styles from '@/module/editorModule/components/divider/Divider.module.scss';
import classNames from 'classnames/bind';

const cn = classNames.bind(styles);

type Props = {
  type: 'horizontal' | 'vertical';
};

const Divider = ({ type }: Props) => {
  return <div className={cn(`divider-${type}`)} />;
};

export default Divider;
