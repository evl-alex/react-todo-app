import React from 'react';
import AddTodo from '../containers/AddTodo'
import VisibleTodoList from "../containers/VisibleTodoList";
import ToggleTodoFilter from "../containers/ToggleTodoFilter";

const TodoApp = () => (
         <section className="todoapp">
               <header className="header">
                  <h1>todos</h1>
                  <AddTodo />
               </header>
               <section className="main">
                  <VisibleTodoList />
               </section>
               <ToggleTodoFilter />
         </section>
      );

export default TodoApp;