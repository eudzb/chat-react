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
        <div style={{display: "flex", flex: 10, flexDirection: "column", marginLeft: 16}}>
          <div style={{display: "flex", justifyContent: "space-between"}}>
            <span style={{fontWeight: 600}}>{this.props.Message.username}</span>
            <small style={{fontWeight: 300, fontStyle: "italic", color: "#ecf0f1"}}>{this.props.Message.sentAt}</small>
          </div>
          <div style={{fontWeight: 300, marginTop: 8}}>{this.props.Message.message}</div>
        </div>
    </li>
    );
  }
};

export default MessageItemComponent;
