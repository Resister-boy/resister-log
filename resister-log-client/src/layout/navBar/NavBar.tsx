import React, { Fragment, useMemo, useState } from 'react';
import styles from '@/layout/navBar/NavBar.module.scss';
import classNames from 'classnames/bind';
import { GoHome } from 'react-icons/go';
import { GoSearch } from 'react-icons/go';
import { BsCompass } from 'react-icons/bs';
import { RiArrowRightDoubleFill, RiArrowLeftDoubleFill } from 'react-icons/ri';
import { IoNotificationsOutline } from 'react-icons/io5';
import { usePathname, useRouter } from 'next/navigation';
import { useDispatch, useSelector } from 'react-redux';
import {
  CLOSE_SIDE_BAR,
  getSideState,
  OPEN_SIDE_BAR,
} from '@/state/slice/sideSlice';
import {
  CLOSE_NAV_BAR,
  getNavState,
  REVERSE_NAV_BAR,
} from '@/state/slice/navigationSlice';

const cn = classNames.bind(styles);

const NavBar = () => {
  const dispatch = useDispatch();
  const pathname = usePathname();
  const sideBar = useSelector(getSideState);
  const navBar = useSelector(getNavState);
  const router = useRouter();

  const homeActive = useMemo(() => {
    if (pathname === '/') return true;
    return false;
  }, [router, pathname]);

  const exploreActive = useMemo(() => {
    if (pathname === '/feed') return true;
    return false;
  }, [router, pathname]);

  return (
    <Fragment>
      <nav className={cn(`container-${navBar.status}`)}>
        <button
          className={cn('nav-item', homeActive && 'nav-item-active')}
          onClick={() => {
            dispatch(CLOSE_SIDE_BAR());
            router.push('/');
          }}
        >
          <GoHome size={24} />
          <span className={cn('nav-item-text')}>Home</span>
        </button>
        <button
          className={cn('nav-item')}
          onClick={() => {
            if (sideBar.name !== 'search') {
              dispatch(
                OPEN_SIDE_BAR({
                  name: 'search',
                  visibility: true,
                }),
              );
            } else {
              dispatch(CLOSE_SIDE_BAR());
            }
            dispatch(CLOSE_NAV_BAR());
          }}
        >
          <GoSearch size={24} />
          <span className={cn('nav-item-text')}>Search</span>
        </button>
        <button
          className={cn('nav-item', exploreActive && 'nav-item-active')}
          onClick={() => {
            dispatch(CLOSE_SIDE_BAR());
            router.push('/feed');
          }}
        >
          <BsCompass size={22} />
          <span className={cn('nav-item-text')}>Explore</span>
        </button>
        <button
          className={cn('nav-item')}
          onClick={() => {
            if (sideBar.name !== 'notification') {
              dispatch(
                OPEN_SIDE_BAR({
                  name: 'notification',
                  visibility: true,
                }),
              );
            } else {
              dispatch(CLOSE_SIDE_BAR());
            }
            dispatch(CLOSE_NAV_BAR());
          }}
        >
          <IoNotificationsOutline size={24} />
          <span className={cn('nav-item-text')}>Notification</span>
        </button>
        <button
          className={cn('nav-ctrl-item')}
          onClick={() => {
            dispatch(CLOSE_SIDE_BAR());
            dispatch(REVERSE_NAV_BAR());
          }}
        >
          {navBar.status === 'grow' ? (
            <RiArrowLeftDoubleFill size={24} />
          ) : (
            <RiArrowRightDoubleFill size={24} />
          )}
        </button>
      </nav>
    </Fragment>
  );
};

export default NavBar;
