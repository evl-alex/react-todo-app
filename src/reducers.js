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
        text: 'Write awesome application',
        completed: true
     },
     {
        id: 1,
        text: 'Share it on Github',
        completed: true
     },
     {
        id: 2,
        text: 'Go to IPO',
        completed: false
     }
  ],
   counter: 3
};

function reduceTodo(state = initialState, action) {
   switch (action.type) {
      case SET_VISIBILITY_FILTER:
         return Object.assign({}, state, {
            visibility: action.payload
         });

      case ADD_TODO:
         return Object.assign({}, state, {
            todos: [
               ...state.todos,
               {
                  id: state.counter,
                  text: action.payload,
                  completed: false
               }
            ],
            counter: state.counter + 1
         });

      case TOGGLE_TODO:
         return Object.assign({}, state, {
            todos: state.todos.map((todo) => {
               if (action.payload === todo.id) {
                  todo.completed = !todo.completed;
                  return todo;
               }

               return todo;
            })
         });

      case REMOVE_TODO:
         return Object.assign({}, state, {
            todos: state.todos.filter((todo) => {
               return (action.payload !== todo.id);
            })
         });

      default:
         return state;
   }
}

export default reduceTodo;