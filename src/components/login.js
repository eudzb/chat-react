import React, { useState } from 'react'
import '../App.css'
import { useDispatch } from 'react-redux'
import addAccount from '../actions/addAccount'
import { useHistory } from "react-router-dom";

const LoginComponent = () => {
  let history = useHistory();

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
      history.push("/coolchat");
    }
  }


  return (
    <div className="loginWindow">
      <h1>
        <span role="img" aria-label="sun" style={{fontSize: 50, verticalAlign: 'sub', marginRight: 10}}>🥑</span>
        {/* <i class="material-icons dp48" style={{verticalAlign: 'sub', fontSize: 'larger', marginRight: 10}}>person</i> */}
        <span>Entrez votre username</span>
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
