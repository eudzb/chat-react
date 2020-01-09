import React from 'react';
import '../App.css';

class MessageItemComponent extends React.Component {

  render() {
    return (
      <li className="chat-message">
      <img
      src={require(`../img/${this.props.Message.avatar.toLowerCase()}`)}
      className="img-avatar"
      alt={this.props.Message.username}/>
      <div style={{display: "flex", flex: 10, flexDirection: "column", marginLeft: 8}}>
        <div style={{display: "flex", justifyContent: "space-between"}}>
          <small style={{fontWeight: 800}}>{this.props.Message.username}</small>
          <small style={{fontStyle: "italic", color: "grey"}}>{this.props.Message.sentAt}</small>
        </div>
        <div style={{marginTop: 8}}>{this.props.Message.message}</div>
      </div>
    </li>
    );
  }
};

export default MessageItemComponent;
