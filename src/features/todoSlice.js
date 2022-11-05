import { createSlice } from '@reduxjs/toolkit';
import { todoItems } from '../items/todoItems';

const initialState = {
  todoItems: [],
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
    addTodo: (state, action) => {
      state.todoItems.push(action.payload);
    }
  },
});

export const { calculateTotalTodos, clearTodos, showCompleted, addTodo } = todoSlice.actions;
export default todoSlice.reducer;
