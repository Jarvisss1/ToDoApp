import React, { useState } from "react";
import './index.css';
import Tasks from './tasks'
//import Todo from './Todo'

const App = (props) => {

  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([]);
  const [editId, setEditId] = useState(0);


  const handleSubmit = (e) =>{
    e.preventDefault();

    if(editId){
      const editTodo = todos.find((i)=>i.id===editId);
      const updatedTodo = todos.map((t)=>
        t.id ===editTodo.id?(t ={id : t.id,todo:todo}) : {id: t.id,todo : t.todo}
      );
      setTodos(updatedTodo);
      setEditId(0);
      setTodo("");
      return;
    }

    if(todo!==""){
      setTodos([{ id: `${todo}-${Date.now()}`, todo }, ...todos]);
      setTodo("");
    }
  };

  const handleDelete = (id) => {
    const delTodo = todos.filter((to) => to.id !== id);
    setTodos([...delTodo]);
  };

  const handleEdit = (id) => {
    const editTodos=todos.find((i)=>i.id===id);
    setTodo(editTodos.todo);
    setEditId(id);
  };


  return (
    <div className="App">
      <div className="todoapp-stack-large">
        <h1>ToDoMatic</h1>
        <form onSubmit ={handleSubmit}>
          <div className="msg">
          <h2 className="label-wrapper">
            <label htmlFor="new-todo-input" className="label__lg">
              What needs to be done?
            </label>
          </h2>
          </div>
          <div className="todoForm">
            <input
              type="text"
              id="new-todo-input"
              className="input input__lg"
              name="text"
              autoComplete="off"
              value ={todo}
              onChange={(e)=> setTodo(e.target.value)}
            />
            <button type="submit" className="btn-btn__primary-btn__lg">
              {editId? "Edit" : "Add"}
            </button>
          </div>
        </form>
        {/* <div className="filters-btn-group-stack-exception">
          <Tasks name="All" />
          <Tasks name="active" />
          <Tasks name="completed" />
        </div> */}
        
          <ul className="todo-list-stack-large-stack-exception"
            aria-labelledby="list-heading">
              {
                todos.map((t)=>(
                  <li className="todo-stack-small" >
                    <div className="c-cb">
                      
                      <label className="todo-label" htmlFor={t.id} key = {t.id}>
                        {t.todo}
                        
                      </label>
                      <button type="button" className="btn-toggle-btn" aria-pressed="true" onClick={()=> handleEdit(t.id)} >
                        <span>Edit
                        </span>
                      </button>
                      
                      <button type="button" className="btn-toggle-btn" aria-pressed="true" onClick={() => handleDelete(t.id)}>
                        <span>Delete
                        </span>
                      </button>
                    </div>
                  </li>
                ))
              }
            
          </ul>
        
      </div>
    </div>
  );
}

export default App;
