import React, { useEffect, useState } from "react";
import { Link, useHistory, useParams } from "react-router-dom";
import { getSlugCategories } from "services/categoryServices";
import NavigationActions from "redux/navigation/actions";
import { withRouter } from "react-router-dom";
import { compose } from "redux";
import { connect, useDispatch } from "react-redux";
import AuthActions from "redux/auth/actions";

import productimageAction from "redux/productimage/actions";
import Newsdetail from "./newsdetail";
import { getNews } from "services/newsServices";
const { success, error, fetching } = NavigationActions;
const { setuser } = AuthActions;

const { image } = productimageAction;

function News(props) {
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
  const [news, setNews] = useState([]);
  const [newsdata, setNewsData] = useState([]);
  console.log(newsdata, "jkljk");

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
    await getNews(token).then((data) => {
      if (data.success) {
        setNews(data.data);
        success();
      } else {
        error();
      }
    });
  };

  useEffect(() => {
    getData();
    setStep(1);
  }, [slug]);
  console.log(news, "jjh");
  return (
    <>
      {step === 1 ? (
        <>
          <div className='apus-breadscrumb'>
            <img src='https://wholesale-magnets.com.au/wp-content/uploads/2020/07/rsz_11wholesale_magnets_website-05_2.png' />
          </div>
          <div className='container'>
            <div className='row'>
              {news.map((val) => {
                return (
                  <div className='my-5 new-block'>
                    <div className='mb-3'>
                      <h4>{val.news}</h4>
                    </div>
                    <div className='mb-3'>
                      <p>{val.news_description.substring(0, 280)} [...]</p>
                    </div>
                    <div>
                      <button
                        onClick={() => {
                          setStep(step + 1);
                          setNewsData(val);
                        }}
                      >
                        Read More
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </>
      ) : step === 2 ? (
        <>
          <Newsdetail data={newsdata} />
        </>
      ) : null}
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
)(News);
