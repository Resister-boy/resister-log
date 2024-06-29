import React, { Fragment, useCallback, useEffect, useState } from 'react';
import { useSettings } from '@/module/editorModule/context/SettingsContext';
import Placeholder from '@/module/editorModule/components/placeholder/Placeholder';
import Editor from '@/module/editorModule/components/editor/Editor';
import { RichTextPlugin } from '@lexical/react/LexicalRichTextPlugin';
import { LexicalErrorBoundary } from '@lexical/react/LexicalErrorBoundary';
import styles from '@/module/editorModule/RootEditor.module.scss';
import classNames from 'classnames/bind';
import SidebarPlugin from '@/module/editorModule/plugins/sidebarPlugin/SidebarPlugin';
import { CAN_USE_DOM } from '@/shared/environment';
import { HistoryPlugin } from '@lexical/react/LexicalHistoryPlugin';
import { useSharedHistoryContext } from '@/module/editorModule/context/SharedHistoryContext';
import ToolbarPlugin from '@/module/editorModule/plugins/toolbarPlugin/ToolbarPlugin';

const cn = classNames.bind(styles);

const RootEditor = () => {
  const [floatingAnchorElem, setFloatingAnchorElem] =
    useState<HTMLDivElement | null>(null);
  const [isSmallWidthViewport, setIsSmallWidthViewport] =
    useState<boolean>(false);
  const [isLinkEditMode, setIsLinkEditMode] = useState<boolean>(false);
  const { historyState } = useSharedHistoryContext();
  const {
    settings: {
      isCollab,
      isAutocomplete,
      isMaxLength,
      isCharLimit,
      isCharLimitUtf8,
      isRichText,
      showTreeView,
      showTableOfContents,
      shouldUseLexicalContextMenu,
      shouldPreserveNewLinesInMarkdown,
      tableCellMerge,
      tableCellBackgroundColor,
    },
  } = useSettings();

  const text = isCollab
    ? 'Enter some collaborative rich text...'
    : isRichText
      ? 'Enter some rich text...'
      : 'Enter some plain text...';

  const placeholder = <Placeholder>{text}</Placeholder>;
  const onRef = useCallback((_floatingAnchorElem: HTMLDivElement) => {
    if (_floatingAnchorElem !== null) {
      setFloatingAnchorElem(_floatingAnchorElem);
    }
  }, []);

  useEffect(() => {
    const updateViewPortWidth = () => {
      const isNextSmallWidthViewport =
        CAN_USE_DOM && window.matchMedia('(max-width: 1025px)').matches;

      if (isNextSmallWidthViewport !== isSmallWidthViewport) {
        setIsSmallWidthViewport(isNextSmallWidthViewport);
      }
    };
    updateViewPortWidth();
    window.addEventListener('resize', updateViewPortWidth);

    return () => {
      window.removeEventListener('resize', updateViewPortWidth);
    };
  }, [isSmallWidthViewport]);

  return (
    <Fragment>
      <SidebarPlugin setIsLinkEditMode={setIsLinkEditMode} />
      {isRichText && <ToolbarPlugin />}
      <RichTextPlugin
        contentEditable={
          <div className={cn('Create-Post')} ref={onRef}>
            <Editor />
          </div>
        }
        placeholder={placeholder}
        ErrorBoundary={LexicalErrorBoundary}
      />
      <HistoryPlugin externalHistoryState={historyState} />
    </Fragment>
  );
};

export default RootEditor;
