import React from 'react';
import PostsClientPage from '@/app/posts/PostsClientPage';
import styles from '@/app/posts/page.module.scss';
import classNames from 'classnames/bind';

const cn = classNames.bind(styles);

const PostsPage = () => {
  return (
    <main>
      <PostsClientPage />
    </main>
  );
};

export default PostsPage;
