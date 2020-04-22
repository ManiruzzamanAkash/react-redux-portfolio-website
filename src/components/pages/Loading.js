import * as React from "react";
import Skeleton from "@material-ui/lab/Skeleton";

const Loading = () => {
  return (
    <div>
      <Skeleton variant="text" />
      <Skeleton variant="circle" width={40} height={40} />
      <Skeleton variant="rect" width={210} height={118} />
    </div>
  );
};

export default Loading;
