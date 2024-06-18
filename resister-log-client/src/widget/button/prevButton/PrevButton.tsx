import React from 'react';
import styles from '@/widget/button/prevButton/PrevButton.module.scss';
import classNames from 'classnames/bind';
import { GoArrowLeft } from 'react-icons/go';

const cn = classNames.bind(styles);

type Props = {
  onClick: () => void;
};

const PrevButton = ({ onClick }: Props) => {
  return (
    <button
      className={cn('container')}
      onClick={(event) => {
        event.preventDefault();
        event.stopPropagation();
        onClick();
      }}
    >
      <GoArrowLeft size={20} />
    </button>
  );
};

export default PrevButton;
