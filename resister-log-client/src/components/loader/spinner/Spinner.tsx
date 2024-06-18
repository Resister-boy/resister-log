import React from 'react';
import styles from '@/components/loader/spinner/Spinner.module.scss';
import classNames from 'classnames/bind';
import { Oval } from 'react-loader-spinner';

const cn = classNames.bind(styles);

type Props = {
  type: 'basic' | 'global';
  strokeColor: string;
  width: string;
};

const Spinner = ({ type, strokeColor, width }: Props) => {
  return (
    <div className={cn(`container-${type}`)}>
      <Oval
        color={strokeColor}
        secondaryColor={strokeColor}
        width={width}
        visible={true}
      />
    </div>
  );
};

export default Spinner;
