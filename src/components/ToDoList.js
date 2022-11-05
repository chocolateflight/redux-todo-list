import { useSelector, useDispatch } from 'react-redux';
import { updateShowCompleted } from '../features/todoSlice';
import ToDo from './ToDo';

const ToDoList = () => {
  const { todoItems, showCompleted } = useSelector((store) => store.todo);
  const dispatch = useDispatch();

  const showCompleteHandler = (e) => {
    dispatch(updateShowCompleted(e.target.checked));
  };

  return (
    <section className='w-full px-2 pb-2 md:px-10'>
      <div className='title flex justify-between items-center'>
        <h2 className='font-bold text-xl'>ToDo List</h2>
        <form className='flex'>
          <label className='text-sm mr-2' htmlFor='completed'>
            Show completed tasks
          </label>
          <input
            className=''
            type='checkbox'
            name='completed'
            id='completed'
            onClick={showCompleteHandler}
          />
        </form>
      </div>
      <div className='space-y-3 mt-3'>
        {showCompleted
          ? todoItems
              .filter((item) => item.completed)
              .map((item) => <ToDo key={item.id} {...item} />)
          : todoItems
              .filter((item) => !item.completed)
              .map((item) => <ToDo key={item.id} {...item} />)}
      </div>
    </section>
  );
};

export default ToDoList;
