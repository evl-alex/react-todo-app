import { connect } from 'react-redux';
import { toggleTodo, removeTodo, VisibilityFilters } from '../actions';
import TodoList from '../components/TodoList';

const  { SHOW_ALL, SHOW_ACTIVE, SHOW_COMPLETED } = VisibilityFilters;

const getVisibleTodos = (todos, filter) => {
   switch (filter) {
      case SHOW_ALL:
         return todos;
      case SHOW_COMPLETED:
         return todos.filter(t => t.completed);
      case SHOW_ACTIVE:
         return todos.filter(t => !t.completed);
      default:
         return todos;
   }
};

const mapStateToProps = state => {
   return {
      todos: getVisibleTodos(state.todos, state.visibility)
   }
};

const mapDispatchToProps = dispatch => {
   return {
      onTodoClick: id => dispatch(toggleTodo(id)),
      onRemove: id => dispatch(removeTodo(id))
   }
};

const VisibleTodoList = connect(
   mapStateToProps,
   mapDispatchToProps
)(TodoList);

export default VisibleTodoList;