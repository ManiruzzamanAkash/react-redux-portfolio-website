import React from "react";
import { useSelector } from "react-redux";
import PDFViewer from "pdf-viewer-reactjs";
import "./styles.css";

const CVDetails = (props) => {
  const about = useSelector((state) => state.AboutReducer.about);
  const cvLink = about && about.cv_file;
  return (
    <>
      <div className="row">
        <PDFViewer
          document={{
            url: cvLink,
          }}
        />
      </div>
    </>
  );
};

export default CVDetails;
