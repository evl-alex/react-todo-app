import { connect } from 'react-redux';
import { toggleTodo, removeTodo } from '../actions';
import TodoList from '../components/TodoList';
import { filterTodos } from "../helpers";

const mapStateToProps = state => {
   const { todos, visibility } = state;
   return {
      todos: filterTodos(todos, visibility)
   }
};

const mapDispatchToProps = {
   onTodoClick: toggleTodo,
   onRemove: removeTodo
};

const VisibleTodoList = connect(
   mapStateToProps,
   mapDispatchToProps
)(TodoList);

export default VisibleTodoList;