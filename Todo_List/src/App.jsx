import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import { v4 as uuidv4 } from 'uuid';

function App() {
  const [todo, setTodo] = useState('');
  const [todos, setTodos] = useState([]);
  const [showFinished, setshowFinished] = useState(true);
  useEffect(() => {
    let todoString = localStorage.getItem("todos")
    if (todoString) {
      let todoss = JSON.parse(localStorage.getItem("todos"))
      setTodos(todos)
    }
  }, [])

  /*we dont want our data to be erased so we dont want our data
  to be erased*/
  const saveToLS = (params) => {
    localStorage.setItem("todos", JSON.stringify(todos))
  }

  const handleAdd = () => {
    setTodos([...todos, { id: uuidv4(), todo, isCompleted: false }]);
    setTodo('');
  };

  const handleChange = (e) => {
    setTodo(e.target.value);
  };

  const handleCheckbox = (e) => {
    const id = e.target.name;
    const index = todos.findIndex((item) => item.id === id);
    const newTodos = [...todos];
    newTodos[index].isCompleted = !newTodos[index].isCompleted;
    setTodos(newTodos);
    saveToLS()
  };

  const handleDelete = (id) => {
    let newTodos = todos.filter((item) => item.id !== id);
    setTodos(newTodos);
  };

  const handleEdit = (id) => {
    let t = todos.filter(i => i.id === id)
    setTodo(t[0].todo)
    // Placeholder for editing functionality
    console.log(`Editing todo with id: ${id}`);
    let newTodos = todos.filter(item => {
      return item.id !== id
    });
    setTodos(newTodos)
    saveToLS()
  };

  const toggleFinished = (e) => {
    setshowFinished(!showFinished)
  }

  return (
    <>
      <Navbar />
      <div className="container mx-auto my-5 rounded-xl p-5 bg-blue-200 min-h-[80vh]">
        <div className="AddTodo">
          <h1 className="font-bold text-lg">New Todo</h1>
          <input onChange={handleChange} value={todo} type="text" className="w-1/2" />
          <button onClick={handleAdd} className="bg-blue-600 hover:bg-blue-800 p-3 py-1 text-white rounded-md mx-6">Save</button>
          { /*it can be saved only if character lenght is =3 only then it can be saved */}
        </div>
        <input onChange={toggleFinished} type="checkbox" checked={showFinished}/> Show Finished
        {/* <input type="checkbox" checked ={showFinished} /> <h1>Show Finished</h1>   */}
        <h2 className="text-lg font-bold">Your Todos</h2>
        <div className="Todos">
          {todos.map((item) => {
            return(showFinished ||!item.isCompleted) && <div key={item.id} className="todo flex w-100 my-3 justify-between">
              <input name={item.id} onChange={handleCheckbox} type="checkbox" checked={item.isCompleted} /> 
              <div className={item.isCompleted ? 'line-through' : ''}>{item.todo}</div>
              <div className="buttons flex h-full">
                <button onClick={() => handleEdit(item.id)} className="bg-blue-600 hover:bg-blue-800 p-3 py-1 text-white rounded-md mx-2">
                  Edit
                </button>
                <button onClick={() => handleDelete(item.id)} className="bg-blue-600 hover:bg-blue-800 p-3 py-1 text-white rounded-md mx-2">
                  Delete
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
