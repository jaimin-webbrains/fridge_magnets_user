import React, { useEffect } from "react";
import enhancer from "./enhancer/settingenhancer";
import NavigationActions from "redux/navigation/actions";
import { Link, withRouter } from "react-router-dom";
import { compose } from "redux";
import { connect } from "react-redux";
import AuthActions from "redux/auth/actions";
import { Button } from "reactstrap";

import {
  // addsetting,
  getsetting,
  updatesetting,
} from "services/settingservices";
// import { toast } from "react-toastify";

const { success, error, fetching } = NavigationActions;
const { setuser } = AuthActions;

const Settings = (props) => {
  //VARIABLES
  const {
    token,
    success,

    error,
    values,
    handleChange,
    handleSubmit,
    setValues,
    // isValid,
    handleBlur,
    errors,
    touched,
    submitCount,
    setFieldValue,
  } = props;

  // const Error = (props) => {
  //   const field1 = props.field;
  //   if ((errors[field1] && touched[field1]) || submitCount > 0) {
  //     return (
  //       <span className={props.class ? props.class : "error-msg"}>
  //         {errors[field1]}
  //       </span>
  //     );
  //   } else {
  //     return <span />;
  //   }
  // };
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
  const handlesettingSubmit = async (e) => {
    e.preventDefault();
    handleSubmit();
    // var data = { ...values };
    var formData = new FormData();
    for (const val in values) {
      // if (val === "logo") {
      //   formData.append(val, JSON(values[val]));
      // } else {
      formData.append(val, values[val]);
      // }
    }

    // var colorData = {
    //   id: editData.id,
    //   color: values.color,
    // };
    // if (isValid) {
    //   fetching();
    //   isEdit
    //     ? updateColor(token, colorData).then((data) => {
    //         if (data.success) {
    //           success(data.message);
    //           onClose();
    //           toggleRefresh(true);
    //         } else {
    //           error(data.message);
    //         }
    //       }):
    updatesetting(token, formData).then((data) => {
      if (data.success) {
        success(data.message);
      } else {
        error(data.message);
      }
    });
    // addsetting(token, data).then((data) => {
    //   if (data.success) {
    //     success(data.message);
    //   } else {
    //     error(data.message);
    //   }
    // });
    // }
  };

  const get_Setting = async () => {
    await getsetting(token).then((data) => {
      if (data.success) {
        success(data.message);
        setValues(data.data[0]);
      } else {
        error(data.message);
      }
    });
  };
  // //USEEFFECTS

  useEffect(() => {
    get_Setting();

    // eslint-disable-next-line
  }, []);
  return (
    <>
      <div class='card'>
        <div class='card-header'>Footer Details</div>
        <div class='card-body'>
          <div className='container'>
            <div className='row'>
              <div className='col-12 mb-2'>
                {/* <span className=''>{`${id ? "Edit" : "Add"} Product`}</span> */}
              </div>
            </div>

            {/* ADD PRODUCT */}

            <div className='row'>
              <div className='col-md-4'>
                <div className='form-group'>
                  <label>
                    Phone Number <span className='error-msg'>*</span>
                  </label>
                  <input
                    type='text'
                    className='form-control react-form-input'
                    placeholder='Enter The Product Name'
                    id='phone_no'
                    onBlur={handleBlur}
                    onChange={handleChange}
                    value={values?.phone_no}
                  />
                  <Error field='phone_no' />
                </div>
              </div>
              <div className='col-md-4'>
                <div className='form-group'>
                  <label>
                    Email <span className='error-msg'>*</span>
                  </label>
                  <input
                    type='text'
                    className='form-control react-form-input'
                    placeholder='Enter The Product Name'
                    id='email'
                    onBlur={handleBlur}
                    onChange={handleChange}
                    value={values?.email}
                  />
                  <Error field='email' />
                </div>
              </div>
              <div className='col-md-4'>
                <div className='form-group'>
                  <label>
                    Logo <span className='error-msg'>*</span>
                  </label>
                  <input
                    type='file'
                    className='form-control react-form-input'
                    placeholder='Enter The Product Name'
                    id='logo'
                    onBlur={handleBlur}
                    onChange={(e) => {
                      setFieldValue("logo", e.target.files[0]);
                    }}
                    // value={values?.logo}
                  />
                  <span className='m-2'>
                    <Link
                      to={`${process.env.REACT_APP_BACKEND_URI_UPLOAD}/${values.logo}`}
                    >
                      {values.logo}
                    </Link>
                  </span>
                  <Error field='logo' />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class='card mt-3'>
        <div class='card-header'>Form Label</div>
        <div class='card-body'>
          <div className='container'>
            <div className='row'>
              <div className='col-12 mb-2'>
                {/* <span className=''>{`${id ? "Edit" : "Add"} Product`}</span> */}
              </div>
            </div>

            {/* ADD PRODUCT */}

            <div className='row'>
              <div className='col-md-4'>
                <label>
                  Artwork Label <span className='error-msg'>*</span>
                </label>
              </div>
            </div>
            <div className='row'>
              <div className='col-md-6'>
                <input
                  type='text'
                  className='form-control react-form-input'
                  placeholder='Enter The Product Name'
                  id='artwork_label1'
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values?.artwork_label1}
                />
                <Error field='artwork_label1' />
              </div>
              <div className='col-md-6'>
                <input
                  type='text'
                  className='form-control react-form-input'
                  placeholder='Enter The Product Name'
                  id='artwork_label2'
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values?.artwork_label2}
                />
                <Error field='artwork_label2' />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='row mt-2'>
        <div className='col-12 text-center'>
          <Button
            className='btn c-primary px-5'
            onClick={(e) => handlesettingSubmit(e)}
            type='button'
            // disabled={isFetching}
          >
            {/* {id ? "Edit" : "Add"} */}
            Save
          </Button>
        </div>
      </div>
    </>
  );
};
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
)(Settings);
