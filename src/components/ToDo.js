import { setCompleted } from '../features/todoSlice';
import { useDispatch } from 'react-redux';

const ToDo = ({ id, todo, completed }) => {
  const dispatch = useDispatch();

  const onClickHandler = () => {
    dispatch(setCompleted({ id, completed: !completed }));
  };

  return (
    <div
      className={`flex items-center justify-between todo h-[80px] ${
        completed ? 'bg-emerald-100' : 'bg-amber-100'
      } w-full px-5 shadow-sm rounded-md`}>
      <h4 className='italic text-lg'>{todo}</h4>
      <form className='h-full flex items-center'>
        <label className='mr-2 text-sm' htmlFor={id}>
          Completed?
        </label>

        {completed ? (
          <input
            className='scale-150 checked:bg-border-sky-300'
            type='checkbox'
            name={id}
            id={id}
            onClick={onClickHandler}
            defaultChecked
          />
        ) : (
          <input
            className='scale-150 checked:bg-border-sky-300'
            type='checkbox'
            name={id}
            id={id}
            onClick={onClickHandler}
          />
        )}
      </form>
    </div>
  );
};

export default ToDo;
