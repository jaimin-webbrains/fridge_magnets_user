import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getSlugCategories } from "services/categoryServices";
import NavigationActions from "redux/navigation/actions";
import { withRouter } from "react-router-dom";
import { compose } from "redux";
import { connect } from "react-redux";
import AuthActions from "redux/auth/actions";
import { getSlugByProduct } from "services/productServices";
import Detail from "./detail";
import Artwork from "./artwork";
import Userdetail from "./userdetail";
import Markers from "./markers";
const { success, error, fetching } = NavigationActions;
const { setuser } = AuthActions;

function Size(props) {
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
  const { slug } = useParams();
  // console.log("hgh", useParams());
  const [product, setProduct] = useState([]);
  const [step, setStep] = useState(1);
  const [alldata, setAlldata] = useState([
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

  // const getData = async () => {
  //   await getSlugByProduct(token, slug).then((data) => {
  //     console.log(data.data, "jgjg");
  //     if (data.success) {
  //       setProduct(data.data);
  //       success();
  //     } else {
  //       error(data.message);
  //     }
  //   });
  // };

  // useEffect(() => {
  //   getData();
  // }, [slug]);
  console.log(alldata, "khjh");
  return (
    <>
      {step === 1 ? (
        <>
          <div className='row title'>
            <h3>Looking for something different ?</h3>
            <h4>What Size are you looking for ?</h4>
          </div>
          <div className='row'>
            <div className='label'>
              <input
                id='artwork1'
                type='radio'
                name='r1'
                className='mr-1'
                onChange={(e) => {
                  setAlldata({ size: "Small Business Card 70 by 50mm" });
                }}
              />
              Small Business Card 70 by 50mm
            </div>
            <div className='label'>
              <input
                id='artwork2'
                type='radio'
                name='r1'
                className='mr-1'
                onChange={(e) => {
                  setAlldata({ size: "A6 magnet 148mm by 105mm" });
                }}
              />
              A6 magnet 148mm by 105mm
            </div>
            <div className='label'>
              <input
                id='artwork2'
                type='radio'
                name='r1'
                className='mr-1'
                onChange={(e) => {
                  setAlldata({ size: "DL magnet 210 by 97mm" });
                }}
              />
              DL magnet 210 by 97mm
            </div>
            <div className='label'>
              <input
                id='artwork2'
                type='radio'
                name='r1'
                className='mr-1'
                onChange={(e) => {
                  setAlldata({ size: "DLS 168mm by 78.5mm" });
                }}
              />
              DLS 168mm by 78.5mm
            </div>
            <div className='label'>
              <input
                id='artwork2'
                type='radio'
                name='r1'
                className='mr-1'
                onChange={(e) => {
                  setAlldata({ size: "Business Card Magnet 90mm by 55mm" });
                }}
              />
              Business Card Magnet 90mm by 55mm
            </div>
            <div className='label'>
              <input
                id='artwork2'
                type='radio'
                name='r1'
                className='mr-1'
                onChange={(e) => {
                  setAlldata({ size: "Car" });
                }}
              />
              Car
            </div>
            <div className='label'>
              <input
                id='artwork2'
                type='radio'
                name='r1'
                className='mr-1'
                onChange={(e) => {
                  setAlldata({ size: "House" });
                }}
              />
              House
            </div>
            <div className='label'>
              <input
                id='artwork2'
                type='radio'
                name='r1'
                className='mr-1'
                onChange={(e) => {
                  setAlldata({ size: "Light Bulb" });
                }}
              />
              Light Bulb
            </div>
            <div className='label'>
              <input
                id='artwork2'
                type='radio'
                name='r1'
                className='mr-1'
                onChange={(e) => {
                  setAlldata({ size: "Truck" });
                }}
              />
              Truck
            </div>
            <div className='label'>
              <input
                id='artwork2'
                type='radio'
                name='r1'
                className='mr-1'
                onChange={(e) => {
                  setAlldata({ size: "Van" });
                }}
              />
              Van
            </div>
            <div className='label'>
              <input
                id='artwork2'
                type='radio'
                name='r1'
                className='mr-1'
                onChange={(e) => {
                  setAlldata({ size: "Tooth" });
                }}
              />
              Tooth
            </div>
            <div className='label'>
              <input
                id='artwork2'
                type='radio'
                name='r1'
                className='mr-1'
                onChange={(e) => {
                  setAlldata({ size: "Love Heart" });
                }}
              />
              Love Heart
            </div>
            <div className='label'>
              <input
                id='artwork2'
                type='radio'
                name='r1'
                className='mr-1'
                onChange={(e) => {
                  setAlldata({ size: "Others" });
                }}
              />
              Others
            </div>
          </div>
          <div className='row title'>
            <h4>Still can't find what you are looking for ?</h4>
          </div>
          <div className='row title mb-4'>
            <div className='col-8 pl-0'>
              <textarea
                className='form-control'
                onChange={(e) => {
                  setAlldata({ ...alldata, explain: e.target.value });
                }}
              ></textarea>
            </div>
          </div>
          <div className='row wanting'>
            <div className='col-12 pl-0'>
              <div className='my-2'>
                <h4 className='main-title'>How many are you wanting ?</h4>
                <select
                  // style={{ width: "450px" }}
                  onChange={(e) => {
                    // onhandlechange(e);
                    setAlldata({ ...alldata, quntity: e.target.value });
                  }}
                >
                  <option>500</option>
                  <option>1000</option>
                  <option>1500</option>
                  <option>2000</option>
                  <option>2500</option>
                  {/* {product.map((val) => {
          return <option>{val.product_quantity}</option>;
        })} */}
                </select>
              </div>
            </div>
            <div className='col-8'>
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
                    setStep(step + 1);
                    // setAlldata({ ...alldata, quntity: quntity.quntity1 });
                  }}
                >
                  Next
                </button>
              </div>
            </div>
          </div>
        </>
      ) : step === 2 ? (
        <Markers data={{ step, setStep, alldata, setAlldata }} />
      ) : (
        <Userdetail data={{ setStep, step, alldata, setAlldata }} />
      )}
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
)(Size);
