import React from 'react'

export default class Header extends React.Component {

    constructor(props) {
        super(props)
    }

    render() {
        return (
            <h1>{this.props.title} - EX {this.props.ex}</h1>
        )
    };
}
