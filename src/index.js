import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import './index.css';
import TodoApp from './components/TodoApp';
import reduceTodo from './reducers';

const store = createStore(reduceTodo);

ReactDOM.render(
   <Provider store={store}>
      <TodoApp />
   </Provider>,
   document.getElementById('root')
);