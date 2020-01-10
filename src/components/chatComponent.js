import React from 'react'
import '../App.css'
import MessageListComponent from './messageListComponent'
import MessageBarComponent from './messageBarComponent'

const ChatComponent = () => {

  return (
    <div className="chatWindow">
      <h1>
        <span role="img" aria-label="sun" style={{fontSize: 40, marginRight: 10}}>🌙</span>
        <span>Cool Chat</span>
      </h1>
      <MessageListComponent />
      <MessageBarComponent />
    </div>
  )    
}

export default ChatComponent
