import React from "react";
import enhancer from "./enhancer/contentenhancer";
import NavigationActions from "redux/navigation/actions";
import { useHistory, withRouter } from "react-router-dom";
import { compose } from "redux";
import { connect } from "react-redux";
import AuthActions from "redux/auth/actions";
import { addInquiry } from "services/inquiryServices";
const { success, error, fetching } = NavigationActions;
const { setuser } = AuthActions;

function Userdetail(props) {
  const { alldata, pdata } = props.data;
  const {
    token,
    // success,
    fetching,
    // isFetching,
    values,
    handleChange,
    handleSubmit,
    isValid,
    handleBlur,
    errors,
    touched,
    submitCount
  } = props;
  // const [data, setdata] = useState("");

  const history = useHistory();
  const Error = props => {
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

  const onsubmitdata = async e => {
    e.preventDefault();
    console.log("values", values);
    handleSubmit();
    // setAlldata({
    //   ...alldata,
    //   name: values.name,
    //   company: values.company,
    //   mobile: values.mobile_no,
    //   postcode: values.delivery_postcode,
    //   email: values.email,
    // });
    let data = {
      ...alldata,
      name: values.name,
      company: values.company,
      mobile: values.mobile_no,
      postcode: values.delivery_postcode,
      email: values.email
    };
    if (isValid) {
      fetching();

      await addInquiry(token, data).then(data => {
        if (data.success) {
          // setdata(data.message);
          success(data.message);
          // props.history.push("/products");
        } else {
          // setdata(data.message);
          error(data.message);
        }
      });
    }
  };

  const { step, setStep } = props.data;
  return (
    <>
      <div className="row wanting">
        <div className="col-lg-9 col-md-12 col-sm-12 pl-0">
          {!history.location.pathname.includes("/size") ? (
            <>
              <div className="col-12">
                <div className="isCatNameTag">
                  <h4 className="p-title">{pdata.category}</h4>
                </div>
                <h5>
                  <span className="mr-2">{pdata.pname}</span>
                  {pdata.size}
                </h5>
                <h3 className="sms-title">Get An Instant Price By SMS Now</h3>
              </div>
            </>
          ) : (
            <>
              <div className="col-12">
                <h3 className="sms-title1">
                  Looking for something different ?
                </h3>
              </div>
            </>
          )}
          <div className="col-12">
            <div className="my-2">
              <h4 className="mb-4 y-title">Your Details</h4>
              <form>
                <label className="d-block mt-2 mb-0 label">
                  Name
                  {/* <span className='error-msg'>*</span>: */}
                </label>

                <input
                  id="name"
                  type="text"
                  name="name"
                  className="form-control"
                  // onChange={(e) => onhandlechange(e)}
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values?.name}
                />
                <Error field="name" />
                <label className="d-block mt-2 mb-0 label">
                  Company
                  {/* <span className='error-msg'>*</span>: */}
                </label>

                <input
                  id="company"
                  type="text"
                  name="company"
                  className="form-control"
                  // onChange={(e) => onhandlechange(e)}
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values?.company}
                />
                <Error field="company" />
                <label className="d-block mt-2 mb-0 label">
                  Mobile(for SMS Quote)
                  {/* <span className='error-msg'>*</span>: */}
                </label>

                <input
                  id="mobile_no"
                  type="text"
                  name="mobile_no"
                  className="form-control"
                  // onChange={(e) => onhandlechange(e)}
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values?.mobile_no}
                />
                <Error field="mobile_no" />
                <label className="d-block mt-2 mb-0 label">
                  Delivery Postcode
                  {/* <span className='error-msg'>*</span>: */}
                </label>

                <input
                  id="delivery_postcode"
                  type="text"
                  name="delivery_postcode"
                  className="form-control"
                  // onChange={(e) => onhandlechange(e)}
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values?.delivery_postcode}
                />
                <Error field="delivery_postcode" />
                <label className="d-block mt-2 mb-0 label">
                  Email
                  {/* <span className='error-msg'>*</span>: */}
                </label>

                <input
                  id="email"
                  type="text"
                  name="email"
                  className="form-control"
                  // onChange={(e) => onhandlechange(e)}
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values?.email}
                />
                <Error field="email" />
              </form>
            </div>
          </div>
          <div className="text-center mb-3">
            <button
              type="button"
              class="btn btn_base_style m-2"
              onClick={() => {
                setStep(step - 1);
              }}
            >
              Previous
            </button>
            <button
              type="button"
              class="btn btn_base_style m-2"
              onClick={e => {
                // handleSubmit();
                onsubmitdata(e);
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

const mapStateToProps = state => {
  return {
    ...state.themeChanger,
    token: state.auth.accessToken,
    user: state.auth.user,
    isFetching: state.navigation.isFetching
  };
};

export default compose(
  withRouter,
  enhancer,
  connect(mapStateToProps, { success, error, fetching, setuser })
)(Userdetail);
