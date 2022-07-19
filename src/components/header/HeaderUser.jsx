import React, { useEffect, useState } from "react";
import { Link, NavLink, useHistory } from "react-router-dom";
import NavigationActions from "redux/navigation/actions";
import { withRouter } from "react-router-dom";
import { compose } from "redux";
import { connect } from "react-redux";
import AuthActions from "redux/auth/actions";
import "../../assets/css/dashboardlayout.css";
import { getsetting } from "services/settingservices";
import { useDispatch } from "react-redux";
import settingAction from "redux/settingdata/actions";
const { settingdata } = settingAction;
const { success, error, fetching } = NavigationActions;
const { setuser } = AuthActions;

function HeaderUser(props) {
  const { token, success, error } = props;

  const [setting, setSetting] = useState();
  const dispatch = useDispatch();
  const history = useHistory();

  const getData = async () => {
    await getsetting(token).then((data) => {
      if (data.success) {
        setSetting(data.data[0]);
        dispatch(settingdata(data.data[0]));
        success();
      } else {
        error();
      }
    });
  };

  useEffect(() => {
    getData();
  }, []);
  return (
    <>
      <div className='sticky-nav'>
        <div className='row'>
          {/* <a> */}
          <img
            src={`${process.env.REACT_APP_BACKEND_UPLOAD_PATH}/${setting?.logo}`}
            alt=''
            className='main-logo'
          />
          {/* </a> */}
        </div>
        <div className='row main-menu'>
          <div className='col-10 mx-auto'>
            <nav className='navbar navbar-expand-lg navbar-light'>
              {/* <a className='navbar-brand' href='#'>
                Navbar
              </a> */}
              <button
                className='navbar-toggler my-2'
                type='button'
                data-toggle='collapse'
                data-target='#navbarNav'
                aria-controls='navbarNav'
                aria-expanded='false'
                aria-label='Toggle navigation'
              >
                <span className='navbar-toggler-icon'></span>
              </button>
              <div className='collapse navbar-collapse' id='navbarNav'>
                <ul className='navbar-nav'>
                  <li className='nav-item'>
                    <Link
                      className={
                        history.location.pathname.includes("home")
                          ? "nav-link is-active"
                          : "nav-link"
                      }
                      to='/home'
                    >
                      HOME
                    </Link>
                  </li>
                  <li className='nav-item'>
                    <Link
                      class={
                        history.location.pathname.includes("/categories/")
                          ? "nav-link is-active"
                          : "nav-link"
                      }
                      to='/categories/'
                    >
                      FRIDGE MAGNETS
                    </Link>
                  </li>
                  <li className='nav-item'>
                    <Link
                      className={
                        history.location.pathname.includes("gallery")
                          ? "nav-link is-active"
                          : "nav-link"
                      }
                      to='/gallery'
                    >
                      GALLERY
                    </Link>
                  </li>

                  <li className='nav-item'>
                    <Link
                      className={
                        history.location.pathname.includes("news")
                          ? "nav-link is-active"
                          : "nav-link"
                      }
                      to='/news'
                    >
                      NEWS
                    </Link>
                  </li>
                  <li className='nav-item'>
                    <Link
                      className={
                        history.location.pathname.includes("about-us")
                          ? "nav-link is-active"
                          : "nav-link"
                      }
                      to='/about-us'
                    >
                      ABOUT US
                    </Link>
                  </li>
                  <li className='nav-item'>
                    <Link
                      className='nav-link'
                      // className={
                      //   history.location.pathname.includes("categories")
                      //     ? "nav-link is-active"
                      //     : "nav-link"
                      // }
                      to=''
                    >
                      CONTACT US
                    </Link>
                  </li>
                </ul>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </>
  );
}
const mapStateToProps = (state) => {
  return {
    ...state.themeChanger,
    token: state.auth.accessToken,
    user: state.auth.user,
    isFetching: state.navigation.isFetching,
    image: state.productimage.image_src,
  };
};

export default compose(
  withRouter,
  // enhancer,
  connect(mapStateToProps, { success, error, fetching, setuser })
)(HeaderUser);
