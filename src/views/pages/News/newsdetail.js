import React, { useEffect, useState } from "react";
import { Link, useHistory, useParams } from "react-router-dom";
import { getSlugCategories } from "services/categoryServices";
import NavigationActions from "redux/navigation/actions";
import { withRouter } from "react-router-dom";
import { compose } from "redux";
import { connect, useDispatch } from "react-redux";
import AuthActions from "redux/auth/actions";

import productimageAction from "redux/productimage/actions";
const { success, error, fetching } = NavigationActions;
const { setuser } = AuthActions;

const { image } = productimageAction;

function NewsDetails(props) {
  const {
    token,
    success,
    fetching,
    isFetching,
    error,
    setFieldValue,
    values,
    handleChange,
    handleSubmit,
    setValues,
    isValid,
    handleBlur,
    errors,
    touched,
    submitCount,
  } = props;
  const dispatch = useDispatch();

  const { slug, brand } = useParams();
  const history = useHistory();
  // console.log("hgh", useParams());
  const [product, setProduct] = useState([]);
  const [productBrand, setProductBrand] = useState([]);

  const [step, setStep] = useState(1);
  const [pdata, setPdata] = useState([]);
  const [alldata, setAlldata] = useState([
    // { cant_find_your_size: "false" },
    // {
    //   quntity: "",
    //   artwork: "",
    //   name: "",
    //   company: "",
    //   mobile_no: "",
    //   delivery_postcode: "",
    //   email: "",
    // }
  ]);

  return (
    <>
      <div className='apus-breadscrumb'>
        <img src='https://wholesale-magnets.com.au/wp-content/uploads/2020/07/rsz_11wholesale_magnets_website-05_2.png' />
      </div>
      <div className='container'>
        <div className='row my-5'>
          <div className='col-6'>
            <div className='cbody'>
              <h4 className='entrytitle'>Now Saving Agents On Printing Too</h4>
              <div style={{ marginBottom: "20px" }} className='d-flex autohor'>
                <div style={{ textTransform: "uppercase" }}>
                  <span style={{ fontStyle: "italic" }}>by</span> MANAGER{" "}
                </div>
                <div>/</div>
                <div>March 1, 2021</div>
              </div>
              <div>
                <img
                  src='https://wholesale-magnets.com.au/wp-content/uploads/2020/07/flyers.jpg'
                  className='myimg'
                />
                <h4 style={{ fontSize: "19px", margin: "13px 0" }}>
                  Now Selling General Printing to ALL customers.
                </h4>
                <p className='autohor' style={{ margin: "13px 0" }}>
                  Most of our customers would be unaware that during the past
                  few years we have been selling general printing to a select
                  few long term customers. We’ve kept it under wraps whilst we
                  built our backend IT infrastructure, which will allow us to
                  offer the very BEST PRICES and GREAT SERVICE to our customers.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className='row my-4'>
          <div className='col-12 justify-content-between'>
            <span className='entry-tag'>WSM-Blogs</span>
            <div></div>
          </div>
        </div>
        <div className='row detail'>
          <div className='col-12'>
            <h4 className='title-mb'>Leave a Comment</h4>
          </div>
          <div className='col-12'>
            <form>
              <div className='marginb'>
                Your email address will not be published.
              </div>
              <div className='row'>
                <div className='col-6'>
                  <input
                    type='text'
                    placeholder='name*'
                    className='form-control marginb'
                  />
                </div>
                <div className='col-6'>
                  <input
                    type='text'
                    placeholder='Email*'
                    className='form-control marginb'
                  />
                </div>
              </div>
              <div className='row'>
                <div className='col-12'>
                  <label htmlFor='c1'>
                    <input
                      type='checkbox'
                      name='c1'
                      id='c1'
                      className='mr-2 marginb'
                    />
                    Save my name, email, and website in this browser for the
                    next time I comment.
                  </label>
                </div>
              </div>
              <div className='row'>
                <div className='col-12'>
                  <textarea
                    rows='7'
                    placeholder='Your Comment'
                    className='form-control marginb'
                  />
                </div>
                <div className='col-12'>
                  <input
                    type='submit'
                    className='btn-submit marginb'
                    value='Submit Comment'
                  />
                </div>
              </div>
            </form>
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
  };
};

export default compose(
  withRouter,
  // enhancer,
  connect(mapStateToProps, { success, error, fetching, setuser })
)(NewsDetails);
