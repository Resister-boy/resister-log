import React, { forwardRef, useLayoutEffect, useRef } from 'react'
import styles from '@/widget/editor/logEditor/LogEditor.module.scss'
import classNames from 'classnames/bind'
import EditorJS from '@editorjs/editorjs'
import { LogEditorConfig } from '@/config'

const cn = classNames.bind(styles)

const LogEditor = forwardRef<any, any>(function getEditor(props, ref) {
  const editorRef = useRef<EditorJS | null>(null);
  const editor = new EditorJS({ holder: 'log-editor', ...LogEditorConfig });

  useLayoutEffect(() => {
    editorRef.current = editorRef.current ?? editor;

    if (typeof ref === 'function') {
      ref({ editor: editorRef.current });
    } else if (ref) {
      ref.current = { editor: editorRef.current, scene: null };
    }

    return () => {
      if (editorRef.current) {
        if (editorRef.current !== null) {
          editorRef.current = null;
        }
      }
    };
  }, []);

  return <div id='log-editor' className={cn('editor-container')} ref={ref} />
})

export default LogEditor
