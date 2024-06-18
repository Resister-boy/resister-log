import React from 'react';
import styles from '@/components/tooltip/baseTooltip/BaseTooltip.module.scss';
import classNames from 'classnames/bind';

const cn = classNames.bind(styles);

type Props = {
  position: {
    top?: number;
    bottom?: number;
    right?: number;
    left?: number;
  };
  orientation: 'top' | 'down' | 'left' | 'right';
  message: string;
};

const BaseTooltip = ({
  position: { top = 0, left = 0, right = 0, bottom = 0 },
  orientation,
  message,
}: Props) => {
  const styles = {
    top: top,
    right: right,
    bottom: bottom,
    left: left,
  };

  return (
    <span
      role="tooltip"
      style={styles}
      className={cn('tooltip', `orientation-${orientation}`)}
    >
      {message}
    </span>
  );
};

export default BaseTooltip;
