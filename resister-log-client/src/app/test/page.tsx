'use client';
import React from 'react';
import styles from '@/app/test/page.module.scss';
import classNames from 'classnames/bind';
import { useDispatch } from 'react-redux';
import { CREATE_MESSAGE } from '@/state/slice/messageSlice';
import { CREATE_TOAST } from '@/state/slice/toastSlice';

const cn = classNames.bind(styles);

const TestPage = () => {
  const dispatch = useDispatch();

  return (
    <main className={cn('container')}>
      <button
        onClick={() => {
          dispatch(
            CREATE_MESSAGE({
              autoClose: { duration: 4000 },
              message: {
                title: {
                  text: 'Hello, World',
                  type: 'link',
                  link: '/',
                },
                subTitle:
                  'Hello, World, Hello, World, Hello, World, Hello, World',
              },
            }),
          );
        }}
      >
        Open Message
      </button>
      <button
        onClick={() => {
          dispatch(
            CREATE_TOAST({
              autoClose: null,
              toast: {
                direction: 'top',
                text: 'Hello, World, Hello, World, Hello, World, Hello, World',
              },
            }),
          );
        }}
      >
        Open Toast Top
      </button>
      <button
        onClick={() => {
          dispatch(
            CREATE_TOAST({
              autoClose: { duration: 3000 },
              toast: {
                direction: 'bottom',
                text: 'Hello, World, Hello, World, Hello, World, Hello, World',
              },
            }),
          );
        }}
      >
        Open Toast Bottom
      </button>
      <button
        onClick={() => {
          dispatch(
            CREATE_TOAST({
              autoClose: { duration: 3000 },
              toast: {
                direction: 'right',
                text: 'Hello, World, Hello, World, Hello, World, Hello, World',
              },
            }),
          );
        }}
      >
        Open Toast Right
      </button>
    </main>
  );
};

export default TestPage;
