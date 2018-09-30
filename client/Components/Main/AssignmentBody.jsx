import React from 'react';
import PropTypes from 'prop-types';
import Resources from './Resources';
import DoneButton from './DoneButton';
import Countdown from './Countdown';

const AssignmentBody = ({ data, onDoneChecked }) => {
  const collapseStatus = data.viewState.show ? 'show' : '';

  const extraInfo = (
    <div>
      {' '}
      <div className="row">
        <div className="col-12">{data.information}</div>
      </div>
      &nbsp;
    </div>
  );

  return (
    <div
      id={data.id}
      className={`collapse ${collapseStatus}`}
      role="tabpanel"
      aria-labelledby="headingOne"
    >
      <div className="card-block">
        {/* <h6 className="card-title">{props.data.title}</h6> */}

        {data.information && extraInfo}
        <div className="row">
          <div className="col-xs-3 col-sm-4">
            <Resources data={data.resources} />
          </div>
          <div className="col-xs-3 col-sm-4">
            <DoneButton id={data.id} done={data.viewState.done} onDoneChecked={onDoneChecked} />
          </div>
          <div className="col-xs-6 col-sm-4">
            <Countdown countdown={data.countdown} />
          </div>
        </div>
      </div>
    </div>
  );
};

AssignmentBody.propTypes = {
  onDoneChecked: PropTypes.func.isRequired,
  data: PropTypes.shape().isRequired
};

export default AssignmentBody;
