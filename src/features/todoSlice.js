import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  todoItems: localStorage.getItem('todoList')
    ? JSON.parse(localStorage.getItem('todoList'))
    : [],
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
      localStorage.removeItem('todoList');
    },
    addTodo: (state, action) => {
      state.todoItems.push(action.payload);
      localStorage.setItem('todoList', JSON.stringify(state.todoItems));
    },
    setCompleted: (state, action) => {
      const { id, completed } = action.payload;
      const todo = state.todoItems.find((todo) => todo.id === id);
      if (todo) {
        todo.completed = completed;
      }
      localStorage.setItem('todoList', JSON.stringify(state.todoItems));
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
