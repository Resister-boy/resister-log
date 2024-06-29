'use client';
import styles from '@/widget/editor/base/editor/BaseEditor.module.scss';
import classNames from 'classnames/bind';
import {
  SettingsContext,
  useSettings,
} from '@/module/editorModule/context/SettingsContext';
import { LexicalComposer } from '@lexical/react/LexicalComposer';
import { SharedHistoryContext } from '@/module/editorModule/context/SharedHistoryContext';
import { SharedAutocompleteContext } from '@/module/editorModule/context/SharedAutocompleteContext';
import { FlashMessageContext } from '@/module/editorModule/context/FlashMessageContext';
import RootEditor from '@/module/editorModule/RootEditor';
import Nodes from '@/module/editorModule/nodes';
import { $prepopulatedRichText } from '@/module/editorModule/utils/initUtils';

const cn = classNames.bind(styles);

const BaseEditor = () => {
  const {
    settings: { isCollab, measureTypingPerf },
  } = useSettings();

  const initialConfig = {
    editorState: $prepopulatedRichText,
    namespace: 'Create-Post',
    nodes: [...Nodes],
    onError: (error: Error) => {
      throw error;
    },
  };

  return (
    <div className={cn('container')}>
      <LexicalComposer initialConfig={initialConfig}>
        <SettingsContext>
          <FlashMessageContext>
            <SharedHistoryContext>
              <SharedAutocompleteContext>
                <div className={cn('editor-shell')}>
                  <RootEditor />
                </div>
              </SharedAutocompleteContext>
            </SharedHistoryContext>
          </FlashMessageContext>
        </SettingsContext>
      </LexicalComposer>
    </div>
  );
};

export default BaseEditor;
