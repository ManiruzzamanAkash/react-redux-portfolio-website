import React from "react";
import Moment from "react-moment";

const DateRange = props => {
  return (
    <>
      <Moment format="MMM YYYY" withTitle>
        {props.start_date}
      </Moment>
      {props.end_date != null && (
        <>
          {" to "}
          <Moment format="MMM YYYY" withTitle>
            {props.end_date}
          </Moment>
        </>
      )}
    </>
  );
};

export default DateRange;
