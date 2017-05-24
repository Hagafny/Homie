import React from 'react'
import Resources from './Resources.jsx';
import DoneButton from './DoneButton.jsx';
export default class AssignmentBody extends React.Component {

    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div id={this.props.assignmentId} className="collapse show" role="tabpanel" aria-labelledby="headingOne">
                <div className="card-block">
                    <h6 className="card-title">EX {this.props.data.ex}</h6>
                    <DoneButton finished={true} />
                    <Resources data={this.props.data.resources} />
                </div>
            </div>
        )
    };
}
