import React, { useCallback, useEffect, useState } from 'react';
import styles from '@/components/card/messageCard/MessageCard.module.scss';
import classNames from 'classnames/bind';
import Link from 'next/link';
import XIcon from '@/assets/icons/x.svg';
import { useDispatch, useSelector } from 'react-redux';
import { CLOSE_MESSAGE } from '@/state/slice/messageSlice';
import { getMessage } from '@/state/slice/messageSlice';

const cn = classNames.bind(styles);

type Props = {
  title: {
    text: string;
    type: 'text' | 'link' | 'button';
    link?: string;
    handler?: () => void;
  };
  subTitle: string;
};

const MessageCard = ({
  title: { text, type, link, handler },
  subTitle,
}: Props) => {
  const messageInfo = useSelector(getMessage);
  const [hide, setHide] = useState<boolean>(false);
  const dispatch = useDispatch();

  const handleClose = useCallback(() => {
    setHide(true);
    setTimeout(() => {
      dispatch(CLOSE_MESSAGE());
    }, 1000);
  }, []);

  useEffect(() => {
    if (messageInfo.autoClose && messageInfo.message) {
      setTimeout(() => {
        handleClose();
      }, messageInfo.autoClose.duration);
    }
  }, [messageInfo]);

  return (
    <section className={cn('container', hide && 'container-hide')}>
      <div className={cn('title-inner')}>
        {type === 'link' && link ? (
          <Link href={link} target="_blank">
            <span className={cn('title')}>{text}</span>
          </Link>
        ) : type === 'button' && handler ? (
          <button className={cn('button')} onClick={handler}>
            <span className={cn('title')}>{text}</span>
          </button>
        ) : (
          <span className={cn('title')}>{text}</span>
        )}
      </div>
      <div className={cn('subTitle-inner')}>
        <span className={cn('subTitle')}>{subTitle}</span>
      </div>
      <button className={cn('button-container')} onClick={() => handleClose()}>
        <XIcon viewBox="0 0 16 16" className={cn('svg-icon')} />
      </button>
    </section>
  );
};

export default MessageCard;
