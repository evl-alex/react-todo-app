import React from 'react';
import PropTypes from 'prop-types';
import TodoItem from'./TodoItem'

function TodoList({ todos, onTodoClick, onRemove }) {
   const listItems = todos.map((todo) =>
      <TodoItem
          key={todo.id}
          text={todo.text}
          completed={todo.completed}
          onClick={() => onTodoClick(todo.id)}
          onRemoveClick={() => onRemove(todo.id)}
      />
   );

   return (
      <ul className="todo-list">
         {listItems}
      </ul>
   );
}

TodoList.propTypes = {
   todos: PropTypes.array.isRequired,
   onTodoClick: PropTypes.func.isRequired,
   onRemove: PropTypes.func.isRequired
};

export default TodoList;