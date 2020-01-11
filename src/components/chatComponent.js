import React from 'react'
import '../App.css'
import MessageListComponent from './messageListComponent'
import MessageBarComponent from './messageBarComponent'
import { useSelector } from 'react-redux'

const ChatComponent = () => {
  const nbUsers = useSelector(state => state.accounts.accounts.length)

  return (
    <div className="chatWindow">
      <h1>
        <span role="img" aria-label="sun" style={{fontSize: 40, marginRight: 10}}>🌙</span>
        <span>Cool Chat</span>
        <span style={{marginLeft: 25, verticalAlign: 'middle', fontSize: 18}}>
          <i className="material-icons dp48" style={{verticalAlign: 'sub'}}>people</i> {nbUsers}
        </span>
      </h1>
      <MessageListComponent />
      <MessageBarComponent />
    </div>
  )    
}

export default ChatComponent
