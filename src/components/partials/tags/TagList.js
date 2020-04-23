import React from "react";

const TagList = props => {
  return (
    <div>
      {props.tags.map(item => (
        <span className="badge badge-success mr-1">{item.pt.name}</span>
      ))}
    </div>
  );
};

export default TagList;
