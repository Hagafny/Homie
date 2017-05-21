import React from 'react'
import Header from './Header.jsx';
import DueDate from './DueDate.jsx';

export default class Title extends React.Component {

    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div className="col-sm-3">
                <Header title={this.props.title} ex={this.props.ex} />
                <DueDate endDate={this.props.endDate} />
            </div>
        )
    };
}
