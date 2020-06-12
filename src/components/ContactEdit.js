import React from 'react';
import { connect } from 'react-redux';
import ContactForm from './ContactForm';
import { startEditContact } from '../actions/contact';

class ContactEdit extends React.Component {

    handleSubmit = (formData) => {
        const redirect = () => this.props.history.push(`/contact-edit/${this.props.match.params.contact}`)
        this.props.dispatch(startEditContact(this.props.match.params.contact, formData, redirect))
    }

    render() {
        return (
            <div>
                <h1>Edit Contact</h1>
                <br></br>
                <ContactForm handleSubmit={this.handleSubmit} contact={this.props.match.params.contact} />
            </div>
        )
    }
}

export default connect()(ContactEdit)