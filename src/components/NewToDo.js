const NewToDo = () => {
  return (
    <form className='flex flex-col justify-center items-start gap-y-2 w-full px-2 mb-5 border-b-4 border-sky-300 pb-5 border-dotted'>
      <input
        className='w-full border-2 border-sky-300 p-1 rounded-md h-[50px]'
        type='text'
        id='todo'
        name='todo'
        placeholder='Enter todo'
      />
      <button className='rounded-md p-1 bg-sky-300 w-full' type='submit'>
        Add Todo
      </button>
    </form>
  );
};

export default NewToDo;
