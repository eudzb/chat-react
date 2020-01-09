const initialState = { messages: [
    {
      username: 'Matisse 🎶',
      message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod' +
      'tem Ut enim ad minim veniam' +
      'culpa qui officia deserunt mollit anim id est laborum.',
      sentAt: '05/01 à 13h21',
      avatar: "pic1.png"
    },
    {
      username: 'Saidou 🕶',
      message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod' +
      'tempor incididunt ut labore et dolore magna aliqua.',
      sentAt: '05/01 à 13h30',
      avatar: "pic3.png" },

    {
      username: 'Aissatou 🧕🏾',
      message: 'Sed faucibus turpis in eu mi.',
      sentAt: '05/01 à 15h14',
      avatar: "pic2.png" }
  ] };

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