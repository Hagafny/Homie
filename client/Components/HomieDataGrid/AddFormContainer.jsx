import React, { Component } from 'react'
import AddForm from './AddForm.jsx';
export default class AddFormContainer extends Component {

    constructor(props) {
        super(props);
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.resetState = this.resetState.bind(this);
    }

    resetState() {
        for (let name in this.state) {
            this.setState({
                [name]: ''
            });
        }
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
        // Save and then completely reset state so that everything will be blank
        this.props.save(this.state, this.resetState());
    }
    render() {
        return (
            <AddForm
                gridName={this.props.gridName}
                fields={this.props.fields}
                handleInputChange={this.handleInputChange}
                handleSubmit={this.handleSubmit} />)
    }
}

