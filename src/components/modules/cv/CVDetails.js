import React from "react";
import Viewer, { Worker } from "@phuocng/react-pdf-viewer";
import "@phuocng/react-pdf-viewer/cjs/react-pdf-viewer.css";
import "./styles.css";
import cvPDF from "../../../assets/files/cv.pdf";

const CVDetails = (props) => {
  return (
    <>
      <div className="container text-center">
        <Worker workerUrl="https://unpkg.com/pdfjs-dist@2.4.456/build/pdf.worker.min.js">
          <div style={{ height: "750px" }}>
            <Viewer fileUrl={cvPDF} />
          </div>
        </Worker>
      </div>
    </>
  );
};

export default CVDetails;
