import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useForm } from "react-hook-form";
import Loader from "react-loader-spinner";
import { storeContactAction } from "../../../store/actions/contact/ContactAction";
import HTMLParser from "../../partials/html-parser/HTMLParser";

const Contact = () => {
  const { register, handleSubmit, errors, reset } = useForm();
  const dispatch = useDispatch();

  const onSubmit = (data) => {
    dispatch(storeContactAction(data));
  };

  const isLoading = useSelector((state) => state.ContactReducer.isLoading);
  const status = useSelector((state) => state.ContactReducer.status);
  const message = useSelector((state) => state.ContactReducer.message);
  const formData = { name: "", email: "", phone: "", subject: "", message: "" };

  useEffect(() => {
    if (status && message.length > 0) {
      reset(formData);
    }
  }, [message, status, reset, formData]);

  return (
    <>
      {status === false && message.length > 0 && (
        <div className="alert alert-danger ml-5 mr-5">
          <HTMLParser data={message} />
        </div>
      )}
      {status === true && message.length > 0 && (
        <div className="alert alert-success ml-5 mr-5">
          <HTMLParser data={message} />
        </div>
      )}
      <form
        id="contactForm"
        name="sentMessage"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="row align-items-stretch mb-5">
          <div className="col-md-6">
            <div className="form-group">
              <input
                className="form-control"
                name="name"
                placeholder="Your Name *"
                ref={register({ required: true })}
              />
              {errors.name && (
                <p className="text-danger text-left">
                  <span>Please give your name</span>
                </p>
              )}
            </div>
            <div className="form-group">
              <input
                className="form-control"
                name="email"
                placeholder="Your Email *"
                ref={register({ required: true })}
              />
              {errors.email && (
                <p className="text-danger text-left">
                  <span>Please give your email address</span>
                </p>
              )}
            </div>
            <div className="form-group">
              <input
                className="form-control"
                name="phone"
                placeholder="Your Phone *"
                ref={register({ required: true })}
              />
              {errors.phone && (
                <p className="text-danger text-left">
                  <span>Please give your phone number</span>
                </p>
              )}
            </div>
            <div className="form-group mb-md-0">
              <input
                className="form-control"
                name="subject"
                placeholder="Your Subject *"
                ref={register({ required: true })}
              />
              {errors.subject && (
                <p className="text-danger text-left">
                  <span>Please give your subject</span>
                </p>
              )}
            </div>
          </div>
          <div className="col-md-6">
            <div className="form-group form-group-textarea mb-md-0">
              <textarea
                className="form-control"
                name="message"
                placeholder="Your Message *"
                ref={register({ required: true })}
              ></textarea>
              {errors.message && (
                <p className="text-danger text-left">
                  <span>Please give your message</span>
                </p>
              )}
            </div>
          </div>
        </div>
        <div className="text-center">
          {!isLoading && (
            <button
              className="btn btn-outline-primary btn-xl text-uppercase"
              type="submit"
            >
              Send Message
            </button>
          )}

          {isLoading && (
            <button
              className="btn btn-outline-primary btn-xl text-uppercase cursor-text"
              type="button"
            >
              Sending{" "}
              <Loader type="ThreeDots" color="#FFF" height={20} width={20} />
            </button>
          )}
        </div>
      </form>
    </>
  );
};

export default Contact;
