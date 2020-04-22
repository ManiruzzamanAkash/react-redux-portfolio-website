import React from "react";
import Modal from "react-bootstrap/Modal";
import LinkIcon from "@material-ui/icons/Link";
import CloseIcon from "@material-ui/icons/Close";

const PortfolioSingle = props => {
  return (
    <>
      <Modal.Header>
        <Modal.Title id="example-custom-modal-styling-title">
          {props.item.title}
        </Modal.Title>
        <CloseIcon />
      </Modal.Header>
      <div className="modal-content">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <div className="modal-body">
                <h2 className="text-uppercase">{props.item.title}</h2>
                <p className="item-intro text-muted">
                  Lorem ipsum dolor sit amet consectetur.
                </p>
                <img
                  className="img-fluid d-block mx-auto"
                  src="assets/img/portfolio/06-full.jpg"
                  alt=""
                />
                <p>
                  Use this area to describe your project. Lorem ipsum dolor sit
                  amet, consectetur adipisicing elit. Est blanditiis dolorem
                  culpa incidunt minus dignissimos deserunt repellat aperiam
                  quasi sunt officia expedita beatae cupiditate, maiores
                  repudiandae, nostrum, reiciendis facere nemo!
                </p>
                <ul className="list-inline">
                  <li>Date: January 2020</li>
                  <li>Client: Window</li>
                  <li>Category: Photography</li>
                </ul>
                <button className="btn btn-primary" type="button">
                  <LinkIcon /> Live Preview
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PortfolioSingle;
