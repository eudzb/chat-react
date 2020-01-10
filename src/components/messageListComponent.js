import React from "react";
import MessageItemComponent from "./messageItemComponent";
import { useSelector } from 'react-redux'

const style = {
  padding: 12,
  listStyle: "none",
  height: 350,
  overflow: 'scroll'
};

const noMsg = {
  height: 350,
  padding: 12,
  color: '#fff',
  fontStyle: 'italic'
}

const MessageListComponent = () => {
  const messages = useSelector(state => state.messages.messages)
  if (messages.length !== 0) {
    return (
      <ul style={style}>
        { messages.map((el, id) => <MessageItemComponent Message={el} key={id} />)}
      </ul>
    );        
  } else {
    return (
      <div style={noMsg}>
        <p>Il n'y a pas de messages pour l'instant.</p>
      </div>
    )
  }
}

export default MessageListComponent;
