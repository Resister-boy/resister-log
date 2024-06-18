import React from 'react';
import styles from '@/components/divider/baseDivider/BaseDivider.module.scss';
import classNames from 'classnames/bind';
import { COLOR } from '@/styles/COLOR';

const cn = classNames.bind(styles);

type Props = {
  space?: number;
  color?: string;
};

const BaseDivider = ({ space = 22, color = COLOR.LIGHT_GREY_2 }: Props) => {
  const styles = {
    marginTop: space,
    marginBottom: space,
    backgroundColor: color,
  };

  return <div style={styles} className={cn('divider')} />;
};

export default BaseDivider;
