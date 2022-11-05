import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  todoItems: [],
  amount: 0,
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
    },
    setCompleted: (state, action) => {
      const { id, completed } = action.payload;
      const todo = state.todoItems.find((todo) => todo.id === id);
      if (todo) {
        todo.completed = completed;
      }
    },
    updateShowCompleted: (state, action) => {
      state.showCompleted = action.payload;
    },
  },
});

export const {
  calculateTotalTodos,
  clearTodos,
  addTodo,
  setCompleted,
  updateShowCompleted,
} = todoSlice.actions;
export default todoSlice.reducer;
