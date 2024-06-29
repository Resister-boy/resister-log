import React, { ReactNode } from 'react';
import styles from '@/module/editorModule/components/flashMessage/FlashMessage.module.scss';
import classNames from 'classnames/bind';

const cn = classNames.bind(styles);

export interface FlashMessageProps {
  children: ReactNode;
}

const FlashMessage = ({ children }: FlashMessageProps) => {
  return (
    <div className={cn('flash-message-overlay')} role="dialog">
      <p className={cn('flash-message-alert')} role="alert">
        {children}
      </p>
    </div>
  );
};

export default FlashMessage;
