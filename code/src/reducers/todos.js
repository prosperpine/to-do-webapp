import { createSlice } from '@reduxjs/toolkit';

export const todos = createSlice({
  name: 'todos',
  initialState: {
    items: [
      {
        id: [],
        text: '',
        completed: false,
      },
    ],
  },
  reducers: {
    // adding a task to the list
    addTodo: (state, action) => {
      const { todoInfo } = action.payload;
      state.list.items.push(todoInfo);
    },
  },
});
