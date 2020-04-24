import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import SortIcon from "@material-ui/icons/Sort";

import Modal from "react-bootstrap/Modal";
import Loader from "react-loader-spinner";

import HTMLParser from "../../../components/partials/html-parser/HTMLParser";
import { getAboutHistoryAction } from "../../../store/actions/lifeStories/AboutAction";
import DateRange from "../../partials/date-generator/date-range/DateRange";
import LifeStoryDetail from "./LifeStoryDetail";
import SocialLink from "./social-links/SocialLink";

const LifeHistory = () => {
  const [modalShow, setModalShow] = useState(false);
  const [item, setItem] = useState({});
  const [order, setOrder] = useState("asc");
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAboutHistoryAction());
  }, [dispatch]);

  const about = useSelector(state => state.AboutReducer.about);
  const lifeStories = useSelector(state => state.AboutReducer.lifeStoryList);
  const isLoading = useSelector(state => state.AboutReducer.isLoading);

  const viewDetails = item => {
    setItem(item);
    if (!modalShow) setModalShow(true);
  };
  const sortStory = () => {
    if (order === "asc") {
      setOrder("desc");
      dispatch(getAboutHistoryAction("desc"));
    } else {
      setOrder("asc");
      dispatch(getAboutHistoryAction("asc"));
    }
  };
  return (
    <>
      <div className="text-center">
        <h2 className="section-heading text-uppercase">About Me</h2>
        <h3 className="section-subheading text-muted mb-2">
          {about.short_description}
          <br />
          <HTMLParser data={about.description} />
        </h3>
        <SocialLink data={about} />
        <div className="float-right" onClick={() => sortStory()}>
          <button
            className={order === "asc" ? "btn btn-primary" : "btn btn-info"}
            title="Sort life story. Click to toggle events !!"
          >
            <SortIcon />
            {order === "asc" && <span>Old - Present</span>}
            {order === "desc" && <span>Present - Old</span>}
          </button>
        </div>
      </div>

      <div className="text-center mt-5">
        <Loader
          type="TailSpin"
          color="#00BFFF"
          height={100}
          width={100}
          timeout={10000}
          visible={isLoading}
        />
      </div>

      <ul className="timeline">
        {lifeStories.map((item, index) => (
          <li
            className={index % 2 !== 0 ? "timeline-inverted" : ""}
            key={index}
          >
            <div
              className="timeline-image"
              onMouseOver={() => viewDetails(item)}
            >
              <h4>{item.position}</h4>
              <h6>{item.institution}</h6>
            </div>
            <div className="timeline-panel">
              <div className="timeline-heading">
                <h4>
                  <DateRange
                    start_date={item.start_date}
                    end_date={item.end_date}
                  />{" "}
                  {item.is_current !== 0 && (
                    <span className="badge badge-info"> Currently Working</span>
                  )}
                </h4>
                <h4 className="subheading">
                  {item.position} at {item.institution}
                </h4>
              </div>
              <div className="timeline-body">
                <p className="text-muted">{item.short_description}</p>
              </div>
            </div>
          </li>
        ))}
        {lifeStories.length > 0 && (
          <li className="timeline-inverted">
            <div className="timeline-image">
              <h4>
                <Link to="/contact">
                  {" "}
                  Be Part <br /> Of my Story !
                  <br /> Contact Me
                </Link>
              </h4>
            </div>
          </li>
        )}
      </ul>

      <Modal
        show={modalShow}
        onHide={() => setModalShow(false)}
        aria-labelledby="example-custom-modal-styling-title"
        size={"lg"}
        centered
      >
        <LifeStoryDetail item={item} onClose={() => setModalShow(false)} />
      </Modal>
    </>
  );
};

export default LifeHistory;
