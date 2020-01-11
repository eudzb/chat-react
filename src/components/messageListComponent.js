import React from "react";
import MessageItemComponent from "./messageItemComponent";
import { useSelector } from 'react-redux'
import '../App.css'

const MessageListComponent = () => {
  const messages = useSelector(state => state.messages.messages)
  
  if (messages.length !== 0) {
    return (
      <ul>
        { messages.map((el, id) => <MessageItemComponent Message={el} key={id} />)}
      </ul>
    );        
  } else {
    return (
      <div className='no-msg'>
        <p>Il n'y a pas de messages pour l'instant.</p>
      </div>
    )
  }
}

export default MessageListComponent;
