import React from "react";

import dashboardRoutes from "routes/dashboardRoutes";

import "../assets/css/dashboardlayout.css";
import { Route, Switch, useHistory } from "react-router-dom";
import { connect } from "react-redux";
import { ProtectedRoute } from "./../routes/ProtectedRoute";

import HeaderUser from "components/header/HeaderUser";
import FooterUser from "components/footer/FooterUser";
import SideBarUser from "components/sidebar/SideBarUser";

const DashboardLayout = (props) => {
  const history = useHistory();
  console.log("jhjgg", history.location.pathname.includes("/gallery"));
  return (
    <>
      <div className='container-fuild full-height'>
        <HeaderUser />
        {history.location.pathname.includes("/gallery") ? (
          <div className='row'>
            <img
              src='https://wholesale-magnets.com.au/wp-content/uploads/2020/07/rsz_11wholesale_magnets_website-05_2-1.png'
              className='myimg'
              alt=''
            />
          </div>
        ) : null}
        <div className='row mt-3 content'>
          <div className='col-9 mx-auto'>
            <div className='row instant-price-main'>
              <SideBarUser />
              <div className='col-lg-8 col-md-12 col-sm-12'>
                <Switch>
                  <ProtectedRoute {...props}>
                    {dashboardRoutes.map((prop, key) => {
                      return (
                        <Route
                          exact
                          path={prop.path}
                          component={prop.component}
                          key={key}
                        />
                      );
                    })}
                  </ProtectedRoute>
                </Switch>
                {/* {props.children()} */}
                {/* <Content /> */}
                {/* <Detail /> */}
                {/* <Artwork /> */}
                {/* <Userdetail /> */}
              </div>
            </div>
          </div>
        </div>
        <FooterUser />
      </div>
    </>
  );
};

const mapStateToProps = (state) => {
  // return {
  //   ...state.themeChanger,
  //   LanguageSwitcher: state.LanguageSwitcher,
  //   locale: state.LanguageSwitcher.language.locale,
  //   authData: {
  //     token: state.auth.accessToken,
  //     isLogin: state.auth.isLogin,
  //   },
  // };
};

export default connect(mapStateToProps, {
  // changeTheme,
  // sidebarMini,
})(DashboardLayout);
