import React, { useEffect, useState } from "react";
import { Link, useHistory, useLocation, useParams } from "react-router-dom";
import { getSlugCategories } from "services/categoryServices";
import NavigationActions from "redux/navigation/actions";
import { withRouter } from "react-router-dom";
import { compose } from "redux";
import { connect, useDispatch } from "react-redux";
import AuthActions from "redux/auth/actions";
import {
  getBrandByProduct,
  getBrandByProduct1,
  getSlugByProduct,
  getSlugByProduct1,
} from "services/productServices";
import Detail from "./detail";
import Artwork from "./artwork";
import Userdetail from "./userdetail";
import productimageAction from "redux/productimage/actions";
import SideBarUser from "components/sidebar/SideBarUser";
const { success, error, fetching } = NavigationActions;
const { setuser } = AuthActions;

const { image } = productimageAction;

function Content(props) {
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
  const location = useLocation();
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

  const getData = async () => {
    if (!history.location.pathname.includes("/printing-products")) {
      await getSlugByProduct(token, slug).then((data) => {
        if (data.success) {
          setProduct(data.data);
          success();
        } else {
          error();
        }
      });
      await getBrandByProduct(token, slug, brand).then((data) => {
        if (data.success) {
          setProductBrand(data.data);
          success();
        } else {
          error();
        }
      });
    } else {
      await getSlugByProduct1(token, slug).then((data) => {
        if (data.success) {
          setProduct(data.data);
          success();
        } else {
          error();
        }
      });
      await getBrandByProduct1(token, slug, brand).then((data) => {
        if (data.success) {
          console.log(data.data);
          setProductBrand(data.data);
          success();
        } else {
          error();
        }
      });
    }
  };

  useEffect(() => {
    getData();
    setStep(1);
  }, [location]);

  useEffect(() => {
    step === 1 && dispatch(image());
  }, [step]);

  console.log(product, "jjh");
  return (
    <div>
      {step === 1 ? (
        <>
          <div className='row title'>
            <h3>Get An Instant Price By SMS Now</h3>
            <h4>
              What size fridge magnet are you looking for ?{" "}
              <span> Click Below</span>
            </h4>
          </div>
          <div className='row mb-3 mycard'>
            {!history.location.pathname.includes(`/${slug}/${brand}`) ? (
              <>
                {product.map((val) => {
                  return val.show_on_home_page === 1 ? (
                    <>
                      <div className='col-lg-6 col-md-6 col-sm-6 col-xs-12 mb-4'>
                        <div
                          className='card'
                          onClick={() => {
                            setStep(step + 1);
                            setPdata({
                              size: val.size,
                              pname: val.product_name,
                              pquantity: val.product_quantity,
                              category: val.name,
                              description: val.description,
                            });
                            setAlldata({
                              ...alldata,
                              cant_find_your_size: "false",
                              category: val.name,
                              size: val.size,
                            });

                            // dispatch({ type: "image" });
                            dispatch(image(val.product_image));
                          }}
                          style={{ cursor: "pointer" }}
                        >
                          <img
                            className='card-img-top'
                            src={`${process.env.REACT_APP_BACKEND_UPLOAD_PATH}/${val?.product_image}`}
                            alt='Card image cap'
                            width='280px'
                            height='90%'
                          />
                          <div className='prdsize'>
                            <p>{val.size}</p>
                          </div>
                          <div className='card-body  text-center'>
                            <h5 className='card-title'>{val.product_name}</h5>
                            <h5>{val.parent_category_name}</h5>
                          </div>
                        </div>
                      </div>
                    </>
                  ) : null;
                })}
              </>
            ) : (
              <>
                {productBrand.map((val) => {
                  return (
                    <>
                      <div className='col-lg-6 col-md-6 col-sm-6 col-xs-12 mb-4'>
                        <div
                          className='card'
                          onClick={() => {
                            setStep(step + 1);
                            setPdata({
                              size: val.size,
                              pname: val.product_name,
                              pquantity: val.product_quantity,
                              category: val.name,
                              description: val.description,
                            });
                            setAlldata({
                              ...alldata,
                              cant_find_your_size: "false",
                              category: val.name,
                              size: val.size,
                            });
                            // dispatch({ type: "image" });
                            // image(val.product_image);
                          }}
                          style={{ cursor: "pointer" }}
                        >
                          <img
                            className='card-img-top'
                            src={`${process.env.REACT_APP_BACKEND_UPLOAD_PATH}/${val?.brandimg}`}
                            alt='Card image cap'
                            width='280px'
                            height='90%'
                          />
                          <div className='prdsize'>
                            <p>{val.size}</p>
                          </div>
                          <div className='card-body  text-center'>
                            <h5 className='card-title'>{val.product_name}</h5>
                            <h5>{val.parent_category_name}</h5>
                          </div>
                        </div>
                      </div>
                    </>
                  );
                })}
              </>
            )}

            {/* <div className='col-lg-6 col-md-6 col-sm-6 col-xs-12 mb-4'>
          <div className='card'>
            <img
              className='card-img-top'
              src='https://wholesale-magnets.com.au/wp-content/uploads/2020/07/DL_House-1.jpg'
              alt='Card image cap'
              width='280px'
              height='90%'
            />
            <div className='prdsize'>
              <p>90mm x 55mm</p>
            </div>
            <div className='card-body  text-center'>
              <h5 className='card-title'>DL HOUSE SHAPE</h5>
              <h5>FRIDGE MAGNETS</h5>
            </div>
          </div>
        </div>
        <div className='col-lg-6 col-md-6 col-sm-6 col-xs-12 mb-4'>
          <div className='card'>
            <img
              className='card-img-top'
              src='https://wholesale-magnets.com.au/wp-content/uploads/2020/07/DL_Rectangle-1.jpg'
              alt='Card image cap'
              width='280px'
              height='90%'
            />
            <div className='prdsize'>
              <p>210mm x 148mm</p>
            </div>
            <div className='card-body bg-primary text-center'>
              <h5 className='card-title'>DL HOUSE SHAPE</h5>
              <h5>FRIDGE MAGNETS</h5>
            </div>
          </div>
        </div>
        <div className='col-lg-6 col-md-6 col-sm-6 col-xs-12 mb-4'>
          <div className='card'>
            <img
              className='card-img-top'
              src='https://wholesale-magnets.com.au/wp-content/uploads/2020/07/DL_House-1.jpg'
              alt='Card image cap'
              width='280px'
              height='90%'
            />
            <div className='prdsize'>
              <p>90mm x 55mm</p>
            </div>
            <div className='card-body bg-primary text-center'>
              <h5 className='card-title'>DL HOUSE SHAPE</h5>
              <h5>FRIDGE MAGNETS</h5>
            </div>
          </div>
        </div>
        <div className='col-lg-6 col-md-6 col-sm-6 col-xs-12 mb-4'>
          <div className='card'>
            <img
              className='card-img-top'
              src='https://wholesale-magnets.com.au/wp-content/uploads/2020/07/DL_Rectangle-1.jpg'
              alt='Card image cap'
              width='280px'
              height='90%'
            />
            <div className='prdsize'>
              <p>210mm x 148mm</p>
            </div>
            <div className='card-body bg-primary text-center'>
              <h5 className='card-title'>DL HOUSE SHAPE</h5>
              <h5>FRIDGE MAGNETS</h5>
            </div>
          </div>
        </div> */}
          </div>
          {!history.location.pathname.includes("/size") ? (
            <div className='row '>
              <h4
                style={{
                  color: "#444444",
                  fontWeight: "600",
                  textTransform: "uppercase",
                  fontSize: "17px",
                  margin: "35px 0px 53px 0px",
                }}
              >
                Can’t find your size ?{" "}
                <Link
                  to='/categories/size'
                  style={{ color: "#1172b9", textDecoration: "underline" }}
                >
                  Click here
                </Link>
              </h4>
            </div>
          ) : null}
        </>
      ) : step === 2 ? (
        <Detail data={{ setStep, step, product, alldata, setAlldata, pdata }} />
      ) : step === 3 ? (
        <Artwork data={{ setStep, step, alldata, setAlldata, pdata }} />
      ) : (
        <Userdetail data={{ setStep, step, alldata, setAlldata, pdata }} />
      )}
    </div>
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
// const mapDispatchToProps = () => {};

export default compose(
  withRouter,
  // enhancer,
  connect(
    mapStateToProps,
    { success, error, fetching, setuser }
    // mapDispatchToProps
  )
)(Content);
