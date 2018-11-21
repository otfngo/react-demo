import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import store from './store'
import TodoList from './TodoList';
import 'xuanhuan'

const App = (
  <Provider store={store}>
    <TodoList></TodoList>
  </Provider>
)

ReactDOM.render(App, document.getElementById('root'));
