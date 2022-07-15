import React, { useEffect, useState } from "react";
import { getGallery } from "services/galleryService";
import NavigationActions from "redux/navigation/actions";
import { withRouter } from "react-router-dom";
import { compose } from "redux";
import { connect } from "react-redux";
import AuthActions from "redux/auth/actions";
import { getCategories } from "services/categoryServices";
import { sub } from "date-fns";
const { success, error, fetching } = NavigationActions;
const { setuser } = AuthActions;

function Gallery(props) {
  const {
    token,
    success,
    fetching,
    isFetching,
    error,
    setFieldValue,
    values,
    image,
    handleChange,
    handleSubmit,
    setValues,
    isValid,
    handleBlur,
    errors,
    touched,
    submitCount,
  } = props;

  const [parentcate, setparentcate] = useState([]);
  const [subcate, setsubcate] = useState([]);

  const getData = async () => {
    await getCategories(token).then((data) => {
      console.log(data.data, "jjhh");
      // const ans = data.data.filter((val) => {
      //   return val.parent_id === 0;
      // });
      // const subcat = data.data.filter((val) => {
      //   return val.parent_id !== 0;
      // });
      // setparentcate(ans);
      // setsubcate(subcat);
      setparentcate(data.data);
      if (data.success) {
        success();
        // setCategoryOptions(
        //   data.data.map((val) => ({ value: val.id, label: val.name }))
        // );
      } else {
        error();
      }
    });
    await getGallery(token).then((data) => {
      if (data.success) {
        console.log("hgjj", data.data);
        // setSetting(data.data[0]);
        // success();
      } else {
        // error();
      }
    });
  };
  console.log(parentcate, subcate, "nkhkh");

  useEffect(() => {
    getData();
  }, []);
  return (
    <>
      <div className='row'>
        {/* <div className='divstyle'> */}
        <select
          className='sstyle'
          onChange={(e) => {
            console.log(e.target.value, "ggygy");
          }}
        >
          {parentcate.map((val) => {
            return (
              <option className={val.parent_id == 0 ? "text-bold" : ""}>
                {val.name}
              </option>
            );
          })}
        </select>
        {/* </div> */}
      </div>
      <div className='row'>
        <div className='col-lg-6 col-md-6 col-sm-12'>
          <h3 className='h3style'>Gallery page</h3>
        </div>
        <div className='col-lg-6 col-md-6 col-sm-12'>
          <button>Get a Price</button>
        </div>
      </div>
      <div className='row'>{/* <div className='b-gallery'></div> */}</div>
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
)(Gallery);
