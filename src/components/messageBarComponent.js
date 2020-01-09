import React, { useState } from 'react';
import '../App.css'
import { useDispatch } from 'react-redux'
import addMessage from '../actions/addMessage'

const MessageBarComponent = () => {

  const [message, setMessage] = useState('');
  const dispatch = useDispatch();

  const handleChange = (e) => {
    setMessage(e.target.value);
  }

  const handleSubmit = (e) => {
    e.preventDefault();    
    
    if (message) {
      dispatch(addMessage({message: message}));
      setMessage('');
    }
  }

  return (
    <div style={{ display: 'flex', padding: 10 }}>
      <img
      src={require('../img/pic5.png')}
      style={{ width: 40, height: 40, objectFit: 'cover', borderRadius: 40/2, marginRight: 10}}
      alt="Your avatar"/>
      <form style={{display: "flex", flex: 1}} onSubmit={handleSubmit}>
        <input
        placeholder="Votre message"
        type="text"
        className="inputSend"
        value={message}
        onChange={handleChange} />
        <button
        type="submit"
        className="buttonSend">
        <i className="material-icons dp48" style={{verticalAlign: 'sub'}}>send</i></button>
      </form>
    </div>
  );
}


export default MessageBarComponent;
