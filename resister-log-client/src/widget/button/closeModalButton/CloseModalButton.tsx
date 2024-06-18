import React from 'react';
import { RxCross2 } from 'react-icons/rx';
import styles from '@/widget/button/closeModalButton/CloseModalButton.module.scss';
import classNames from 'classnames/bind';
import { COLOR } from '@/styles/COLOR';

const cn = classNames.bind(styles);

type Props = {
  onClick: () => void;
};

const CloseModalButton = ({ onClick }: Props) => {
  return (
    <button className={cn('container')} onClick={onClick}>
      <RxCross2 size={20} color={COLOR.DARK_GREY_1} />
    </button>
  );
};

export default CloseModalButton;
