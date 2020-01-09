const initialState = { accounts: [] }

const accounts = (state = initialState, action) => {
    switch(action.type) {
        case 'ADD_ACCOUNT':
            return {
                accounts: [
                    ...state.accounts,
                    { accounts: action.username }
                ]
            }
        default:
            return state
    }
}

export default accounts