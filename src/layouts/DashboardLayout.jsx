import React, { useState, useRef, useMemo } from "react";
import Sidebar from "components/sidebar/Sidebar";
import HorizontalSidebar from "components/horizontalsidebar/HorizontalSidebar";
import ThemeSetting from "components/themesetting/ThemeSetting";
import dashboardRoutes from "routes/dashboardRoutes";
import Header from "components/header/Header";
import Footer from "components/footer/Footer";
import themeActions from "redux/themeChanger/actions.js";
import settingactions from "redux/themeSettings/actions";
import AppLocale from "languageProvider";
import "../assets/css/dashboardlayout.css";

import {
  drawerWidth,
  miniDrawerWidth,
  themeSettingDrawerWidth,
} from "helper/constant";
import { Route, Switch } from "react-router-dom";
import { connect } from "react-redux";
import { IntlProvider } from "react-intl";
import { ProtectedRoute } from "./../routes/ProtectedRoute";
import GlobalWrapper from "./global.style";
import LayoutSettings from "components/layoutsetting/LayoutSettings";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import DehazeIcon from "@mui/icons-material/Dehaze";
import Content from "views/pages/content/content";
import Detail from "views/pages/content/detail";
import Artwork from "views/pages/content/artwork";
import Userdetail from "views/pages/content/userdetail";
import HeaderUser from "components/header/HeaderUser";
import FooterUser from "components/footer/FooterUser";
import SideBarUser from "components/sidebar/SideBarUser";

const { changeTheme } = themeActions;
const { sidebarMini } = settingactions;

const DashboardLayout = (props) => {
  return (
    <>
      <div className='container-fuild full-height'>
        <HeaderUser />
        <div className='row mt-3 content'>
          <div className='col-9 mx-auto'>
            <div className='row'>
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
