import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import NavigationActions from "redux/navigation/actions";
import { withRouter } from "react-router-dom";
import { compose } from "redux";
import { connect } from "react-redux";
import AuthActions from "redux/auth/actions";

import Newsdetail from "./newsdetail";
import { getNews } from "services/newsServices";
const { success, error, fetching } = NavigationActions;
const { setuser } = AuthActions;

function News(props) {
  const { token, success, error } = props;

  const { slug } = useParams();
  const [news, setNews] = useState([]);
  const [newsdata, setNewsData] = useState([]);

  const [step, setStep] = useState(1);

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
  return (
    <>
      {step === 1 ? (
        <>
          <div className='apus-breadscrumb'>
            <img
              src='https://wholesale-magnets.com.au/wp-content/uploads/2020/07/rsz_11wholesale_magnets_website-05_2.png'
              alt=''
            />
          </div>
          <div className='container'>
            <div className='row'>
              {news.map((val) => {
                return (
                  <div className='my-5 new-block'>
                    <div className='col-12'>
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
