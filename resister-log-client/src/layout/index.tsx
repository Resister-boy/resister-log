'use client';
import React, { Fragment, ReactNode, useMemo } from 'react';
import Header from '@/layout/header/Header';
import Footer from '@/layout/footer/Footer';
import { usePathname } from 'next/navigation';
import NavBar from '@/layout/navBar/NavBar';
import SideBar from '@/layout/sideBar/SideBar';
import { useSelector } from 'react-redux';
import { getToast, IToastState } from '@/state/slice/toastSlice';
import { getMessage } from '@/state/slice/messageSlice';
import ToastCard from '@/components/card/toastCard/ToastCard';
import MessageCard from '@/components/card/messageCard/MessageCard';

const Layout = ({ children }: { children: ReactNode }) => {
  const pathname = usePathname();
  const toastInfo = useSelector(getToast);
  const messageInfo = useSelector(getMessage);

  console.log('toastInfo', toastInfo);

  const showHeader = useMemo(() => {
    if (
      pathname === '/login' ||
      pathname === '/signup' ||
      pathname === '/reset'
    )
      return false;
    return true;
  }, [pathname]);

  const showFooter = useMemo(() => {
    if (
      pathname === '/login' ||
      pathname === '/signup' ||
      pathname === '/reset'
    )
      return false;
    return true;
  }, [pathname]);

  const showNavBar = useMemo(() => {
    if (
      pathname === '/login' ||
      pathname === '/signup' ||
      pathname === '/reset' ||
      pathname === '/create'
    )
      return false;
    return true;
  }, [pathname]);

  const showSideBar = useMemo(() => {
    if (
      pathname === '/login' ||
      pathname === '/signup' ||
      pathname === '/reset' ||
      pathname === '/create'
    )
      return false;
    return true;
  }, [pathname]);

  return (
    <Fragment>
      {showHeader && <Header />}
      {children}
      {toastInfo.length !== 0 &&
        toastInfo.map((toast: IToastState) => {
          return (
            <ToastCard
              key={toast.toastId}
              toastId={toast.toastId}
              autoClose={toast.autoClose}
              text={toast.toast.text}
              direction={toast.toast.direction}
            />
          );
        })}
      {messageInfo.message && (
        <MessageCard
          title={messageInfo.message.title}
          subTitle={messageInfo.message.subTitle}
        />
      )}
      {showNavBar && <NavBar />}
      {showSideBar && <SideBar />}
      {showFooter && <Footer />}
    </Fragment>
  );
};

export default Layout;
