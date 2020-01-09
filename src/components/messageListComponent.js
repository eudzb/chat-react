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
  return (
    <ul style={style}>
      { messages.map((el, id) => <MessageItemComponent Message={el} key={id} />)}
    </ul>
  );
}

export default MessageListComponent;
