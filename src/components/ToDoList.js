import { useSelector } from 'react-redux';
import ToDo from './ToDo';

const ToDoList = () => {
  const { todoItems, amount, showCompleted } = useSelector((store) => store.todo);

  return (
    <section className='w-full px-2 md:px-10'>
      <div className='title flex justify-between items-center'>
        <h2 className='font-bold text-xl'>ToDo List</h2>
        <form className='flex'>
          <label className='text-sm mr-2' htmlFor='completed'>
            Show completed tasks
          </label>
          <input className='' type='checkbox' name='completed' id='completed' />
        </form>
      </div>
      <div className='space-y-3 mt-3'>
        {todoItems.map((todo) => {
          return <ToDo key={todo.id} {...todo} />;
        })}
      </div>
    </section>
  );
};

export default ToDoList;
