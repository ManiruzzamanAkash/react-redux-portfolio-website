import React from "react";
import { OverlayTrigger, Tooltip } from "react-bootstrap";

const Skill = (props) => {
  const { name, img, exp_level } = props;
  return (
    <div className="single-skill-item">
      <OverlayTrigger
        overlay={
          <Tooltip id="tooltip-disabled">
            {name + " ➬ Expertise Level ⇲ " + exp_level + "%"}
          </Tooltip>
        }
      >
        <img src={img} alt="" />
      </OverlayTrigger>
    </div>
  );
};

export default Skill;
