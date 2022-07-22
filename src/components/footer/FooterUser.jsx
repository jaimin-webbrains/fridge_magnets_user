import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "../../assets/css/dashboardlayout.css";
import NavigationActions from "redux/navigation/actions";
import { withRouter } from "react-router-dom";
import { compose } from "redux";
import { connect } from "react-redux";
import AuthActions from "redux/auth/actions";
import { getCategories } from "services/categoryServices";

const { success, error, fetching } = NavigationActions;
const { setuser } = AuthActions;

function FooterUser(props) {
  const { settingdata, token } = props;
  const [pathname, setpathname] = useState(true);
  // const { pathname } = useLocation();
  // window.addEventListener("scroll", function() {
  //   const scrollFromTop = window.pageYOffset + 100;
  // });

  const [parentcate, setparentcate] = useState([]);
  const [subcate, setsubcate] = useState([]);
  const [subprinting, setsubprinting] = useState([]);

  const getcategorise = async () => {
    await getCategories(token).then(data => {
      const ans = data.data?.filter(val => {
        return val.parent_id === 0;
      });
      const subcat = data.data?.filter(val => {
        return val.parent_id === 1;
      });
      const subcatprinting = data.data?.filter(val => {
        return val.parent_id === 2;
      });
      setsubprinting(subcatprinting);
      setparentcate(ans);
      setsubcate(subcat);

      if (data.success) {
        success();
        // setCategoryOptions(
        //   data.data.map((val) => ({ value: val.id, label: val.name }))
        // );
      } else {
        error(data.message);
      }
    });
  };
  useEffect(() => {
    getcategorise();
  }, []);

  console.log("subcat====>>>>>>>>", subcate);

  useEffect(() => {
    window.scrollTo({ top: 100, left: 0, behavior: "smooth" });
  }, [pathname]);
  return (
    <div>
      <div className="row footer">
        <div className="col-lg-3 col-md-6 col-sm-12">
          <h2>LET UP HELP</h2>
          <ul className="footer-menu">
            <li>ARTWORK INFO & UPLOADS</li>
            <li>FAQ’S</li>
            <li>
              <Link to="/gallery">GALLERY</Link>
            </li>
            <li>
              <Link to="/news">NEWS</Link>
            </li>
            <li>
              <Link to="/about-us">ABOUT US</Link>
            </li>
          </ul>
        </div>
        <div className="col-lg-3 col-md-6 col-sm-12">
          <h2>WHAT WE OFFER</h2>
          <ul className="footer-menu">
            <li>
              <Link to="/categories">FRIDGE MAGNETS</Link>
            </li>

            {subcate.map((val, index) => {
              return index < 2 ? (
                <li className="text-uppercase">
                  <Link to={`/categories/${val.name}`}>{val.name}</Link>
                </li>
              ) : (
                <></>
              );
            })}
            {/* <li>BUSINESS CARD MAGNETS</li>
            <li>CALENDAR MAGNETS</li> */}

            <li>GRAPHIC DESIGN</li>
            <li>
              <Link to="/printing-products">PRINTING & MORE</Link>
            </li>
          </ul>
        </div>
        <div className="col-lg-3 col-md-6 col-sm-12">
          <h2>HEAD OFFICE</h2>
          <ul className="footer-menu1">
            <li>
              <div className="img-content">
                <div className="icon">
                  <img
                    src="https://wholesale-magnets.com.au/wp-content/uploads/2020/06/mail-1.png"
                    alt=""
                  ></img>
                </div>
              </div>
              <div className="content1">
                <div>{settingdata?.email}</div>
              </div>
            </li>
            <li>
              <div className="icon">
                <img
                  src="https://wholesale-magnets.com.au/wp-content/uploads/2020/06/phone-1.png"
                  alt=""
                ></img>
              </div>
              <div>{`${settingdata?.phone_no?.substring(
                0,
                4
              )} ${settingdata?.phone_no?.substring(
                4,
                7
              )} ${settingdata?.phone_no?.substring(7, 10)}`}</div>
            </li>
            <li>
              <div className="icon">
                <img
                  src="https://wholesale-magnets.com.au/wp-content/uploads/2020/06/pin-1.png"
                  alt=""
                ></img>
              </div>
              <div>Shop 8a/1 Exchange Parade, Narellan NSW 2567</div>
            </li>
          </ul>
        </div>
        <div className="col-lg-3 col-md-6 col-sm-12 mb-3">
          <div style={{ width: "300px", height: "240px" }} className="map">
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
        <div className="col-8 mx-auto text-center ">
          <div className="border-top">
            <p>COPYRIGHT 2022. ALL RIGHTS RESERVED.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

const mapStateToProps = state => {
  return {
    ...state.themeChanger,
    token: state.auth.accessToken,
    user: state.auth.user,
    isFetching: state.navigation.isFetching,
    settingdata: state.settingdata.sdata
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
