import React from 'react';
import { Input, Label, Span } from './Filter.styled';
import { nanoid } from 'nanoid';
// import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { setFilter } from 'redux/filterSlice';
import { selectContactsFilter } from 'redux/selectors';

export const Filter = () => {
  const filterValue = useSelector(selectContactsFilter);

  const dispatch = useDispatch();

  const onChangeFilter = event => {
    dispatch(setFilter(event.currentTarget.value));
  };

  return (
    <Label>
      <Span>Filter</Span>

      <Input
        onChange={onChangeFilter}
        value={filterValue}
        type="text"
        id={nanoid(5)}
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        required
      />
    </Label>
  );
};

// Filter.propTypes = {
//   value: PropTypes.string,
//   onChangeFilter: PropTypes.func.isRequired,
// };
