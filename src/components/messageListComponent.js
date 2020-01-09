import React from "react";
import MessageItemComponent from "./messageItemComponent";
import { useSelector } from 'react-redux'

const style = {
  padding: 12,
  listStyle: "none",
  height: 350,
  overflow: 'scroll'
};

const MessageListComponent = () => {
  const messages = useSelector(state => state.messages.messages)


  if (messages.length !== 0 || typeof messages !== undefined) {
    return (
      <ul style={style}>
        { messages.map((el, id) => <MessageItemComponent Message={el} key={id} />)}
      </ul>
    );    
  } else {
    return (
      <p>Y a pas de panneau !</p>
    );    
  }
}

export default MessageListComponent;
