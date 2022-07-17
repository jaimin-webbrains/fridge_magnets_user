import React from "react";

import dashboardRoutes from "routes/dashboardRoutes";

import "../assets/css/dashboardlayout.css";

import { Route, Switch } from "react-router-dom";
import { connect } from "react-redux";
import { ProtectedRoute } from "./../routes/ProtectedRoute";

import HeaderUser from "components/header/HeaderUser";
import FooterUser from "components/footer/FooterUser";

const NewsLayout = (props) => {
  return (
    <>
      <div className='container-fuild full-height'>
        <HeaderUser />
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
})(NewsLayout);
