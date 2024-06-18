import React from 'react';
import styles from '@/components/card/selectedBookCard/SelectedBookCard.module.scss';
import classNames from 'classnames/bind';

const cn = classNames.bind(styles);

type Props = {
  image: string;
  title: string;
  id: string;
  isbn: string;
};

const SelectedBookCard = () => {
  return <div className={cn('container')}>Selected Book</div>;
};

export default SelectedBookCard;
