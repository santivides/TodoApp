import React from 'react';
import { TodoCounter } from './TodoCounter';
import { TodoSearch } from './TodoSearch';
import { TodoList } from './TodoList';
import { TodoItem } from './TodoItem';
import { CreateTodoButton } from './CreateTodoButton';
import './App.css'

const defaultTodos = [
  { text: 'Cortar cebolla', completed: true },
  { text: 'Tomar el Curso de Intro a React.js', completed: false },
  { text: 'Llorar con la Llorona', completed: false },
  { text: 'LALALALALA', completed: false },
];


function App() {
  return (
    <>
      <div className="todo-app-container">
      <TodoCounter completed={1} total={10} />
      <TodoSearch />

      <div className="todo-list-container">
        <TodoList>
          {defaultTodos.map((tareas) => (
            <TodoItem text={tareas.text} key={tareas.text} completed={tareas.completed} />
          ))}
        </TodoList>
      </div>

      <CreateTodoButton />
    </div>
    </>
  );
}

export default App;
