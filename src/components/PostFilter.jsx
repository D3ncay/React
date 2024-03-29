import React from 'react';
import MyInput from './UI/input/MyInput';
import MySelect from './UI/select/MySelect';

const options = [
    { value: "title", name: "По названию" },
    { value: "body", name: "По описанию" },
  ];

const PostFilter = ({filter, setFilter}) => {


    return (
        <div>
        <MyInput
          value={filter.searchQuery}
          onChange={(e) => setFilter({...filter, query: e.target.value})}
          type="text"
          placeholder="Поиск"
        />
        <MySelect
          value={filter.sort}
          onChange={selectedSort => setFilter({...filter, sort: selectedSort})}
          options={options}
          defaultValue="Сортировка"
        />
      </div>
    );
}

export default PostFilter;
