import { createSelector } from 'reselect';
import { VisibilityFilters } from '../actions';

const { SHOW_ALL, SHOW_ACTIVE, SHOW_COMPLETED } = VisibilityFilters;

const getVisibilityFilter = (state) => state.visibility;
const getTodos = (state) => state.todos;

export const getVisibleTodos = createSelector(
   [getVisibilityFilter, getTodos],
   (visibility, todos) => {
      switch (visibility) {
         case SHOW_ALL:
            return todos;
         case SHOW_COMPLETED:
            return todos.filter(t => t.completed);
         case SHOW_ACTIVE:
            return todos.filter(t => !t.completed);
         default:
            return todos;
      }
   }
);