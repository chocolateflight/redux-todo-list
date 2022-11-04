import Header from "./components/Header.js"
import NewToDo from "./components/NewToDo.js"
import ToDoList from "./components/ToDoList.js"


function App() {
  return (
    <div className='App'>
      <div className='flex flex-col items-center h-screen'>
        <Header />
        <NewToDo />
        <ToDoList />
      </div>
    </div>
  );
}

export default App;
