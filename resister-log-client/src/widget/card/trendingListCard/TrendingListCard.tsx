import React, { useCallback } from 'react';
import styles from '@/widget/card/trendingListCard/TrendingListCard.module.scss';
import classNames from 'classnames/bind';
import BookIcon from '@/assets/icons/book.svg';
import CodeIcon from '@/assets/icons/code.svg';
import TopicIcon from '@/assets/icons/fire.svg';
import UserIcon from '@/assets/icons/medal.svg';
import PostIcon from '@/assets/icons/note.svg';

const cn = classNames.bind(styles);

type Props = {
  title: string;
  queryParams: string;
};

const TrendingListCard = ({ title, queryParams }: Props) => {
  // const { data, isLoading, error } = useQuery({
  //   queryKey: [QUERY_KEY.GET_TRENDING, queryParams],
  //   queryFn: () => {},
  // });

  const renderIcon = useCallback(() => {
    switch (queryParams) {
      case 'book':
        return <BookIcon viewBox="0 0 100 100" className={cn('icon-book')} />;
      case 'repository':
        return <CodeIcon viewBox="0 0 24 24" className={cn('icon-code')} />;
      case 'post':
        return <PostIcon viewBox="0 0 512 512" className={cn('icon-note')} />;
      case 'topic':
        return (
          <TopicIcon viewBox="-33 0 255 255" className={cn('icon-topic')} />
        );
      default:
        return <UserIcon viewBox="0 0 120 120" className={cn('icon-medal')} />;
    }
  }, [queryParams]);

  return (
    <div className={cn('container')}>
      <div className={cn('title-container')}>
        {renderIcon()}
        <span className={cn('title-text')}>{title}</span>
      </div>
      <div className={cn('inner')}></div>
    </div>
  );
};

export default TrendingListCard;
