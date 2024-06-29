import { useCallback } from 'react';
import styles from '@/module/editorModule/components/icons/blockFormatIcons/BlockFormatIcon.module.scss';
import classNames from 'classnames/bind';
import { blockTypeToBlockName } from '@/module/editorModule/plugins/toolbarPlugin/ToolbarPlugin';
import ParagraphIcon from '@/assets/icons/text-paragraph.svg';
import H1Icon from '@/assets/icons/type-h1.svg';
import H2Icon from '@/assets/icons/type-h2.svg';
import H3Icon from '@/assets/icons/type-h3.svg';
import H4Icon from '@/assets/icons/type-h4.svg';
import H5Icon from '@/assets/icons/type-h5.svg';
import H6Icon from '@/assets/icons/type-h6.svg';
import BulletIcon from '@/assets/icons/list-ul.svg';
import CheckIcon from '@/assets/icons/square-check.svg';
import NumberIcon from '@/assets/icons/list-ol.svg';
import QuoteIcon from '@/assets/icons/chat-square-quote.svg';
import CodeIcon from '@/assets/icons/code.svg';

type Props = {
  name: keyof typeof blockTypeToBlockName;
  className?: string;
};

const cn = classNames.bind(styles);

const BlockFormatIcon = ({ name, className = '' }: Props) => {
  const renderIcon = useCallback(() => {
    switch (name) {
      case 'paragraph': {
        return <ParagraphIcon />;
      }
      case 'h1': {
        return <H1Icon />;
      }
      case 'h2': {
        return <H2Icon />;
      }
      case 'h3': {
        return <H3Icon />;
      }
      case 'h4': {
        return <H4Icon />;
      }
      case 'h5': {
        return <H5Icon />;
      }
      case 'h6': {
        return <H6Icon />;
      }
      case 'bullet': {
        return <BulletIcon />;
      }
      case 'number': {
        return <NumberIcon />;
      }
      case 'check': {
        return <CheckIcon />;
      }
      case 'quote': {
        return <QuoteIcon />;
      }
      case 'code': {
        return <CodeIcon />;
      }
    }
  }, [name]);

  return renderIcon();
};

export default BlockFormatIcon;
