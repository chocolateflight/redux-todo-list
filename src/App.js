import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Header from './components/Header.js';
import NewToDo from './components/NewToDo.js';
import ToDoList from './components/ToDoList.js';
import { calculateTotalTodos } from './features/todoSlice.js';

function App() {
  const { todoItems } = useSelector((state) => state.todo);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(calculateTotalTodos());
  }, [todoItems]);

  return (
    <div className='h-screen flex flex-col items-center '>
      <div className='max-w-[400px] w-full flex flex-col items-center'>
        <Header />
        <NewToDo />
        <ToDoList />
      </div>
    </div>
  );
}

export default App;
