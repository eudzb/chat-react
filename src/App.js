import React from 'react';
import getMovies from './exo1/getMovies'
import { createStore, applyMiddleware } from 'redux'
import allReducers from './reducers'
import { Provider } from 'react-redux'
import './App.css'
import logger from './services/middleware'
import Routes from './router/routes'

console.log(getMovies)

const store = createStore(
  allReducers, 
  applyMiddleware(logger),
  // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
);

const App = () => {

  return (
    <div className="App">
      <Provider store={store}>
        <Routes />
      </Provider>
    </div>
  );
}

export default App;
