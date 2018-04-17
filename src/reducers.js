import {
   ADD_TODO,
   TOGGLE_TODO,
   REMOVE_TODO,
   SET_VISIBILITY_FILTER,
   VisibilityFilters
} from './actions';

const initialState = {
  visibility: VisibilityFilters.SHOW_ALL,
  todos: [
     {
        id: 0,
        text: 'Убрать блевотину с порога',
        completed: false
     },
     {
        id: 1,
        text: 'Купить туалетную бумагу',
        completed: true
     },
     {
        id: 2,
        text: 'Покурить',
        completed: false
     },
     {
        id: 3,
        text: 'Перестать слышать голоса',
        completed: false
     }
  ],
   counter: 4
};

function reduceTodo(state = initialState, action) {
   switch (action.type) {
      case SET_VISIBILITY_FILTER:
         return Object.assign({}, state, {
            visibility: action.filter
         });

      case ADD_TODO:
         return Object.assign({}, state, {
            todos: [
               ...state.todos,
               {
                  id: state.counter,
                  text: action.text,
                  completed: false
               }
            ],
            counter: state.counter + 1
         });

      case TOGGLE_TODO:
         return Object.assign({}, state, {
            todos: state.todos.map((todo) => {
               if (action.id === todo.id) {
                  todo.completed = !todo.completed;
                  return todo;
               }

               return todo;
            })
         });

      case REMOVE_TODO:
         return Object.assign({}, state, {
            todos: state.todos.filter((todo) => {
               return (action.id !== todo.id);
            })
         });

      default:
         return state;
   }
}

export default reduceTodo;