import React from "react";
import { Link, useHistory, useParams } from "react-router-dom";

import "../../assets/css/dashboardlayout.css";
import NavigationActions from "redux/navigation/actions";
import { withRouter } from "react-router-dom";
import { compose } from "redux";
import { connect } from "react-redux";
import AuthActions from "redux/auth/actions";

import settingAction from "redux/settingdata/actions";
const { settingdata } = settingAction;
const { success, error, fetching } = NavigationActions;
const { setuser } = AuthActions;

function FooterUser(props) {
  const {
    token,
    success,
    fetching,
    isFetching,
    error,
    setFieldValue,
    values,
    settingdata,
    handleChange,
    handleSubmit,
    setValues,
    isValid,
    handleBlur,
    errors,
    touched,
    submitCount,
  } = props;
  return (
    <div>
      <div className='row footer'>
        <div className='col-lg-3 col-md-6 col-sm-12'>
          <h2>LET UP HELP</h2>
          <ul className='footer-menu'>
            <li>ARTWORK INFO & UPLOADS</li>
            <li>FAQ’S</li>
            <li>GALLERY</li>
            <li>NEWS</li>
            <li>ABOUT US</li>
          </ul>
        </div>
        <div className='col-lg-3 col-md-6 col-sm-12'>
          <h2>WHAT WE OFFER</h2>
          <ul className='footer-menu'>
            <li>
              <Link to='/categories'>FRIDGE MAGNETS</Link>
            </li>
            <li>BUSINESS CARD MAGNETS</li>
            <li>CALENDAR MAGNETS</li>
            <li>GRAPHIC DESIGN</li>
            <li>
              <Link to='/printing-products'>PRINTING & MORE</Link>
            </li>
          </ul>
        </div>
        <div className='col-lg-3 col-md-6 col-sm-12'>
          <h2>HEAD OFFICE</h2>
          <ul className='footer-menu1'>
            <li>
              <div className='img-content'>
                <div className='icon'>
                  <img src='https://wholesale-magnets.com.au/wp-content/uploads/2020/06/mail-1.png'></img>
                </div>
              </div>
              <div className='content1'>
                <div>{settingdata.email}</div>
              </div>
            </li>
            <li>
              <div className='icon'>
                <img src='https://wholesale-magnets.com.au/wp-content/uploads/2020/06/phone-1.png'></img>
              </div>
              <div>{settingdata.phone_no}</div>
            </li>
            <li>
              <div className='icon'>
                <img src='https://wholesale-magnets.com.au/wp-content/uploads/2020/06/pin-1.png'></img>
              </div>
              <div>Shop 8a/1 Exchange Parade, Narellan NSW 2567</div>
            </li>
          </ul>
        </div>
        <div className='col-lg-3 col-md-6 col-sm-12 mb-3'>
          <div style={{ width: "300px", height: "240px" }} className='map'>
            <iframe
              src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.521260322283!2d106.8195613507864!3d-6.194741395493371!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f5390917b759%3A0x6b45e67356080477!2sPT%20Kulkul%20Teknologi%20Internasional!5e0!3m2!1sen!2sid!4v1601138221085!5m2!1sen!2sid'
              width='100%'
              height='100%'
              frameBorder='0'
              style={{ border: 0 }}
              allowFullScreen=''
              aria-hidden='false'
              tabIndex='0'
            />
          </div>
        </div>
        <div className='col-8 mx-auto text-center '>
          <div className='border-top'>
            <p>COPYRIGHT 2020. ALL RIGHTS RESERVED.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  console.log("hjhjhj", state);
  return {
    ...state.themeChanger,
    token: state.auth.accessToken,
    user: state.auth.user,
    isFetching: state.navigation.isFetching,
    settingdata: state.settingdata.sdata,
  };
};
// const mapDispatchToProps = () => {};

export default compose(
  withRouter,
  // enhancer,
  connect(
    mapStateToProps,
    { success, error, fetching, setuser }
    // mapDispatchToProps
  )
)(FooterUser);
