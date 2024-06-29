import React from 'react';
import styles from '@/widget/editor/base/container/BaseEditorContainer.module.scss';
import classNames from 'classnames/bind';
import BaseEditor from '@/widget/editor/base/editor/BaseEditor';

const cn = classNames.bind(styles);

const BaseEditorContainer = () => {
  return (
    <div className={cn('container')}>
      <BaseEditor />
    </div>
  );
};

export default BaseEditorContainer;
