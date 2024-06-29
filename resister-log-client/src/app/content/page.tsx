import React from 'react';
import ContentClientPage from '@/app/content/ContentClientPage';
import styles from '@/app/content/page.module.scss';
import classNames from 'classnames/bind';

const cn = classNames.bind(styles);

const ContentPage = () => {
  return (
    <main>
      <ContentClientPage />
    </main>
  );
};

export default ContentPage;
