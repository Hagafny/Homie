import React from 'react';
import Resources from './Resources';
import DoneButton from './DoneButton';
import Countdown from './Countdown';

const AssignmentBody = props => {
  const collapseStatus = props.data.viewState.show ? 'show' : '';

  const extraInfo = (
    <div>
      {' '}
      <div className="row">
        <div className="col-12">{props.data.information}</div>
      </div>
      &nbsp;
    </div>
  );

  return (
    <div
      id={props.data.id}
      className={`collapse ${collapseStatus}`}
      role="tabpanel"
      aria-labelledby="headingOne"
    >
      <div className="card-block">
        {/* <h6 className="card-title">{props.data.title}</h6> */}

        {props.data.information && extraInfo}
        <div className="row">
          <div className="col-xs-3 col-sm-4">
            <Resources data={props.data.resources} />
          </div>
          <div className="col-xs-3 col-sm-4">
            <DoneButton
              id={props.data.id}
              done={props.data.viewState.done}
              onDoneChecked={props.onDoneChecked}
            />
          </div>
          <div className="col-xs-6 col-sm-4">
            <Countdown countdown={props.data.countdown} />
          </div>
        </div>
      </div>
    </div>
  );
};
export default AssignmentBody;
