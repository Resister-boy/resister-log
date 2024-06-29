'use client';
import React, { useLayoutEffect } from 'react';
import styles from '@/app/create/page.module.scss';
import classNames from 'classnames/bind';
import MarkdownEditorContainer from '@/widget/editor/markdown/container/MarkdownEditorContainer';
import { useDispatch } from 'react-redux';
import { SET_TYPE } from '@/state/slice/createPostSlice';
import dynamic from 'next/dynamic';

const BaseEditorContainerClient = dynamic(
  () => import('@/widget/editor/base/container/BaseEditorContainer'),
  { ssr: false },
);

const cn = classNames.bind(styles);

type Props = {
  type: 'md' | 'ed' | undefined;
};

const CreateClientPage = ({ type }: Props) => {
  const dispatch = useDispatch();
  if (!type) {
    return null;
  }

  useLayoutEffect(() => {
    const editorTypeMap = {
      ['md']: 'Markdown',
      ['ed']: 'Editor',
    };
    dispatch(SET_TYPE({ type: editorTypeMap[type] }));
  }, [type, dispatch]);

  return (
    <section className={cn('container')}>
      {type === 'ed' ? (
        <BaseEditorContainerClient />
      ) : (
        <MarkdownEditorContainer type={'basic'} />
      )}
    </section>
  );
};

export default CreateClientPage;
