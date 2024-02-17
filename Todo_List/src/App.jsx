import React, { useState, useEffect } from 'react';
import { CiEdit } from "react-icons/ci";
import { MdDelete } from "react-icons/md";
import Navbar from './components/Navbar';
import { v4 as uuidv4 } from 'uuid';

function App() {
  const [todo, setTodo] = useState('');
  const [todos, setTodos] = useState([]);
  const [showFinished, setshowFinished] = useState(true);

  useEffect(() => {
    let todoString = localStorage.getItem("todos")
    if (todoString) {
      let todos = JSON.parse(localStorage.getItem("todos"))
      setTodos(todos);
    }
  }, [])

  /*we dont want our data to be erased so we dont want our data
  to be erased*/
  const saveToLS = (params) => {
    localStorage.setItem("todos", JSON.stringify(todos))
  }
  const toggleFinished = () => {
    setshowFinished(!showFinished);
  }

  const handleEdit = (id) => {
    let t = todos.filter(i => i.id === id)
    setTodo(t[0].todo)
    // Placeholder for editing functionality
    console.log(`Editing todo with id: ${id}`);
    let newTodos = todos.filter(item => {
      return item.id!== id
    });
    setTodos(newTodos);
    saveToLS();
  }
  const handleDelete = (id) => {
    const newTodos = todos.filter((item) =>item.id!== id);
    setTodos(newTodos);
    saveToLS();
  }
  const handleAdd = () => {
    setTodos([...todos, { id: uuidv4(), todo, isCompleted: false }]);
    setTodo('');
    saveToLS();
  }

  const handleChange = (e) => {
    setTodo(e.target.value);
  }

  const handleCheckbox = (e) => {
    let id = e.target.name;
    let index = todos.findIndex((item) =>item.id === id)
    let newTodos = [...todos];
    newTodos[index].isCompleted = !newTodos[index].isCompleted;
    setTodos(newTodos);
    saveToLS();
  }

 



 

  return (
    <>
      <Navbar />
       <div className="font-sans mx-3 justify-center container md:mx-auto my-5 rounded-xl p-8 bg-blue-200 min-h-[80vh] md:w-1/2 "> {/*md:1/2 responsive */}
        <h1 className="font-bold text-lg text-center text-blue-600">Manage your tasks and Reminders at one place</h1>
        {/* <h2 className="font-bold text-lg">Home</h2> */}
        <div className="AddTodo">
          <h1 className="text-md">New Todo</h1>
          <input onChange={handleChange} value={todo} type="text" className="w-full rounded-full py-1 px-5" />
          <button onClick={handleAdd} className="bg-blue-600 hover:bg-blue-800 text-white rounded-full my-2 p-2 py-1 w-full">Save</button>
          { /*it can be saved only if character lenght is =3 only then it can be saved */}
        </div>
        <input className='my-4' onChange={toggleFinished} type="checkbox" checked={showFinished} /> Show Finished
        <div className="h-[1px] bg-black opacity-15 w-[90%] mx-auto my-2"></div> 
        {/* <input type="checkbox" checked ={showFinished} /> <h1>Show Finished</h1>   */}
        <h2 className="text-lg font-bold">Your Todos</h2>
        <div className="Todos">
          {todos.map((item) => {
            return (showFinished || !item.isCompleted) && <div key={item.id} className="todo flex md: w-1/2 my-3 justify-between">
              <input name={item.id} onChange={handleCheckbox} type="checkbox" checked={item.isCompleted} />
              <div className={item.isCompleted ? 'line-through' : ''}>{item.todo}</div>
              <div className="buttons flex h-full">
                <button onClick={() => handleEdit(item.id)} className="bg-blue-600 hover:bg-blue-800 p-3 py-1 text-white rounded-md mx-2"><CiEdit />
                </button>
                <button onClick={() => {handleDelete(item.id)}} className="bg-blue-600 hover:bg-blue-800 p-3 py-1 text-white rounded-md mx-2"><MdDelete />
                </button>
              </div>
            </div>
            // </div>
          })}

        </div>
      </div>
    </>
  );
}

export default App;
