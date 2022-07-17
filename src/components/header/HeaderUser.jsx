import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
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
            width='100%'
            height='auto'
          />
          {/* </a> */}
        </div>
        <div className='row main-menu'>
          <div className='col-10 mx-auto'>
            <nav class='navbar navbar-expand-lg navbar-light'>
              {/* <a class='navbar-brand' href='#'>
                Navbar
              </a> */}
              <button
                class='navbar-toggler my-2'
                type='button'
                data-toggle='collapse'
                data-target='#navbarNav'
                aria-controls='navbarNav'
                aria-expanded='false'
                aria-label='Toggle navigation'
              >
                <span class='navbar-toggler-icon'></span>
              </button>
              <div class='collapse navbar-collapse' id='navbarNav'>
                <ul class='navbar-nav'>
                  <li class='nav-item active'>
                    <Link class='nav-link' to='/categories'>
                      HOME <span class='sr-only'>(current)</span>
                    </Link>
                  </li>
                  <li class='nav-item'>
                    <Link class='nav-link' to='/categories'>
                      FRIDGE MAGNETS
                    </Link>
                  </li>
                  <li class='nav-item'>
                    <Link class='nav-link' to='/gallery'>
                      GALLERY
                    </Link>
                  </li>
                  <li class='nav-item'>
                    <Link class='nav-link' to='/news'>
                      NEWS
                    </Link>
                  </li>
                  <li class='nav-item'>
                    <Link className='nav-link' to='/about-us'>
                      ABOUT US
                    </Link>
                  </li>
                  <li class='nav-item'>
                    <Link className='nav-link' to=''>
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
