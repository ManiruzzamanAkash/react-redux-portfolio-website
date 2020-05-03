import React from "react";
import Modal from "react-bootstrap/Modal";
import VisibilityIcon from "@material-ui/icons/Visibility";
import PeopleIcon from "@material-ui/icons/People";
import LabelIcon from "@material-ui/icons/Label";
import CloseIcon from "@material-ui/icons/Close";
import CodeIcon from "@material-ui/icons/Code";
import GitHubIcon from "@material-ui/icons/GitHub";

import ImageGallary from "../../partials/image-gallary/ImageGallary";
import DateRange from "../../partials/date-generator/date-range/DateRange";
import TagList from "../../partials/tags/TagList";
import HTMLParser from "../../partials/html-parser/HTMLParser";

const PortfolioSingle = (props) => {
  const {
    title,
    image,
    logo,
    images,
    live_link,
    github_link,
    start_date,
    end_date,
    short_description,
    long_description,
    client,
    category,
    programming_technologies,
  } = props.item;
  return (
    <>
      <Modal.Header>
        <Modal.Title id="example-custom-modal-styling-title">
          {title}{" "}
          <span className="badge badge-primary">
            <DateRange start_date={start_date} end_date={end_date} />
          </span>
        </Modal.Title>
        <CloseIcon onClick={() => props.onClose()} className="pointer" />
      </Modal.Header>
      <div className="modal-content">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-3 text-center">
              <div className="">
                {logo !== null && (
                  <img src={logo} className="portfolio-logo mt-3" alt={title} />
                )}
              </div>
              <ul className="list-inline mt-3">
                <li>
                  <PeopleIcon /> A Project of <strong>{client}</strong>
                </li>
                <li>
                  <LabelIcon /> Project Category: <br />
                  <strong>{category.name}</strong>
                </li>
                <hr />
                <li>
                  <CodeIcon /> Programming Technology: <br />
                  <TagList tags={programming_technologies} />
                </li>
              </ul>
              {live_link != null && (
                <a
                  className="btn btn-danger btn-rounded"
                  href={live_link}
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <VisibilityIcon /> Live Preview
                </a>
              )}

              {github_link != null && (
                <div className="mt-1">
                  <a
                    className="btn btn-light btn-rounded"
                    href={github_link}
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    <GitHubIcon /> Github
                  </a>
                </div>
              )}
              <div className="fixed-bottom mb-3">
                <button
                  className="btn btn-warning btn-rounded btn-close-modal"
                  onClick={() => props.onClose()}
                >
                  <CloseIcon />
                  Close
                </button>
              </div>
            </div>
            <div className="col-lg-9">
              <div className="modal-body">
                <div className="item-intro mb-2">
                  <HTMLParser data={short_description} />
                </div>
                <ImageGallary
                  images={images}
                  fallbackImage={image}
                  fallbackTitle={title}
                />

                <div>
                  {" "}
                  <HTMLParser data={long_description} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PortfolioSingle;
