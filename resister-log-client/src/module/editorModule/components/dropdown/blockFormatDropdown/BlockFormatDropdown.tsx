import { $createCodeNode } from '@lexical/code';
import {
  INSERT_CHECK_LIST_COMMAND,
  INSERT_ORDERED_LIST_COMMAND,
  INSERT_UNORDERED_LIST_COMMAND,
} from '@lexical/list';
import {
  $createHeadingNode,
  $createQuoteNode,
  HeadingTagType,
} from '@lexical/rich-text';
import { $setBlocksType } from '@lexical/selection';
import {
  $createParagraphNode,
  $getSelection,
  $isRangeSelection,
  LexicalEditor,
} from 'lexical';
import React, { Dispatch, SetStateAction } from 'react';
import DropdownContainer from '@/module/editorModule/components/dropdown/base/DropdownContainer';
import DropdownItem from '@/module/editorModule/components/dropdown/base/DropdownItem';
import styles from '@/module/editorModule/components/dropdown/blockFormatDropdown/BlockFormatDropdown.module.scss';
import classNames from 'classnames/bind';
import {
  blockTypeToBlockName,
  rootTypeToRootName,
} from '@/module/editorModule/plugins/toolbarPlugin/ToolbarPlugin';
import BlockFormatIcon from '@/module/editorModule/components/icons/blockFormatIcons/BlockFormatIcon';

const cn = classNames.bind(styles);

