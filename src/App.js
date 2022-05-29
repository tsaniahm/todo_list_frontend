import './App.css';
import React, { useEffect, useState } from 'react';

import TodoForm from './components/todo_form';
import TodoCard from './components/todo_card';

import { getTodoList } from './services/getApi';

function App() {
  const [todoList, setTodoList] = useState([])

  useEffect(() => {
    const getData = async () => {
      const data = await getTodoList();
      setTodoList(data.data.data)
    }
    getData()
  }, [])

  return (
    <React.Fragment>
      <div className='Container px-5 py-4 bg-light' >
        <h1 className='text-center'>todo list</h1>
        <TodoForm />
        {todoList.length > 0 && todoList.map((element, i) => {
          return (
            <TodoCard
              name_todo={element.name_todo}
              desc_todo={element.desc_todo}
              id={element.id}
              key={element.id}
            />
          )
        })}
      </div>
    </React.Fragment>
  );
}

export default App;
