import React from 'react';
import getMovies from './exo1/getMovies'
import ChatComponent from './components/chatComponent'
import { createStore } from 'redux'
import allReducers from './reducers'
import { Provider } from 'react-redux'
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom'
import './App.css'
import LoginComponent from './components/login';

const store = createStore(allReducers, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
console.log(getMovies)

function App() {
  const no = false;
  return (
    <div className="App">
      <Provider store={store}>
        <Router>
          <nav>
            <span>
              <Link to="/">Connexion</Link>
            </span>
            <span>
              <Link to="/coolchat">CoolChat</Link>
            </span>
          </nav>

          <Switch>
            <Route path="/coolchat">
              <ChatComponent />
            </Route>


            <Route path="/">
              <LoginComponent />
            </Route>
          </Switch>
        </Router>
      </Provider>
    </div>
  );
}

export default App;
