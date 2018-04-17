import { connect } from 'react-redux';
import { setVisibilityFilter, VisibilityFilters } from '../actions';
import Footer from '../components/Footer';

const  { SHOW_ALL, SHOW_ACTIVE, SHOW_COMPLETED } = VisibilityFilters;

const mapStateToProps = state => {
   const getTodosNumber = () => {
      switch (state.visibility) {
         case SHOW_ALL:
            return state.todos.length;
         case SHOW_COMPLETED:
            return state.todos.filter(t => t.completed).length;
         case SHOW_ACTIVE:
            return state.todos.filter(t => !t.completed).length;
         default:
            return state.todos.length;
      }
   };

   return {
      visibility: state.visibility,
      todosCount: getTodosNumber()
   }
};

const mapDispatchToProps = dispatch => {
   return {
      onFilterClick: filter => dispatch(setVisibilityFilter(filter))
   }
};

const ToggleTodoFilter = connect(
   mapStateToProps,
   mapDispatchToProps
)(Footer);

export default ToggleTodoFilter;