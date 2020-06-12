import React from 'react'
import { connect } from 'react-redux';
import { removeContact } from '../actions/contact';
import { Link } from 'react-router-dom';
import Avatar from 'react-avatar';

function ContactList(props) {
    const handleRemove = (id) => {
        const remove = window.confirm('Are You Sure ?')
        if (remove) {
            props.dispatch(removeContact(id))
        }
    }

    return (
        <div>
            <h2>Listing Contacts - {props.contacts.length}</h2>
            <ul>
                {props.contacts.map((contact, i) => {
                    return <li key={i} >
                        <Avatar
                            name={contact.name}
                            size="50"
                            round={true}
                            color={Avatar.getRandomColor('#FF0000', ['red', 'green', 'blue'])}
                        />
                        &nbsp;&nbsp;
                        {contact.mobile}&nbsp;&nbsp;
                        {/* <Link to={`/contact-edit/${this.props.match.params.contact}`}><button >edit</button>&nbsp;&nbsp;</Link> */}
                        <button onClick={() => {
                            handleRemove(contact.id)
                        }}>remove</button>
                    </li>
                })}
            </ul>
        </div>
    )
}
const mapStateToProps = (state, props) => {
    return {
        contacts: state.contacts,
        // contact: state.contacts.find(contact => contact.id == props.match.params.contact)
    }
}
export default connect(mapStateToProps)(ContactList)
