import { createSlice } from '@reduxjs/toolkit';
import { todoItems } from '../items/todoItems';

const initialState = {
  todoItems: todoItems,
  amount: todoItems.length,
  showCompleted: false,
};

const todoSlice = createSlice({
  name: 'todo',
  initialState,
  reducers: {
    calculateTotalTodos: (state) => {
      state.amount = state.todoItems.length;
    },
    clearTodos: (state) => {
      state.todoItems = [];
    },
  },
});

export const { calculateTotalTodos, clearTodos, showCompleted } = todoSlice.actions;
export default todoSlice.reducer;
