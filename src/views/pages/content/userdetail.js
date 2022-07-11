import React, { useState } from "react";
import enhancer from "./enhancer/contentenhancer";
import NavigationActions from "redux/navigation/actions";
import { useHistory, withRouter } from "react-router-dom";
import { compose } from "redux";
import { connect } from "react-redux";
import AuthActions from "redux/auth/actions";
const { success, error, fetching } = NavigationActions;
const { setuser } = AuthActions;

function Userdetail(props) {
  console.log(props);
  const { alldata, setAlldata, psize } = props.data;
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
  const history = useHistory();
  const Error = (props) => {
    const field1 = props.field;
    if ((errors[field1] && touched[field1]) || submitCount > 0) {
      return (
        <span className={props.class ? props.class : "error-msg"}>
          {errors[field1]}
        </span>
      );
    } else {
      return <span />;
    }
  };
  const onsubmitdata = () => {
    if (isValid) {
      setAlldata({
        ...alldata,
        name: values.name,
        company: values.company,
        mobile_no: values.mobile_no,
        delivery_postcode: values.delivery_postcode,
        email: values.email,
      });
    }
  };
  console.log(values, "jhhj");
  const { step, setStep } = props.data;
  return (
    <>
      <div className='row wanting'>
        <div className='col-lg-9 col-md-12 col-sm-12 pl-0'>
          {!history.location.pathname.includes("/size") ? (
            <>
              <h4 className='p-title'>DL HOUSE SHAPE FRIDGE MAGNETS</h4>
              <h5>{psize}</h5>
              <h3 className='sms-title'>Get An Instant Price By SMS Now</h3>
            </>
          ) : (
            <>
              <h3 className='sms-title1'>Looking for something different ?</h3>
            </>
          )}

          <div className='my-2'>
            <h4 className='mb-4 y-title'>Your Details</h4>
            <form>
              <label className='d-block mt-2 mb-0 label'>Name:</label>
              <input
                id='name'
                type='text'
                name='name'
                className='form-control'
                // onChange={(e) => onhandlechange(e)}
                onBlur={handleBlur}
                onChange={handleChange}
                value={values?.name}
              />
              <Error field='name' />
              <label className='d-block mt-2 mb-0 label'>Company:</label>
              <input
                id='company'
                type='text'
                name='company'
                className='form-control'
                // onChange={(e) => onhandlechange(e)}
                onBlur={handleBlur}
                onChange={handleChange}
                value={values?.company}
              />
              <Error field='company' />
              <label className='d-block mt-2 mb-0 label'>
                Mobile(for SMS Quote):
              </label>
              <input
                id='mobile_no'
                type='text'
                name='mobile_no'
                className='form-control'
                // onChange={(e) => onhandlechange(e)}
                onBlur={handleBlur}
                onChange={handleChange}
                value={values?.mobile_no}
              />
              <Error field='mobile_no' />
              <label className='d-block mt-2 mb-0 label'>
                Delivery Postcode:
              </label>
              <input
                id='delivery_postcode'
                type='text'
                name='delivery_postcode'
                className='form-control'
                // onChange={(e) => onhandlechange(e)}
                onBlur={handleBlur}
                onChange={handleChange}
                value={values?.delivery_postcode}
              />
              <Error field='delivery_postcode' />
              <label className='d-block mt-2 mb-0 label'>Email:</label>
              <input
                id='email'
                type='text'
                name='email'
                className='form-control'
                // onChange={(e) => onhandlechange(e)}
                onBlur={handleBlur}
                onChange={handleChange}
                value={values?.email}
              />
              <Error field='email' />
            </form>
          </div>
          <div className='text-center mb-3'>
            <button
              type='button'
              class='btn btn-primary m-2'
              onClick={() => {
                setStep(step - 1);
              }}
            >
              Previous
            </button>
            <button
              type='button'
              class='btn btn-primary m-2'
              onClick={() => {
                onsubmitdata();
              }}
            >
              Get Price
            </button>
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
  enhancer,
  connect(mapStateToProps, { success, error, fetching, setuser })
)(Userdetail);
