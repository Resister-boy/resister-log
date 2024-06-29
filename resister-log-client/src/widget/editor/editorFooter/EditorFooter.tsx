import React from 'react';
import styles from '@/widget/editor/editorFooter/EditorFooter.module.scss';
import classNames from 'classnames/bind';
import BaseButton from '@/components/button/baseButton/BaseButton';

const cn = classNames.bind(styles);

const EditorFooter = () => {
  return (
    <div className={cn('container')}>
      <div className={cn('button')}>
        <BaseButton
          name="임시저장"
          type="fill"
          theme="gray"
          onClick={() => {}}
          classNames={['radius-8', 'fontsize-14', 'gray']}
        />
      </div>
      <div className={cn('button')}>
        <BaseButton
          name="업로드"
          type="fill"
          theme="primary"
          onClick={() => {}}
          classNames={['radius-8', 'fontsize-14']}
        />
      </div>
    </div>
  );
};

export default EditorFooter;
