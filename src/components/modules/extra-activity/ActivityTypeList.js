import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import ActivityList from "./ActivityList";

import { getActivityTypeAction } from "../../../store/actions/extra-activity/ActivityTypeAction";

const ActivityTypeList = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getActivityTypeAction());
  }, [dispatch]);

  const activityTypes = useSelector(
    (state) => state.ActivityTypeReducer.typeList
  );

  return (
    <>
      {activityTypes.map((item, index) => (
        <div key={index}>
          <h4>{item.type_name}</h4>
          <ActivityList activities={item.activities} key={index} />
        </div>
      ))}
    </>
  );
};

export default ActivityTypeList;
