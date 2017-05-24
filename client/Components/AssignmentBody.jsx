import React from 'react'
import Resources from './Resources.jsx';
import DoneButton from './DoneButton.jsx';
export default class AssignmentBody extends React.Component {

    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div id={this.props.data.id} className="collapse show" role="tabpanel" aria-labelledby="headingOne">
                <div className="card-block">
                    <h6 className="card-title">EX {this.props.data.ex}</h6>
                    <DoneButton id={this.props.data.id} done={this.props.data.viewState.done} onDoneChecked={this.props.onDoneChecked}/>
                    <Resources data={this.props.data.resources} />
                </div>
            </div>
        )
    };
}
