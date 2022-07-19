import React, { useState } from "react";
import NavigationActions from "redux/navigation/actions";
import { withRouter } from "react-router-dom";
import { compose } from "redux";
import { connect } from "react-redux";
import AuthActions from "redux/auth/actions";
import Userdetail from "./userdetail";
import Markers from "./markers";
const { success, error, fetching } = NavigationActions;
const { setuser } = AuthActions;

function Size(props) {
  // const {
  //   token,
  //   success,
  //   fetching,
  //   isFetching,
  //   error,
  //   setFieldValue,
  //   values,
  //   handleChange,
  //   handleSubmit,
  //   setValues,
  //   isValid,
  //   handleBlur,
  //   errors,
  //   touched,
  //   submitCount,
  // } = props;
  // console.log("hgh", useParams());
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
              <label htmlFor='r1'>
                <input
                  id='r1'
                  type='radio'
                  name='r1'
                  className='mr-1'
                  onChange={(e) => {
                    setAlldata({ category: "Small Business Card 70 by 50mm" });
                  }}
                />
                Small Business Card 70 by 50mm
              </label>
            </div>
            <div className='label'>
              <label htmlFor='r2'>
                <input
                  id='r2'
                  type='radio'
                  name='r1'
                  className='mr-1'
                  onChange={(e) => {
                    setAlldata({ category: "A6 magnet 148mm by 105mm" });
                  }}
                />
                A6 magnet 148mm by 105mm
              </label>
            </div>
            <div className='label'>
              <label htmlFor='r3'>
                <input
                  id='r3'
                  type='radio'
                  name='r1'
                  className='mr-1'
                  onChange={(e) => {
                    setAlldata({ category: "DL magnet 210 by 97mm" });
                  }}
                />
                DL magnet 210 by 97mm
              </label>
            </div>
            <div className='label'>
              <label htmlFor='r4'>
                <input
                  id='r4'
                  type='radio'
                  name='r1'
                  className='mr-1'
                  onChange={(e) => {
                    setAlldata({ category: "DLS 168mm by 78.5mm" });
                  }}
                />
                DLS 168mm by 78.5mm
              </label>
            </div>
            <div className='label'>
              <label htmlFor='r5'>
                <input
                  id='r5'
                  type='radio'
                  name='r1'
                  className='mr-1'
                  onChange={(e) => {
                    setAlldata({
                      category: "Business Card Magnet 90mm by 55mm",
                    });
                  }}
                />
                Business Card Magnet 90mm by 55mm
              </label>
            </div>
            <div className='label'>
              <label htmlFor='r6'>
                <input
                  id='r6'
                  type='radio'
                  name='r1'
                  className='mr-1'
                  onChange={(e) => {
                    setAlldata({ category: "Car" });
                  }}
                />
                Car
              </label>
            </div>
            <div className='label'>
              <label htmlFor='r7'>
                <input
                  id='r7'
                  type='radio'
                  name='r1'
                  className='mr-1'
                  onChange={(e) => {
                    setAlldata({ category: "House" });
                  }}
                />
                House
              </label>
            </div>
            <div className='label'>
              <label htmlFor='r8'>
                <input
                  id='r8'
                  type='radio'
                  name='r1'
                  className='mr-1'
                  onChange={(e) => {
                    setAlldata({ category: "Light Bulb" });
                  }}
                />
                Light Bulb
              </label>
            </div>
            <div className='label'>
              <label htmlFor='r9'>
                <input
                  id='r9'
                  type='radio'
                  name='r1'
                  className='mr-1'
                  onChange={(e) => {
                    setAlldata({ category: "Truck" });
                  }}
                />
                Truck
              </label>
            </div>
            <div className='label'>
              <label htmlFor='r10'>
                <input
                  id='r10'
                  type='radio'
                  name='r1'
                  className='mr-1'
                  onChange={(e) => {
                    setAlldata({ category: "Van" });
                  }}
                />
                Van
              </label>
            </div>
            <div className='label'>
              <label htmlFor='r11'>
                <input
                  id='r11'
                  type='radio'
                  name='r1'
                  className='mr-1'
                  onChange={(e) => {
                    setAlldata({ category: "Tooth" });
                  }}
                />
                Tooth
              </label>
            </div>
            <div className='label'>
              <label htmlFor='r12'>
                <input
                  id='r12'
                  type='radio'
                  name='r1'
                  className='mr-1'
                  onChange={(e) => {
                    setAlldata({ category: "Love Heart" });
                  }}
                />
                Love Heart
              </label>
            </div>
            <div className='label'>
              <label htmlFor='r13'>
                <input
                  id='r13'
                  type='radio'
                  name='r1'
                  className='mr-1'
                  onChange={(e) => {
                    setAlldata({ category: "Others" });
                  }}
                />
                Others
              </label>
            </div>
          </div>
          <div className='row title'>
            <h4>Still can't find what you are looking for ?</h4>
          </div>
          <div className='row title mb-4'>
            <div className='col-7 pl-0'>
              <textarea
                className='form-control'
                onChange={(e) => {
                  setAlldata({ ...alldata, customer_notes: e.target.value });
                }}
              ></textarea>
            </div>
          </div>
          <div className='row wanting'>
            <div className='col-11 pl-0'>
              {/* <div className='my-2'> */}
              <h4 className='main-title'>How many are you wanting ?</h4>
              <select
                // style={{ width: "450px" }}
                onChange={(e) => {
                  // onhandlechange(e);

                  setAlldata({ ...alldata, quantity: e.target.value });
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
              {/* </div> */}
            </div>
            <div className='col-7'>
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
                {console.log("lkjjijik", !alldata.quantity === undefined)}
                <button
                  type='button'
                  class='btn btn-primary m-2'
                  onClick={() => {
                    setStep(step + 1);
                    if (alldata.quantity === undefined) {
                      setAlldata({
                        ...alldata,
                        quantity: "500",
                        cant_find_your_size: "true",
                      });
                    } else {
                      setAlldata({ ...alldata, cant_find_your_size: "true" });
                    }
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
