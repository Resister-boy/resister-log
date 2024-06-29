import { LexicalComposer } from '@lexical/react/LexicalComposer';
import { Klass, LexicalNode } from 'lexical';
import { ComponentProps } from 'react';
import { HeadingNode } from '@lexical/rich-text';
import { CodeNode } from '@lexical/code';
import { HashtagNode } from '@lexical/hashtag';
export const nodes: Klass<LexicalNode>[] = [HeadingNode, CodeNode, HashtagNode];

export const INITIAL_CONFIG: ComponentProps<
  typeof LexicalComposer
>['initialConfig'] = {
  namespace: 'Create-Post',
  onError: () => {},
};

export const SUPPORT_BLOCK_TYPE = {
  paragraph: 'Paragraph',
  h1: 'Heading 1',
  h2: 'Heading 2',
  h3: 'Heading 3',
  h4: 'Heading 4',
  h5: 'Heading 5',
  h6: 'Heading 6',
} as const;

export type BlockType = keyof typeof SUPPORT_BLOCK_TYPE;

export const DEFAULT_SETTINGS = {
  disableBeforeInput: false,
  isAutocomplete: false,
  isCharLimit: false,
  isCharLimitUtf8: false,
  isCollab: false,
  isMaxLength: false,
  isRichText: true,
  measureTypingPerf: false,
  shouldPreserveNewLinesInMarkdown: false,
  shouldUseLexicalContextMenu: false,
  showNestedEditorTreeView: false,
  showTableOfContents: false,
  showTreeView: true,
  tableCellBackgroundColor: true,
  tableCellMerge: true,
} as const;

// These are mutated in setupEnv
export const INITIAL_SETTINGS: Record<SettingName, boolean> = {
  ...DEFAULT_SETTINGS,
};

export type SettingName = keyof typeof DEFAULT_SETTINGS;

export type Settings = typeof INITIAL_SETTINGS;
