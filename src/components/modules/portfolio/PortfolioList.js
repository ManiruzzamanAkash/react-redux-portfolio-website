import React, { useState } from "react";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Modal from "react-bootstrap/Modal";

import iBOSPortfolio from "../../../assets/img/portfolio/ibos.webp";
import PortfolioSingle from "./PortfolioSingle";

const PortfolioList = () => {
  const [value, setValue] = React.useState(0);
  const [modalShow, setModalShow] = React.useState(false);
  const [item, setItem] = React.useState({});

  const [portfolios, setPortfolios] = useState({
    allList: [
      {
        id: 1,
        title: "iBOS",
        short_description: "Intelligent Business Operating System - Big ERP",
        image_path: "",
        image_gallary: [],
        category: "Web Development"
      },
      {
        id: 2,
        title: "PSTU",
        short_description: "Main Website of Patuakhali Science and Technology",
        image_path: "",
        image_gallary: [],
        category: "Web Development"
      }
    ]
  });

  const showDetails = item => {
    setItem(item);
    setModalShow(true);
  };
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <>
      <Tabs
        value={value}
        onChange={handleChange}
        aria-label="simple tabs example"
        scrollButtons="auto"
      >
        <Tab label="All" />
        <Tab label="Web Design" />
        <Tab label="Web Development" />
      </Tabs>
      <div className="data">
        <div className="row">
          {portfolios.allList.map((item, index) => (
            <div
              className="col-lg-4 col-sm-6 mb-4 pointer"
              onClick={() => showDetails(item)}
              key={index}
            >
              <div className="portfolio-item">
                <a
                  className="portfolio-link"
                  data-toggle="modal"
                  href="#portfolioModal1"
                >
                  <div className="portfolio-hover">
                    <div className="portfolio-hover-content">
                      <i className="fas fa-plus fa-3x"></i>
                    </div>
                  </div>
                  <img className="img-fluid" src={iBOSPortfolio} alt="" />
                </a>
                <div className="portfolio-caption">
                  <div className="portfolio-caption-heading">{item.title}</div>
                  <div className="portfolio-caption-subheading text-muted">
                    Web Development
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Modal */}
        <Modal
          show={modalShow}
          onHide={() => setModalShow(false)}
          dialogClassName="modal-large"
          aria-labelledby="example-custom-modal-styling-title"
          size="lg"
          centered
        >
          <PortfolioSingle item={item} />
        </Modal>
      </div>
    </>
  );
};

export default PortfolioList;
