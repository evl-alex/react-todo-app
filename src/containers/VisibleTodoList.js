import { connect } from 'react-redux';
import { toggleTodo, removeTodo } from '../actions';
import TodoList from '../components/TodoList';
import { getVisibleTodos } from "../selectors/visibleTodosSelector";

const mapStateToProps = state => {
   return {
      todos: getVisibleTodos(state)
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