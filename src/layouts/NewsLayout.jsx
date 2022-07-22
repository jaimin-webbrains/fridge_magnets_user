import React, { useEffect, useRef, useState } from "react";

import dashboardRoutes from "routes/dashboardRoutes";

import "../assets/css/dashboardlayout.css";

import { Route, Switch } from "react-router-dom";
import { connect } from "react-redux";
import { ProtectedRoute } from "./../routes/ProtectedRoute";

import HeaderUser from "components/header/HeaderUser";
import FooterUser from "components/footer/FooterUser";

const NewsLayout = props => {
  const scrollRef = useRef();
  const btnshow = useRef();
  const scrollTo = () => scrollRef.current?.scrollTo(0, 0);
  useEffect(() => {
    // window.addEventListener("scroll", () => {
    //   if (window.scrollY > 400) {
    //     setshow(true);
    //   } else {
    //     setshow(false);
    //   }
    // });
    // if (btnshow.current.offsetTop - 100) {
    //   setshow(!show);
    // }
  }, [btnshow.current]);

  useEffect(() => {
    if (!scrollRef) {
      scrollTo();
    }
    // eslint-disable-next-line
  }, [scrollRef.current, document.body.scrollTop]);
  return (
    <>
      <div className="container-fuild full-height" ref={scrollRef}>
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
        <div>
          <a
            // href='#top'
            onClick={() => {
              scrollTo();
            }}
            className="add-fix-top active"
            // className={show ? "add-fix-top active" : "add-fix-top"}
          >
            <i className="fas fa-angle-up"></i>
          </a>
        </div>
      </div>
    </>
  );
};

const mapStateToProps = state => {
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
