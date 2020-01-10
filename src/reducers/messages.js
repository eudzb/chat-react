const initialState = { messages: [] };

const messages = (state = initialState, action) => {
    switch(action.type) {
      case 'ADD_MESSAGE':
        return {
          messages: [
            ...state.messages, {
              message: action.message,
              username: action.username,
              sentAt:  action.sentAt,
              avatar: action.avatar
            }
          ]
        }
      default:
        return state
  }
}

export default messages