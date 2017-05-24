import React from 'react'
import DueDate from './DueDate.jsx';
export default class AssignmentTitle extends React.Component {

    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div className="card-header" role="tab">
                <h5 className="mb-0">
                    <a data-toggle="collapse" href={`#${this.props.data.id}`} aria-expanded="true" aria-controls={this.props.data.id}>
                         {this.props.data.title} - <DueDate endDate={this.props.endDate} />
                    </a>
                </h5>
            </div>
        )
    };
}
