const addAccount = (account) => {
    return {
        type: 'ADD_ACCOUNT',
        username: account.username
    }
}

export default addAccount