const BlockFormatDropdown = ({
  editor,
  blockType,
  rootType,
  disabled = false,
  setBlockType,
  setRootType,
}: {
  blockType: keyof typeof blockTypeToBlockName;
  rootType: keyof typeof rootTypeToRootName;
  editor: LexicalEditor;
  disabled?: boolean;
  setBlockType: Dispatch<SetStateAction<keyof typeof blockTypeToBlockName>>;
  setRootType: Dispatch<SetStateAction<keyof typeof rootTypeToRootName>>;
}) => {
  const formatParagraph = () => {
    setBlockType('paragraph');
    editor.update(() => {
      const selection = $getSelection();
      if ($isRangeSelection(selection)) {
        $setBlocksType(selection, () => $createParagraphNode());
      }
    });
  };

  const formatHeading = (headingSize: HeadingTagType) => {
    setBlockType(headingSize);
    if (blockType !== headingSize) {
      editor.update(() => {
        const selection = $getSelection();
        $setBlocksType(selection, () => $createHeadingNode(headingSize));
      });
    }
  };

  const formatBulletList = () => {
    setBlockType('bullet');
    if (blockType !== 'bullet') {
      editor.dispatchCommand(INSERT_UNORDERED_LIST_COMMAND, undefined);
    } else {
      formatParagraph();
    }
  };

  const formatCheckList = () => {
    setBlockType('check');
    if (blockType !== 'check') {
      editor.dispatchCommand(INSERT_CHECK_LIST_COMMAND, undefined);
    } else {
      formatParagraph();
    }
  };

  const formatNumberedList = () => {
    setBlockType('number');
    if (blockType !== 'number') {
      editor.dispatchCommand(INSERT_ORDERED_LIST_COMMAND, undefined);
    } else {
      formatParagraph();
    }
  };

  const formatQuote = () => {
    setBlockType('quote');
    if (blockType !== 'quote') {
      editor.update(() => {
        const selection = $getSelection();
        $setBlocksType(selection, () => $createQuoteNode());
      });
    }
  };

  const formatCode = () => {
    setBlockType('code');
    if (blockType !== 'code') {
      editor.update(() => {
        let selection = $getSelection();

        if (selection !== null) {
          if (selection.isCollapsed()) {
            $setBlocksType(selection, () => $createCodeNode());
          } else {
            const textContent = selection.getTextContent();
            const codeNode = $createCodeNode();
            selection.insertNodes([codeNode]);
            selection = $getSelection();
            if ($isRangeSelection(selection)) {
              selection.insertRawText(textContent);
            }
          }
        }
      });
    }
  };

  function dropDownActiveClass(active: boolean) {
    if (active) {
      return 'active dropdown-item-active';
    } else {
      return '';
    }
  }

  return (
    <DropdownContainer
      disabled={disabled}
      buttonClassName="toolbar-item block-controls"
      buttonIconClassName={'icon block-type ' + blockType}
      buttonLabel={blockTypeToBlockName[blockType]}
      buttonAriaLabel="Formatting options for text style"
      type={'blockFormat'}
      icon={blockType}
    >
      <DropdownItem
        className={dropDownActiveClass(blockType === 'paragraph') && 'active'}
        onClick={formatParagraph}
      >
        <BlockFormatIcon name={'paragraph'} />
        <span className={cn('text')}>Normal</span>
      </DropdownItem>
      <DropdownItem
        className={dropDownActiveClass(blockType === 'h1') && 'active'}
        onClick={() => formatHeading('h1')}
      >
        <BlockFormatIcon name={'h1'} />
        <span className={cn('text')}>Heading 1</span>
      </DropdownItem>
      <DropdownItem
        className={dropDownActiveClass(blockType === 'h2') && 'active'}
        onClick={() => formatHeading('h2')}
      >
        <BlockFormatIcon name={'h2'} />
        <span className={cn('text')}>Heading 2</span>
      </DropdownItem>
      <DropdownItem
        className={dropDownActiveClass(blockType === 'h3') && 'active'}
        onClick={() => formatHeading('h3')}
      >
        <BlockFormatIcon name={'h3'} />
        <span className={cn('text')}>Heading 3</span>
      </DropdownItem>
      <DropdownItem
        className={dropDownActiveClass(blockType === 'h4') && 'active'}
        onClick={() => formatHeading('h3')}
      >
        <BlockFormatIcon name={'h4'} />
        <span className={cn('text')}>Heading 4</span>
      </DropdownItem>
      <DropdownItem
        className={dropDownActiveClass(blockType === 'h5') && 'active'}
        onClick={() => formatHeading('h3')}
      >
        <BlockFormatIcon name={'h5'} />
        <span className={cn('text')}>Heading 5</span>
      </DropdownItem>
      <DropdownItem
        className={dropDownActiveClass(blockType === 'h6') && 'active'}
        onClick={() => formatHeading('h3')}
      >
        <BlockFormatIcon name={'h6'} />
        <span className={cn('text')}>Heading 6</span>
      </DropdownItem>
      <DropdownItem
        className={dropDownActiveClass(blockType === 'bullet') && 'active'}
        onClick={formatBulletList}
      >
        <BlockFormatIcon name={'bullet'} />
        <span className={cn('text')}>Bullet List</span>
      </DropdownItem>
      <DropdownItem
        className={dropDownActiveClass(blockType === 'number') && 'active'}
        onClick={formatNumberedList}
      >
        <BlockFormatIcon name={'number'} />
        <span className={cn('text')}>Numbered List</span>
      </DropdownItem>
      <DropdownItem
        className={dropDownActiveClass(blockType === 'check') && 'active'}
        onClick={formatCheckList}
      >
        <BlockFormatIcon name={'check'} />
        <span className={cn('text')}>Check List</span>
      </DropdownItem>
      <DropdownItem
        className={dropDownActiveClass(blockType === 'quote') && 'active'}
        onClick={formatQuote}
      >
        <BlockFormatIcon name={'quote'} />
        <span className={cn('text')}>Quote</span>
      </DropdownItem>
      <DropdownItem
        className={dropDownActiveClass(blockType === 'code') && 'active'}
        onClick={formatCode}
      >
        <BlockFormatIcon name={'code'} />
        <span className={cn('text')}>Code Block</span>
      </DropdownItem>
    </DropdownContainer>
  );
};

export default BlockFormatDropdown;
