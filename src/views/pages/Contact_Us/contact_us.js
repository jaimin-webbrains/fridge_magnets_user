import React, { useEffect, useRef, useState } from "react";
import { Link, useHistory, useLocation, useParams } from "react-router-dom";
import { getCategories } from "services/categoryServices";
import NavigationActions from "redux/navigation/actions";
import { withRouter } from "react-router-dom";
import { compose } from "redux";
import { connect, useDispatch } from "react-redux";
import AuthActions from "redux/auth/actions";
import enhancer from "./enhancer/contactus";
import { addContactData } from "services/contactusServices";
const { success, error, fetching } = NavigationActions;
const { setuser } = AuthActions;

function ContactUs(props) {
  const {
    token,
    success,
    fetching,
    // isFetching,
    values,
    handleChange,
    handleSubmit,
    isValid,
    handleBlur,
    errors,
    touched,
    submitCount
  } = props;
  const Error = props => {
    const field1 = props.field;
    if ((errors[field1] && touched[field1]) || submitCount > 0) {
      return (
        <span className={props.class ? props.class : "error-msg"}>
          {errors[field1]}
        </span>
      );
    } else {
      return <span />;
    }
  };
  const onsubmitdata = async e => {
    e.preventDefault();

    handleSubmit();
    let data = {
      ...values,
      name: values.name,
      email: values.email,
      mobile: values.mobile,
      messages: values.messages
    };
    if (isValid) {
      fetching();
      console.log("khjkk");
      await addContactData(token, data).then(data => {
        if (data.success) {
          // setdata(data.message);
          success(data.message);
          // props.history.push("/products");
        } else {
          // setdata(data.message);
          error(data.message);
        }
      });
    }
  };
  console.log("values", values);
  return (
    <>
      <div className="apus-breadscrumb1">
        <img
          src="http://wholesale-magnets.com.au/wp-content/uploads/2020/07/rsz_11wholesale_magnets_website-05_2-3.png"
          alt=""
        />
      </div>
      <div className="container">
        <div className="row mt-4 mb-5">
          <div className="col-lg-6 col-md-6 col-sm-12">
            <div class="widget-text-heading cnth3 center">
              <h3 class="title">Let us know what you’re looking for ! </h3>
              <div class="des">
                Our staff will call back later and answer your questions.{" "}
              </div>
            </div>
            <div className="row mt-5">
              <div className="col-6 mb-4">
                <input
                  id="name"
                  type="text"
                  name="name"
                  placeholder="Your name"
                  className="form-control"
                  // onChange={(e) => onhandlechange(e)}
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values?.name}
                />
                <Error field="name" />
              </div>
              <div className="col-6 mb-4">
                <input
                  id="email"
                  type="text"
                  name="email"
                  placeholder="Your Email"
                  className="form-control"
                  // onChange={(e) => onhandlechange(e)}
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values?.email}
                />
                <Error field="email" />
              </div>
              <div className="col-12 mb-4">
                <input
                  id="mobile"
                  type="text"
                  name="mobile"
                  placeholder="Mobile"
                  className="form-control"
                  // onChange={(e) => onhandlechange(e)}
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values?.mobile}
                />
                <Error field="mobile" />
              </div>
              <div className="col-12 mb-5">
                <textarea
                  id="messages"
                  name="messages"
                  cols="40"
                  rows="6"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values?.messages}
                  placeholder="Your message"
                  className="form-control "
                />
                <Error field="messages" />
              </div>
              <div className="col-12 mb-4 text-center">
                <button
                  className="btn-submit margin"
                  onClick={e => {
                    onsubmitdata(e);
                  }}
                >
                  SEND MESSAGE
                </button>
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-md-6 col-sm-12">
            <div style={{ width: "570px", height: "368px" }} className="map1">
              <iframe
                title="map"
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d13224.425236895639!2d150.748564!3d-34.041144!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6b12f1c1330b92db%3A0xeddccc08d1080aa9!2s8a%2F1%20Exchange%20Parade%2C%20Narellan%20NSW%202567%2C%20Australia!5e0!3m2!1sen!2sin!4v1658325147198!5m2!1sen!2sin"
                width="100%"
                height="100%"
                frameBorder="0"
                style={{ border: 0 }}
                allowFullScreen=""
                aria-hidden="false"
                tabIndex="0"
              />
            </div>
          </div>
        </div>
        <div className="row my-5">
          <div className="col-lg-3 col-md-6 col-sm-12">
            <div className="location-inner">
              <div className="fbox-icon">
                <img
                  className="img"
                  src="https://wholesale-magnets.com.au/wp-content/uploads/2020/07/phone-2.png"
                  alt="Image"
                />
              </div>
              <div className="location-content ">
                <h3 className="title">Phone</h3>
                <div className="description">1300 135 906</div>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-12">
            <div className="location-inner">
              <div className="fbox-icon">
                <img
                  className="img"
                  src="https://wholesale-magnets.com.au/wp-content/uploads/2020/07/marker-1.png"
                  alt="Image"
                />
              </div>
              <div className="location-content ">
                <h3 className="title">Address</h3>
                <div className="description">
                  Shop 8a/1 Exchange Parade, Narellan NSW 2567
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-12">
            <div className="location-inner">
              <div className="fbox-icon">
                <img
                  className="img"
                  src="https://wholesale-magnets.com.au/wp-content/uploads/2020/07/time.png"
                  alt="Image"
                />
              </div>
              <div className="location-content ">
                <h3 className="title">Working time</h3>
                <div className="description">09:00 am to 05:00 pm</div>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-12">
            <div className="location-inner">
              <div className="fbox-icon">
                <img
                  className="img"
                  src="https://wholesale-magnets.com.au/wp-content/uploads/2020/07/mail-2.png"
                  alt="Image"
                />
              </div>
              <div className="location-content ">
                <h3 className="title">Email</h3>
                <div className="description description1">
                  admin@wholesale-magnets.com.au
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

const mapStateToProps = state => {
  return {
    ...state.themeChanger,
    token: state.auth.accessToken,
    user: state.auth.user,
    isFetching: state.navigation.isFetching
  };
};
// const mapDispatchToProps = () => {};

export default compose(
  withRouter,
  enhancer,
  connect(
    mapStateToProps,
    { success, error, fetching, setuser }
    // mapDispatchToProps
  )
)(ContactUs);
