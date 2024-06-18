import React, { useCallback, useMemo } from 'react';
import styles from '@/layout/sideBar/SideBar.module.scss';
import classNames from 'classnames/bind';
import NotificationContainer from '@/widget/sideContent/notification/NotificationContainer';
import SearchContainer from '@/widget/sideContent/search/SearchContainer';
import { useSelector } from 'react-redux';
import { getSideState } from '@/state/slice/sideSlice';

const cn = classNames.bind(styles);

const SideBar = () => {
  const { name, visibility } = useSelector(getSideState);

  const state = useMemo(() => {
    if (!name || !visibility) return 'disappear';
    return 'appear';
  }, [name, visibility]);

  const renderSideBar = useCallback(() => {
    if (name === 'notification') {
      return <NotificationContainer />;
    } else if (name === 'search') {
      return <SearchContainer />;
    } else {
      return null;
    }
  }, [name]);
  return <aside className={cn(`container-${state}`)}>{renderSideBar()}</aside>;
};

export default SideBar;
