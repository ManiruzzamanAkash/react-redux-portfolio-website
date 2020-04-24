import React from "react";
import Modal from "react-bootstrap/Modal";
import CloseIcon from "@material-ui/icons/Close";
import DateRange from "../../partials/date-generator/date-range/DateRange";
import HTMLParser from "../../partials/html-parser/HTMLParser";

const LifeStoryDetail = props => {
  const { item } = props;
  return (
    <div className="container">
      <Modal.Header>
        <Modal.Title id="example-custom-modal-styling-title">
          {item.position}{" "}
          <span className="badge badge-primary">
            <DateRange start_date={item.start_date} end_date={item.end_date} />{" "}
          </span>
        </Modal.Title>
        <span
          onClick={() => props.onClose()}
          className="btn btn-warning btn-rounded pointer"
        >
          <CloseIcon />
          Close
        </span>
      </Modal.Header>
      <div className="modal-content pb-5">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 border-right">
              <p>
                <strong>
                  {item.position} at {item.institution}
                </strong>
                <br />
                {item.is_current !== 0 && (
                  <span className="badge badge-info">
                    {" "}
                    Current Job Position
                  </span>
                )}
              </p>
              {item.department != null && (
                <p>Department of {item.department}</p>
              )}
            </div>
            <div className="col-lg-8">
              <HTMLParser data={item.long_description} />
            </div>
          </div>
        </div>
      </div>

      {/* <div className="timeline-image">
        <h4>{item.position}</h4>
        <h6>{item.institution}</h6>
      </div>
      <div className="timeline-panel">
        <div className="timeline-heading">
          <h4>
            <DateRange start_date={item.start_date} end_date={item.end_date} />{" "}
            {item.is_current && (
              <span className="badge badge-info"> Currently Working</span>
            )}
          </h4>
          <h4 className="subheading">
            {item.position} at {item.institution}
          </h4>
        </div>
        <div className="timeline-body">
          <p className="text-muted">{item.short_description}</p>
        </div>
      </div> */}
    </div>
  );
};

export default LifeStoryDetail;
