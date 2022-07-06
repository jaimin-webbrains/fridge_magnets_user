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
import { Collapse, Button, CardBody, Card } from "reactstrap";

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

const { changeTheme } = themeActions;
const { sidebarMini } = settingactions;

const DashboardLayout = (props) => {
  const [toggle1, settoggle] = useState({ collapse: true });
  const [toggle2, settoggle2] = useState({ collapse: false });
  const toggle = () => {
    settoggle({ collapse: !toggle1.collapse });
  };
  const toggleset = () => {
    settoggle2({ collapse: !toggle2.collapse });
  };
  return (
    <>
      <div className='container-fuild full-height'>
        <div className='sticky-nav'>
          <div className='row'>
            <a>
              <img
                src='https://wholesale-magnets.com.au/wp-content/uploads/2021/03/WM_website_banner-01-scaled.jpg'
                width='100%'
                height='auto'
              ></img>
            </a>
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
                      <a class='nav-link' href='#'>
                        HOME <span class='sr-only'>(current)</span>
                      </a>
                    </li>
                    <li class='nav-item'>
                      <a class='nav-link' href='#'>
                        FRIDGE MAGNETS
                      </a>
                    </li>
                    <li class='nav-item'>
                      <a class='nav-link' href='#'>
                        GALLARY
                      </a>
                    </li>
                    <li class='nav-item'>
                      <a class='nav-link' href='#'>
                        NEWS
                      </a>
                    </li>
                    <li class='nav-item'>
                      <a class='nav-link' href='#'>
                        ABOUT US
                      </a>
                    </li>
                    <li class='nav-item'>
                      <a class='nav-link' href='#'>
                        CONTACT US
                      </a>
                    </li>
                  </ul>
                </div>
              </nav>
            </div>
          </div>
        </div>
        <div className='row mt-3 content'>
          <div className='col-9 mx-auto'>
            <div className='row'>
              <div className='col-lg-3 col-md-12 col-sm-12 mb-3'>
                <div className='menu'>
                  <div
                    onClick={() => {
                      toggle();
                    }}
                    className='collpase '
                  >
                    <Button
                    // onClick={() => {
                    //   toggle();
                    // }}
                    >
                      <DehazeIcon className='f-size' />
                    </Button>
                    <span>FRIDGE MAGNETS PRODUCTS</span>
                    <Button
                    // color='primary'
                    // onClick={() => {
                    //   toggle();
                    // }}
                    // style={{ marginBottom: "1rem" }}
                    >
                      {toggle1.collapse === true ? (
                        <RemoveIcon className='f-size' />
                      ) : (
                        <AddIcon className='f-size' />
                      )}
                    </Button>
                  </div>
                  <div>
                    <Collapse isOpen={toggle1.collapse}>
                      <Card>
                        <ul className='primary-menu'>
                          <li>Calendar Fridge Magnets</li>
                          <li>House Shaped Fridge Magnets</li>
                          <li>Important/Emergency Number Fridge Magnets</li>
                          <li>Business Card Magnets</li>
                          <li>Kitchen Fridge Magnets</li>
                          <li>First Aid / Medical Fridge Magnets</li>
                          <li>Financial Year Calendar Magnets</li>
                          <li>Shopping List / To Do Lists</li>
                        </ul>
                        <div
                          onClick={() => {
                            toggleset();
                          }}
                          className='collpase'
                        >
                          {/* <Button
                            onClick={() => {
                              toggleset();
                            }}
                          >
                            <DehazeIcon className='f-size' />
                          </Button> */}
                          <span>MORE FRIDGE MAGNETS</span>
                          <Button
                          // color='primary'
                          // onClick={() => {
                          //   toggleset();
                          // }}
                          // style={{ marginBottom: "1rem" }}
                          >
                            {toggle2.collapse === true ? (
                              <RemoveIcon className='f-size' />
                            ) : (
                              <AddIcon className='f-size' />
                            )}
                          </Button>
                        </div>
                      </Card>
                    </Collapse>
                  </div>

                  <div className=''>
                    <Collapse isOpen={toggle2.collapse}>
                      <Card>
                        <ul className='primary-menu'>
                          <li>Air Fresheners</li>
                          <li>Christmas Cards</li>
                          <li>DL Cardboard With Magnet Strip</li>
                          <li>Information Fridge Magnets</li>
                          <li>Photo Frame Fridge Magnets</li>
                          <li>Promotional Fridge Magnets</li>
                          <li>Invitations - Special Event Fridge Magnets</li>
                        </ul>
                      </Card>
                    </Collapse>
                  </div>
                </div>
              </div>
              <div className='col-lg-8 col-md-12 col-sm-12'>
                <Content />
                {/* <Detail /> */}
                {/* <Artwork /> */}
                {/* <Userdetail /> */}
              </div>
            </div>
          </div>
        </div>
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
              <li>FRIDGE MAGNETS</li>
              <li>BUSINESS CARD MAGNETS</li>
              <li>CALENDAR MAGNETS</li>
              <li>GRAPHIC DESIGN</li>
              <li>PRINTING & MORE</li>
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
                  <div>admin@wholesale-magnets.com.au</div>
                </div>
              </li>
              <li>
                <div className='icon'>
                  <img src='https://wholesale-magnets.com.au/wp-content/uploads/2020/06/phone-1.png'></img>
                </div>
                <div>1300 135 906</div>
              </li>
              <li>
                <div className='icon'>
                  <img src='https://wholesale-magnets.com.au/wp-content/uploads/2020/06/pin-1.png'></img>
                </div>
                <div>Shop 8a/1 Exchange Parade, Narellan NSW 2567</div>
              </li>
            </ul>
          </div>
          <div className='col-lg-3 col-md-6 col-sm-12'>
            <div style={{ width: "300px", height: "240px" }}>
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
