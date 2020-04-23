import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import VisibilityIcon from "@material-ui/icons/Visibility";
import Loader from "react-loader-spinner";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Modal from "react-bootstrap/Modal";
import PortfolioSingle from "./PortfolioSingle";

import { getPortfolioAction } from "../../../store/actions/portfolios/PortfolioAction";
import { getCategoryAction } from "../../../store/actions/portfolios/CategoryAction";

const PortfolioList = props => {
  const [value, setValue] = useState(0);
  const [modalShow, setModalShow] = useState(false);
  const [item, setItem] = useState({});
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPortfolioAction());
    dispatch(getCategoryAction());
  }, [props]);

  const portfolios = useSelector(state => state.PortfolioReducer.portfolioList);
  const categories = useSelector(state => state.CategoryReducer.categoryList);
  const isLoading = useSelector(state => state.PortfolioReducer.isLoading);

  const showDetails = item => {
    setItem(item);
    setModalShow(true);
  };
  const handleChange = (event, newValue) => {
    setValue(newValue);
    dispatch(getPortfolioAction(newValue));
  };

  return (
    <>
      <Tabs
        value={value}
        onChange={handleChange}
        aria-label="tabsCategory"
        scrollButtons="auto"
      >
        <Tab label="All" value={0} />
        {categories.map(item => (
          <Tab label={item.name} value={item.id} key={item.id} />
        ))}
      </Tabs>
      <div className="row">
        {portfolios.map(item => (
          <div
            className="col-lg-4 col-sm-6 mb-4 pointer"
            onClick={() => showDetails(item)}
            key={item.id}
          >
            <div className="portfolio-item">
              <a className="portfolio-link">
                <div className="portfolio-hover">
                  <div className="portfolio-hover-content">
                    <VisibilityIcon />
                  </div>
                </div>
                <img className="img-fluid" src={item.image} alt={item.title} />
              </a>
              <div className="portfolio-caption">
                <div className="portfolio-caption-heading">{item.title}</div>
                <div className="portfolio-caption-subheading text-muted">
                  {item.category.name}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="text-center mt-2">
        <Loader
          type="TailSpin"
          color="#00BFFF"
          height={100}
          width={100}
          timeout={10000}
          visible={isLoading}
        />
      </div>

      {portfolios.length === 0 && !isLoading && (
        <div className="alert alert-info p-3 mt-4 text-center">
          <strong>No Portfolio found in this section !!</strong>
        </div>
      )}

      {/* Modal */}
      <Modal
        show={modalShow}
        onHide={() => setModalShow(false)}
        dialogClassName="modal-large"
        aria-labelledby="example-custom-modal-styling-title"
        size="lg"
        centered
      >
        <PortfolioSingle item={item} onClose={() => setModalShow(false)} />
      </Modal>
    </>
  );
};

export default PortfolioList;
