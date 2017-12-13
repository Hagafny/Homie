import React from 'react'
import DueDate from './DueDate.jsx';
export default class AssignmentTitle extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            color: this.getHeaderColor(this.props.status)
        }

        this.onCollapse = this.onCollapse.bind(this);
    }

    componentWillReceiveProps(nextProps) {
        this.setState({ color: this.getHeaderColor(nextProps.status) })
    }

    onCollapse(e) {
        e.stopPropagation();
        let self = this;
        let $assignmentHeader = $(e.currentTarget);
        let id = $assignmentHeader.attr('aria-controls');
        let showState = $(e.currentTarget).attr('aria-expanded') == "true";
        setTimeout(function () {
            self.props.onShowCallback(id, showState) //I need to setTimeout becuase of weird stuff happening.
        }, 500);
    }

    getHeaderColor(status) {
        let color = "";
        switch (status) {
            case 0:
            default:
                color = "primary";
                break;
            case 1:
                color = "warning";
                break;
            case 2:
                color = "danger";
                break;
            case 3:
                color = "success";
                break;
        }

        return `card-${color}`;
    }

    render() {
        let seperator = this.props.data.title ? '-' : '';
        return (
            <div data-toggle="collapse" 
            href={`#${this.props.data.id}`} 
            aria-expanded={this.props.data.viewState.show} 
            aria-controls={this.props.data.id} 
            className={`card-header ${this.state.color} card_assignment_header`}
             role="tab" onClick={this.onCollapse}>
                <h5>
                    {this.props.data.course_title} {seperator} {this.props.data.title} - <DueDate endDate={this.props.endDate} options={this.props.options} />
                </h5>
            </div>
        )
    };
}
 