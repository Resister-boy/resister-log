import React, { useMemo, useRef, useState } from 'react';
import styles from '@/widget/dropdown/createPostDropdown/CreatePostDropdown.module.scss';
import classNames from 'classnames/bind';
import { HiPlusSmall } from 'react-icons/hi2';
import { usePathname, useRouter } from 'next/navigation';
import useOnClickOutside from '@/hooks/useOnClick';
import { useDispatch, useSelector } from 'react-redux';
import { getEditorType, SET_TYPE } from '@/state/slice/createPostSlice';

const cn = classNames.bind(styles);

const CreatePostDropdown = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const pathname = usePathname();
  const editorType = useSelector(getEditorType);
  const bodyRef = useRef<HTMLDivElement | null>(null);
  const [openOption, setOpenOption] = useState<boolean>(false);

  useOnClickOutside({
    ref: bodyRef,
    handler: () => setOpenOption(false),
    mouseEvent: 'click',
  });

  const headerText = useMemo(() => {
    if (pathname === '/create' && typeof editorType === 'string') {
      return { icon: false, text: editorType };
    } else return { icon: true, text: '새 포스트' };
  }, [pathname, editorType]);

  return (
    <div className={cn('container')} ref={bodyRef}>
      <button
        className={cn('create-header')}
        onClick={() => {
          setOpenOption(!openOption);
        }}
      >
        {headerText.icon && <HiPlusSmall size={22} />}
        <span className={cn('header-title')}>{headerText.text}</span>
      </button>
      <div
        className={cn(
          'create-list',
          openOption ? 'create-list-show' : 'create-list-hide',
        )}
      >
        <div className={cn('create-list-inner')}>
          <button
            className={cn('list-item')}
            onClick={() => {
              dispatch(SET_TYPE({ type: 'Markdown' }));
              router.push('/create?type=md');
              setOpenOption(false);
            }}
          >
            Markdown
          </button>
          <button
            className={cn('list-item')}
            onClick={() => {
              dispatch(SET_TYPE({ type: 'Editor' }));
              router.push('/create?type=ed');
              setOpenOption(false);
            }}
          >
            Editor
          </button>
        </div>
      </div>
    </div>
  );
};

export default CreatePostDropdown;
