import { connect } from 'react-redux';
import { setVisibilityFilter } from '../actions';
import Footer from '../components/Footer';
import { filterTodos } from "../helpers";

const mapStateToProps = state => {
   const { todos, visibility } = state;
   return {
      visibility,
      todosCount: filterTodos(todos, visibility).length
   }
};

const mapDispatchToProps = {
   onFilterClick: setVisibilityFilter
};

const ToggleTodoFilter = connect(
   mapStateToProps,
   mapDispatchToProps
)(Footer);

export default ToggleTodoFilter;
