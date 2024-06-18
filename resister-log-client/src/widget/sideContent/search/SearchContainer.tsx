import React from 'react';
import styles from '@/widget/sideContent/search/SearchContainer.module.scss';
import classNames from 'classnames/bind';

const cn = classNames.bind(styles);

const SearchContainer = () => {
  return (
    <div className={cn('container')}>
      <div className={cn('title-inner')}>
        <span className={cn('title-text')}>Searchs</span>
      </div>
    </div>
  );
};

export default SearchContainer;
