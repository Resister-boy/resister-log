import React from 'react';
import styles from '@/widget/sideContent/notification/NotificationContainer.module.scss';
import classNames from 'classnames/bind';

const cn = classNames.bind(styles);

const NotificationContainer = () => {
  return (
    <div className={cn('container')}>
      <div className={cn('title-inner')}>
        <span className={cn('title-text')}>Notifications</span>
      </div>
    </div>
  );
};

export default NotificationContainer;
