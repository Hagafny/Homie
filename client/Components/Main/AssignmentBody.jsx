import React from 'react'
import Resources from './Resources.jsx';
import DoneButton from './DoneButton.jsx';
import Countdown from './Countdown.jsx';
import RemoveClassModalButton from './RemoveClassModalButton.jsx';

const AssignmentBody = (props) => {

    let collapseStatus = props.data.viewState.show ? "show" : "";

    return (
        <div id={props.data.id} className={`collapse ${collapseStatus}`} role="tabpanel" aria-labelledby="headingOne">
            <div className="card-block">

                <h6 className="card-title">EX {props.data.ex}
                    <RemoveClassModalButton />
                </h6>

                <div className="row">
                    <div className="col-xs-3 col-sm-4"><Resources data={props.data.resources} /></div>
                    <div className="col-xs-3 col-sm-4"><DoneButton id={props.data.id} done={props.data.viewState.done} onDoneChecked={props.onDoneChecked} /></div>
                    <div className="col-xs-6 col-sm-4"> <Countdown countdown={props.data.countdown} /></div>
                </div>
            </div>
        </div>
    );
}
export default AssignmentBody;