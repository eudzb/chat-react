import accounts from './accounts'
import messages from './messages'
import { combineReducers } from 'redux'

const allReducers = combineReducers({ accounts, messages })

export default allReducers