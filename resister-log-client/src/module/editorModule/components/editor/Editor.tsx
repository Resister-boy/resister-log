import React from 'react';
import { ContentEditable } from '@lexical/react/LexicalContentEditable';
import styles from '@/module/editorModule/components/editor/Editor.module.scss';
import classNames from 'classnames/bind';

const cn = classNames.bind(styles);

const Editor = ({ className }: { className?: string }) => {
  return <ContentEditable className={cn(className || 'editor')} />;
};

export default Editor;
