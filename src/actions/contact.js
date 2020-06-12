export const addContact = (contact) => {
    return { type: 'ADD_CONTACT', payload: contact }
}
export const removeContact = (id) => {
    return { type: 'REMOVE_CONTACT', payload: id }
}
export const editContact = (id, contact) => {
    return {
        type: 'EDIT_CONTACT',
        payload: {
            id, contact
        }
    }
}

export const startEditContact = (id, formData, redirect) => {
    return (dispatch) => {
        let data = JSON.parse(localStorage.getItem('document'), formData);
        redirect && redirect()
        dispatch(editContact(id, data))
    }
}