import React, { useRef, useState } from 'react';
import styles from '@/widget/dropdown/createPostDropdown/CreatePostDropdown.module.scss';
import classNames from 'classnames/bind';
import { CiSquarePlus } from 'react-icons/ci';
import { useRouter } from 'next/navigation';
import useOnClickOutside from '@/hooks/useOnClick';
import { useDispatch } from 'react-redux';
import { OPEN_MODAL } from '@/state/slice/modalSlice';

const cn = classNames.bind(styles);

const CreatePostDropdown = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const bodyRef = useRef<HTMLDivElement | null>(null);
  const [openOption, setOpenOption] = useState<boolean>(false);

  useOnClickOutside({
    ref: bodyRef,
    handler: () => setOpenOption(false),
    mouseEvent: 'click',
  });

  return (
    <div className={cn('container')} ref={bodyRef}>
      <button
        className={cn('create-header')}
        onClick={() => {
          setOpenOption(!openOption);
        }}
      >
        <CiSquarePlus size={36} />
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
              dispatch(
                OPEN_MODAL({
                  name: 'CreateLogModal',
                  data: 'Hi',
                }),
              );
              setOpenOption(false);
            }}
          >
            Short Log
          </button>
          <button
            className={cn('list-item')}
            onClick={() => {
              router.push('/create');
              setOpenOption(false);
            }}
          >
            Long Post
          </button>
          <button
            className={cn('list-item')}
            onClick={() => {
              router.push('/forum?type=create-discussion');
              setOpenOption(false);
            }}
          >
            New Discussion
          </button>
        </div>
      </div>
    </div>
  );
};

export default CreatePostDropdown;
