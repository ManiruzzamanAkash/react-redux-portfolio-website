import React from "react";
import VisibilityIcon from "@material-ui/icons/Visibility";
import HTMLParser from "../../partials/html-parser/HTMLParser";
import "./styles.css";

const ActivityList = (props) => {
  return (
    <>
      <div className="row">
        {props.activities.map((item) => (
          <div className="col-lg-4 col-sm-6 mb-4 pointer" key={item.id}>
            <div className="activity-item">
              <h6>{item.title}</h6>
              <hr />
              {item.description !== null && item.description !== "null" && (
                <HTMLParser data={item.description} />
              )}
              {item.image !== null && item.image !== "null" && (
                <img className="w-100 mb-2" src={item.image} alt={item.title} />
              )}
              <p className="text-center">
                <a
                  href={item.online_link}
                  className="btn btn-sm btn-outline-primary"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {item.online_link_text} <VisibilityIcon />
                </a>
              </p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default ActivityList;
