import React from "react";
import Modal from "react-bootstrap/Modal";
import LinkIcon from "@material-ui/icons/Link";
import CloseIcon from "@material-ui/icons/Close";
import ImageGallary from "../../partials/image-gallary/ImageGallary";
import DateRange from "../../partials/date-generator/date-range/DateRange";

const PortfolioSingle = props => {
  const {
    title,
    image,
    images,
    start_date,
    end_date,
    short_description,
    long_description,
    client,
    category
  } = props.item;
  return (
    <>
      <Modal.Header>
        <Modal.Title id="example-custom-modal-styling-title">
          {title}
        </Modal.Title>
        <CloseIcon onClick={() => props.onClose()} className="pointer" />
      </Modal.Header>
      <div className="modal-content">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <div className="modal-body">
                <h2 className="text-uppercase">
                  {title}{" "}
                  <span className="badge badge-primary">
                    <DateRange start_date={start_date} end_date={end_date} />
                  </span>
                </h2>
                <p className="item-intro text-muted">{short_description}</p>
                <ImageGallary
                  images={images}
                  fallbackImage={image}
                  fallbackTitle={title}
                />

                <p>{long_description}</p>
                <ul className="list-inline">
                  <li>Client: {client}</li>
                  <li>Category: {category.name}</li>
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
