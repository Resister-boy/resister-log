'use client';
import React, { useMemo } from 'react';
import styles from '@/layout/Header/header.module.scss';
import classNames from 'classnames/bind';
import Logo from '@/components/logo/Logo';
import { useSelector } from 'react-redux';
import { getNavState } from '@/state/slice/navigationSlice';
import CreatePostDropdown from '@/widget/dropdown/createPostDropdown/CreatePostDropdown';

const cn = classNames.bind(styles);

const Header = () => {
  const navState = useSelector(getNavState);

  const showText = useMemo(() => {
    return navState.status === 'grow' ? true : false;
  }, [navState.status]);

  return (
    <header className={cn('container')}>
      <div className={cn('inner')}>
        <div className={cn('logo-container')}>
          <Logo withImage={true} withText={showText} />
        </div>
        <div className={cn('button-container')}>
          <CreatePostDropdown />
        </div>
      </div>
    </header>
  );
};

export default Header;
