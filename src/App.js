import React from 'react';
import getMovies from './exo1/getMovies'
import { createStore, applyMiddleware } from 'redux'
import allReducers from './reducers'
import { Provider } from 'react-redux'
import './App.css'
import logger from './services/middleware'
import Routes from './router/routes'
import styled from 'styled-components';

console.log(getMovies)

const store = createStore(
  allReducers, 
  applyMiddleware(logger),
  // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
);

const Footer = styled.footer`
  position: absolute;
  bottom: 0;
  font-size: 12px;
  color: lightgrey;
  padding: 25px;
  font-weight: 300;
  text-align: center;
  width: 100%;
  text-decoration: none;
`

const App = () => {

  return (
    <div className="App">
      <Provider store={store}>
        <Routes />
        <Footer>
          <span>© 2020 </span>
          <a href="https://github.com/eudzb/chat-react" target="blank" style={{textDecoration: 'none', color: 'inherit'}}>
            github.com/eudzb/chat-react
          </a>
        </Footer>
      </Provider>
    </div>
  );
}

export default App;
