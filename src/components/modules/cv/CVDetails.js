import React from "react";
import "./styles.css";

const CVDetails = (props) => {
    const cvUrl = process.env.REACT_APP_CV_URL ?? '';

    return (
        <>
            <div className="container text-center">
                {
                    cvUrl.length > 0 &&
                    <iframe src={cvUrl}
                            width="100%"
                            height="1000px"></iframe>
                }
            </div>
        </>
    );
};

export default CVDetails;
