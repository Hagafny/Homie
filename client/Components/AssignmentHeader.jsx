import React from 'react'
import DueDate from './DueDate.jsx';
export default class AssignmentTitle extends React.Component {

    constructor(props) {
        super(props)
    }
    onCollapse(e) {
        e.stopPropagation();
        let self = this;
        let $assignmentHeader = $(e.currentTarget);
        let id = $assignmentHeader.attr('aria-controls');
        let showState = $(e.currentTarget).attr('aria-expanded') == "true";
        setTimeout(function () {
            self.props.onShowCallback(id, showState) //I need to setTimeout becuase of weird stuff happening.
        }, 500)


    }
    render() {
        return (
            <div data-toggle="collapse" href={`#${this.props.data.id}`} aria-expanded={this.props.data.viewState.show} aria-controls={this.props.data.id} className="card-header" role="tab" onClick={this.onCollapse.bind(this)}>
                <h5 className="mb-0">
                    {this.props.data.title} - <DueDate endDate={this.props.endDate} />
                </h5>
            </div>
        )
    };
}
