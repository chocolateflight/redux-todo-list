# Aeropress Timer

Hello, and welcome to this Redux Training Project in form of a very simple Todo List! The goal of this project was to gain initial experience with Redux and Local Storage. The design is kept very plain and simple, without much thought to the colours. Nevertheless, it is responsive and interactive. The reason for this is that this project should focus entirely on Redux and Local Storage.


## Table of contents

- [Access the App](#access-the-app)
- [Overview](#overview)
  - [App Description](#app-description)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
- [Author](#author)

## Access the App
This app has been deployed on Netlify: [Redux ToDo](https://chocolateflight-redux-todo.netlify.app/)

## Overview

### App Description
This is a very simple ToDo app. The app has the following functions: ToDos can be added via a free text input. ToDos can be completed by means of a checkbox. Completed to-dos can be displayed with a separate checkbox. All to-dos can be deleted by pressing a single button. If you open the app, it checks whether there is already data in the local storage. If this is the case, the data is transferred and the previously saved to-dos are displayed. If there is no data in the local storage yet, an empty array is created and a new local storage is created as soon as a new todo is created. 

### Links

- Solution URL: [GitHub Repository](https://github.com/chocolateflight/redux-todo-list)
- Live Site URL: [Netlify](https://chocolateflight-redux-todo.netlify.app/)

## My process

### Built with

- [ReactJS](https://reactjs.org/) - React framework
- [Redux](https://redux.js.org/) - A State Container for JS apps
- [Tailwind CSS](https://tailwindcss.com/)
- HTML 5
- VS Code
- Mobile-first workflow

### What I learned

I learned how to use the Redux Store and how to store, retrieve and remove data from the Local Storage. I also learned more about Array Methods, like filter and map.

todoSlice with Local Storage Functionality

```js
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
```

Filtering Completed ToDos in ToDoList.js

```js
<div className='space-y-3 mt-3'>
  {showCompleted
    ? todoItems
        .filter((item) => item.completed)
        .map((item) => <ToDo key={item.id} {...item} />)
    : todoItems
        .filter((item) => !item.completed)
        .map((item) => <ToDo key={item.id} {...item} />)}
</div>
```


## Author

- GitHub - [@chocolateflight](https://github.com/chocolateflight)

---------

[![Netlify Status](https://api.netlify.com/api/v1/badges/17dcb4f8-0672-4d2f-84ee-43390fed3ce9/deploy-status)](https://app.netlify.com/sites/chocolateflight-redux-todo/deploys)