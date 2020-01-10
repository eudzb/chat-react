const addMessage = (message) => {
    const date = new Date()
    
    return {
        type: 'ADD_MESSAGE',
        message: message.message,
        username: 'Eudrey',
        sentAt: ('0' + date.getDate()).slice(-2) + '/'
        + ('0' + (date.getMonth()+1)).slice(-2) + ' à ' + date.getHours() + 'h' + date.getMinutes(),
        avatar: 'icon-person.png'
    }
}

export default addMessage