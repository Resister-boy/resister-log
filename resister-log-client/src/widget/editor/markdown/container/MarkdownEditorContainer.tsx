import React from 'react';
import styles from '@/widget/editor/markdown/container/MarkdownEditorContainer.module.scss';
import classNames from 'classnames/bind';
import MarkdownEditor from '@/widget/editor/markdown/editor/MarkdownEditor';
import MarkdownViewer from '@/widget/editor/markdown/viewer/MarkdownViewer';
import EditorFooter from '@/widget/editor/editorFooter/EditorFooter';

const cn = classNames.bind(styles);

type Props = {
  type?: 'basic' | 'onlyEditor' | 'onlyViewer';
};

const MarkdownEditorContainer = ({ type = 'basic' }: Props) => {
  return (
    <div className={cn('container')}>
      <MarkdownEditor />
      <MarkdownViewer />
      <EditorFooter />
    </div>
  );
};

export default MarkdownEditorContainer;
