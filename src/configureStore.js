import { createStore, combineReducers, applyMiddleware } from 'redux'
import contactReducer from './reducers/contactReducer'

const configureStore = () => {
    const store = createStore(combineReducers({
        contacts: contactReducer
    }), (applyMiddleware()))
    return store
}
export default configureStore