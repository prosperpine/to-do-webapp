import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { todos } from '../reducers/todos.js';
import '../index.css';
import { formatDate, parseDate } from 'react-day-picker/moment';
import DayPickerInput from 'react-day-picker/DayPickerInput';
import 'react-day-picker/lib/style.css';
import 'moment/locale/en-gb';

export const ToShopInput = ({ itemsId }) => {
  const dispatch = useDispatch();
  const [inputValue, setInputValue] = useState('');
  const [dueDate, setDueDate] = useState(new Date());

  // will send, dispatch, the info of new task to the store
  const handleOnSubmit = (event) => {
    event.preventDefault();
    dispatch(
      todos.actions.addTodo({
        itemsId: itemsId,
        todoInfo: {
          text: inputValue,
          shopping: true,
          duedate: selectedDay,
          shopped: false,
          completed: 'null',
        },
      })
    );
    // Reset value
    setInputValue('');
  };
  const selectedDay = dueDate.toLocaleDateString();

  return (
    <form className='form' onSubmit={handleOnSubmit}>
      <textarea
        required
        className='input'
        placeholder='Add things to buy!'
        type='text'
        onChange={(event) => setInputValue(event.target.value)}
        value={inputValue}
      ></textarea>
      <div className='daypicker'>
        <DayPickerInput
          placeholder='optional due date'
          selected={dueDate}
          onDayChange={setDueDate}
          formatDate={formatDate}
          parseDate={parseDate}
        />
      </div>

      <button type='submit' value='Add todo'>
        Add to shop
      </button>
    </form>
  );
};
