import React, { Dispatch, SetStateAction, useCallback } from 'react';
import styles from '@/module/editorModule/components/dropdown/codeLanguageDropdown/CodeLanguageDropdown.module.scss';
import classNames from 'classnames/bind';
import { $getNodeByKey, LexicalEditor, NodeKey } from 'lexical';
import DropdownContainer from '@/module/editorModule/components/dropdown/base/DropdownContainer';
import DropdownItem from '@/module/editorModule/components/dropdown/base/DropdownItem';
import {
  $isCodeNode,
  getLanguageFriendlyName,
} from '@lexical/code';
import { getCustomCodeLanguageOptions } from '@/module/editorModule/utils/codeUtils';

const cn = classNames.bind(styles);

const CodeLanguageDropdown = ({
  editor,
  codeLanguage,
  setCodeLanguage,
  disabled = false,
  nodeKey,
}: {
  editor: LexicalEditor;
  codeLanguage: string;
  setCodeLanguage: Dispatch<SetStateAction<string>>;
  disabled?: boolean;
  nodeKey: NodeKey | null;
}) => {

  const onCodeLanguageSelect = useCallback(
    (value: string) => {
      console.log(value)
      editor.update(() => {
        if (nodeKey !== null) {
          const node = $getNodeByKey(nodeKey);
          if ($isCodeNode(node)) {
            node.setLanguage(value);
          }
        }
      });
    },
    [editor, nodeKey],
  );

  const CODE_LANGUAGE_OPTIONS = getCustomCodeLanguageOptions();
  const buttonLabel = getLanguageFriendlyName(codeLanguage) === "" ? 'Select Language' : getLanguageFriendlyName(codeLanguage)

  const handleOnClick = useCallback((value: string) => {
    setCodeLanguage(value)
    onCodeLanguageSelect(value)
  }, [])

  return (
    <DropdownContainer
      disabled={disabled}
      buttonClassName="toolbar-item code-language"
      buttonLabel={buttonLabel}
      buttonAriaLabel="Select language"
      type={'codeLanguage'}
      icon={'number'}
    >
      {CODE_LANGUAGE_OPTIONS.map(([value, name]) => {
        return (
          <DropdownItem
            className={''}
            onClick={() => handleOnClick(value)}
            key={value}
          >
            <span className={cn('text')}>{name}</span>
          </DropdownItem>
        );
      })}
    </DropdownContainer>
  );
};

export default CodeLanguageDropdown;
