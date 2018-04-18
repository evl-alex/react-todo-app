import { connect } from 'react-redux';
import { setVisibilityFilter } from '../actions';
import Footer from '../components/Footer';
import { getVisibleTodos } from "../selectors/visibleTodosSelector";

const mapStateToProps = state => {
   return {
      visibility: state.visibility,
      todosCount: getVisibleTodos(state).length
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
