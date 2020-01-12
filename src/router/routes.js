import React from 'react'
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom'
import LoginComponent from '../components/login';
import ChatComponent from '../components/chatComponent'
import { useSelector } from 'react-redux'

const Routes = () => {

    const nbAccount = useSelector(state => state.accounts.accounts.length)

    return (
        <Router>
          <nav>
            <span>
              <Link to="/">Connexion</Link>
            </span>
            {nbAccount !== 0 &&
              <span>
                <Link to="/coolchat">Cool Chat</Link>
              </span>
            }
        </nav>

          <Switch>
            <Route path="/coolchat">
            { nbAccount !== 0 ?
                <ChatComponent /> : <LoginComponent />
            }
                </Route>
            <Route path="/">
              <LoginComponent />
            </Route>
          </Switch>
        </Router>
    )
}

export default Routes