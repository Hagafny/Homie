import React from 'react'
import Resources from './Resources.jsx';
import DoneButton from './DoneButton.jsx';
import Countdown from './Countdown.jsx';

const AssignmentBody = ({data}) =>  {
            let collapseStatus = data.viewState.show ? "show" : "";

            return (
            <div id={data.id} className={`collapse ${collapseStatus}`} role="tabpanel" aria-labelledby="headingOne">
                <div className="card-block">
                    <h6 className="card-title">EX {data.ex}</h6>
                    <div className="row">
                        <div className="col-xs-3 col-sm-4"><Resources data={data.resources} /></div>
                        <div className="col-xs-3 col-sm-4"><DoneButton id={data.id} done={data.viewState.done} onDoneChecked={data.onDoneChecked} /></div>
                        <div className="col-xs-6 col-sm-4"> <Countdown countdown={data.countdown} /></div>
                    </div>
                </div>
            </div>
            );
}
export default AssignmentBody;