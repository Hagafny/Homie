import React, { Component } from 'react'
import AddForm from './AddForm.jsx';
export default class AddFormContainer extends Component {

    constructor(props) {
        super(props);
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleInputChange(event) {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;
        this.setState({
            [name]: value
        });
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.save(this.state);
    }
    render() {
        return (
            <AddForm courses={this.props.courses}
                handleInputChange={this.handleInputChange}
                handleSubmit={this.handleSubmit} />)
    }
}

