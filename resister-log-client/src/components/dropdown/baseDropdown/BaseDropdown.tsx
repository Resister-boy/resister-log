import useOnClickOutside from '@/hooks/useOnClick';
import styles from '@/components/dropdown/baseDropdown/BaseDropdown.module.scss';
import classNames from 'classnames/bind';
import {
  CategoryType,
  IsPublicType,
  LanguageType,
} from '@/interface/data/post';
import { DropdownType } from '@/interface/ui/dropdown';
import React, { useCallback, useMemo, useRef, useState } from 'react';
import { MdOutlineCategory } from 'react-icons/md';
import { FaCode } from 'react-icons/fa6';
import { IoEarthSharp } from 'react-icons/io5';
import { IoPricetagOutline } from 'react-icons/io5';
import DropDownIcon from '@/components/icon/dropdownIcon/DropDownIcon';

const cn = classNames.bind(styles);

type Props = {
  type: DropdownType;
  list: CategoryType[] | LanguageType[] | IsPublicType[];
  value: CategoryType | LanguageType | IsPublicType | null;
  setValue: (event: CategoryType | LanguageType | IsPublicType | null) => void;
};

const BaseDropdown = ({ type, list, value, setValue }: Props) => {
  const [openOption, setOpenOption] = useState<boolean>(false);
  const bodyRef = useRef<HTMLDivElement | null>(null);

  useOnClickOutside({
    ref: bodyRef,
    handler: () => setOpenOption(false),
    mouseEvent: 'click',
  });

  const getHeaderIcon = useCallback(() => {
    switch (type) {
      case 'category': {
        return (
          <>
            <MdOutlineCategory size={16} className={cn('icon')} />
            <span className={cn('button-text')}>카테고리</span>
          </>
        );
      }
      case 'language': {
        return (
          <>
            <FaCode size={16} className={cn('icon')} />
            <span className={cn('button-text')}>언어</span>
          </>
        );
      }
      case 'public': {
        return (
          <>
            <IoEarthSharp size={16} className={cn('icon')} />
            <span className={cn('button-text')}>전체공개</span>
          </>
        );
      }
      case 'keyword': {
        return (
          <>
            <IoPricetagOutline size={16} className={cn('icon')} />
            <span className={cn('button-text')}>키워드</span>
          </>
        );
      }
      default:
        return null;
    }
  }, [type]);

  const showHash = useMemo(() => {
    return type !== 'language' && type !== 'public' ? true : false;
  }, [type]);

  return (
    <div className={cn('container')} ref={bodyRef}>
      <button
        className={cn('header-button')}
        onClick={() => setOpenOption(!openOption)}
      >
        {getHeaderIcon()}
      </button>
      <div
        className={cn(
          'list-container',
          openOption ? 'list-container-show' : 'list-container-hide',
        )}
      >
        <div className={cn('list-inner')}>
          {list?.map(
            (item: CategoryType | LanguageType | IsPublicType, idx: number) => {
              return (
                <button
                  key={idx}
                  onClick={() => setValue(item)}
                  className={cn('list-item')}
                >
                  {type === 'language' && <DropDownIcon title={item.title} />}
                  <span className={cn('item-text')}>
                    {showHash && '#  '}
                    {item.title}
                  </span>
                </button>
              );
            },
          )}
        </div>
      </div>
    </div>
  );
};

export default BaseDropdown;
