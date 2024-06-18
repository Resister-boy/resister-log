import React, { useCallback, useEffect, useState } from 'react';
import styles from '@/components/card/toastCard/ToastCard.module.scss';
import classNames from 'classnames/bind';
import XIcon from '@/assets/icons/x.svg';
import { useDispatch } from 'react-redux';
import { CLOSE_TOAST } from '@/state/slice/toastSlice';

const cn = classNames.bind(styles);

type Props = {
  toastId: number;
  autoClose: { duration: number };
  text: string;
  direction: 'top' | 'right' | 'bottom';
};

const ToastCard = ({ text, direction, autoClose, toastId }: Props) => {
  const [hide, setHide] = useState<boolean>(false);
  const dispatch = useDispatch();

  const handleClose = useCallback(() => {
    setHide(true);
    setTimeout(() => {
      dispatch(CLOSE_TOAST({ toastId }));
    }, 1000);
  }, [toastId]);

  useEffect(() => {
    if (autoClose) {
      setTimeout(() => {
        handleClose();
      }, autoClose.duration);
    }
  }, [autoClose, toastId]);

  return (
    <section
      className={cn(
        'container',
        `container-${direction}`,
        hide && `container-${direction}-hide`,
      )}
    >
      <div className={cn('text-inner')}>
        <span className={cn('text')}>{text}</span>
      </div>
      <button className={cn('button-container')} onClick={() => handleClose()}>
        <XIcon viewBox="0 0 16 16" className={cn('svg-icon')} />
      </button>
    </section>
  );
};

export default ToastCard;
