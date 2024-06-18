import React, { ChangeEvent } from 'react';
import styles from '@/components/input/searchInput/SearchInput.module.scss';
import classNames from 'classnames/bind';
import { SEARCH } from '@/constants/strings';
import { IoSearchOutline } from 'react-icons/io5';
import { COLOR } from '@/styles/COLOR';

const cn = classNames.bind(styles);

type Props = {
  value: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  recommend: boolean;
  placeholder?: string;
};

const SearchInput = ({
  value,
  onChange,
  recommend,
  placeholder = SEARCH.PLACEHOLDER,
}: Props) => {
  return (
    <div className={cn('container')}>
      <div className={cn('icon')}>
        <IoSearchOutline size={24} color={COLOR.LIGHT_GREY_1} />
      </div>
      <input
        type="text"
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className={cn('input')}
      />
      {recommend && <div></div>}
    </div>
  );
};

export default SearchInput;
