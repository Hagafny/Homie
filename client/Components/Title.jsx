import React from 'react'
import Header from './Header.jsx';
import DueDate from './DueDate.jsx';

export default class Title extends React.Component {

    constructor(props) {
        super(props)
        console.log(props);
    }

    render() {
        return (
            <div className="col">
                <Header title={this.props.title} ex={this.props.ex} />
                <DueDate endDate={this.props.endDate} />
            </div>
        )
    };
}
