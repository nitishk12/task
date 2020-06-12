const contactInitialState = [
    { id: 1, name: 'nitish kumar', mobile: 8521512326 }
]
const contactReducer = (state = contactInitialState, action) => {
    switch (action.type) {
        case 'ADD_CONTACT': {
            return [...state, action.payload]
        }
        case 'REMOVE_CONTACT': {
            return state.filter(product => product.id != action.payload)
        }
        case 'EDIT_CONTACT': {
            return state.map(contact => {
                if (contact._id == action.payload.id) {
                    return { ...contact, ...action.payload.contact }
                } else {
                    return { ...contact }
                }
            })
        }
        default: {
            return [...state]
        }
    }
}
export default contactReducer