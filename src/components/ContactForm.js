import React from 'react';
import { connect } from 'react-redux';
import { addContact } from '../actions/contact';

class Contact extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            name: props.name ? props.name : "",
            mobile: props.mobile ? props.mobile : ""
        }
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleChange = this.handleChange.bind(this)
    }

    handleSubmit(e) {
        e.preventDefault()
        const formData = {
            id: Number(new Date()),
            name: this.state.name,
            mobile: this.state.mobile
        }
        if (!/^[a-zA-Z ]{2,30}$/.test(formData.name)) {
            alert('please input the name')
        }
        if (!/^(0|[+91]{3})?[7-9][0-9]{9}$/.test(formData.mobile)) {
            alert('Please input a valid mobile number')
        }
        console.log(formData)
        localStorage.setItem('document', JSON.stringify(formData));
        this.props.dispatch(addContact(formData))
        this.props.history.push('/')

    }

    handleChange(e) {
        this.setState({ [e.target.name]: e.target.value })
    }

    render() {
        return (
            <div>
                <h2>Save your contact</h2>
                <form onSubmit={this.handleSubmit}>
                    <label>
                        Name
                            <input
                            type='text'
                            name='name'
                            value={this.state.name}
                            onChange={this.handleChange} /><br />
                        Mobile no
                            <input
                            type="number"
                            name="mobile"
                            value={this.state.mobile}
                            onChange={this.handleChange} />
                    </label>
                    <br />
                    <input type='submit' />
                </form>
            </div>
        )
    }
}


export default connect()(Contact);