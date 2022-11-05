import { clearTodos } from '../features/todoSlice';
import { useDispatch } from 'react-redux';

const Header = () => {
  const dispatch = useDispatch();

  const clearHandler = () => {
    dispatch(clearTodos());
  };

  return (
    <header className='w-full h-[70px] bg-rose-300 flex items-center justify-between mb-5 p-2 md:px-10'>
      <h1 className='font-bold text-2xl'>Redux ToDo</h1>
      <a className='text-sky-800 italic hover:text-sky-200' href="https://github.com/chocolateflight" target="_blank" rel="noopener noreferrer">Visit my GitHub</a>
      <button
        className='border p-2 italic rounded-md shadow-md hover:bg-rose-200'
        onClick={clearHandler}>
        Clear Todos
      </button>
    </header>
  );
};

export default Header;
