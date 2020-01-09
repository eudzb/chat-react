import React, { useState } from 'react'
import '../App.css'
import { useDispatch } from 'react-redux'
import addAccount from '../actions/addAccount'

const LoginComponent = () => {

  const [username, setUsername] = useState('');
  const dispatch = useDispatch();

  const handleChange = (e) => {
    setUsername(e.target.value);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (username) {
      dispatch(addAccount({username: username}));
      setUsername('');
    }
  }


  return (
    <div className="loginWindow">
      <h1>
        <span role="img" aria-label="sun" style={{fontSize: 50, verticalAlign: 'sub', marginRight: 10}}>🥑</span>
        <span>Connectez-vous</span>
      </h1>
      <form onSubmit={handleSubmit}>
        <input
        type="text"
        placeholder="Username"
        className="login-input"
        value={username}
        onChange={handleChange} />
        <button type="submit">OK</button>
      </form>
    </div>
  )    
}

export default LoginComponent
