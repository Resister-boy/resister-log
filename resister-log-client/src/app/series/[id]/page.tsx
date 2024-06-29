import React from 'react';
import SeriesClientPage from '@/app/series/[id]/SeriesClientPage';
import styles from '@/app/series/[id]/page.module.scss';
import classNames from 'classnames/bind';

const cn = classNames.bind(styles);

const SeriesDetail = () => {
  return (
    <main>
      <SeriesClientPage />
    </main>
  );
};

export default SeriesDetail;
