import { Input } from 'antd';
import { CloseSquare, SearchNormal1 } from 'iconsax-reactjs';
import { useState } from 'react';

const SearchInput = () => {
  const [search, setSearch] = useState('');

  const clearSearch = () => {
    setSearch('');
  };
  return (
    <Input
      name="search"
      type="search"
      size="large"
      variant="outlined"
      placeholder="Search"
      value={search}
      onChange={(e) => setSearch(e.target.value)}
      prefix={<SearchNormal1 />}
      suffix={
        <CloseSquare
          variant="Bulk"
          className={`cursor-pointer ${search ? 'visible' : 'invisible'}`}
          onClick={clearSearch}
        />
      }
      style={{
        backgroundColor: 'var(--c-secondary)',
      }}
      styles={{
        input: {
          paddingInlineStart: '0.5rem',
        },
      }}
    />
  );
};

export default SearchInput;
