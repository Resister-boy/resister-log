import React, { ChangeEvent, useCallback, useState } from 'react';
import styles from '@/widget/searchBoard/SearchBoard.module.scss';
import classNames from 'classnames/bind';
import SearchInput from '@/components/input/searchInput/SearchInput';
import { SEARCH } from '@/constants/strings';

const cn = classNames.bind(styles);

const SearchBoard = () => {
  const [search, setSearch] = useState<string>('');

  const handleSearch = useCallback((event: ChangeEvent<HTMLInputElement>) => {
    setSearch(event.target.value);
  }, []);

  return (
    <div className={cn('container')}>
      <div className={cn('search-container')}>
        <SearchInput
          value={search}
          onChange={handleSearch}
          recommend
          placeholder={SEARCH.PLACEHOLDER}
        />
      </div>
    </div>
  );
};

export default SearchBoard;
