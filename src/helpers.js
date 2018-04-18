import { VisibilityFilters } from './actions';

const { SHOW_ALL, SHOW_ACTIVE, SHOW_COMPLETED } = VisibilityFilters;


// todo [ ] сделал бы где-то Map с правилами фильтрации - было бы красивее, чем switch-case. А еще посмотри на reselect библиотеку
export function filterTodos (todos, filter) {
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
}