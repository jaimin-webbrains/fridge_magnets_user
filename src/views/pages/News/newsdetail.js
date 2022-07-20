import React from "react";
import NavigationActions from "redux/navigation/actions";
import { withRouter } from "react-router-dom";
import { compose } from "redux";
import { connect } from "react-redux";
import AuthActions from "redux/auth/actions";
import moment from "moment";

const { success, error, fetching } = NavigationActions;
const { setuser } = AuthActions;

function NewsDetails(props) {
  const news = props.data;

  return (
    <>
      <div className='apus-breadscrumb'>
        <img
          alt=''
          src='https://wholesale-magnets.com.au/wp-content/uploads/2020/07/rsz_11wholesale_magnets_website-05_2.png'
        />
      </div>
      <div className='container'>
        <div className='row my-5'>
          <div className='col-lg-6 col-md-6 col-sm-12'>
            <div className='cbody'>
              <h4 className='entrytitle'>{news.news}</h4>
              <div style={{ marginBottom: "20px" }} className='d-flex autohor'>
                <div style={{ textTransform: "uppercase" }}>
                  <span style={{ fontStyle: "italic" }}>by</span> MANAGER{" "}
                </div>
                <div>/</div>
                <div>{moment(news.created_at).format("MMMM DD,YYYY")}</div>
              </div>
              <div>
                <img
                  src={`${process.env.REACT_APP_BACKEND_UPLOAD_PATH}/${news?.news_image}`}
                  className='myimg'
                  alt=''
                />
                {/* <h4 style={{ fontSize: "19px", margin: "13px 0" }}>
                  Now Selling General Printing to ALL customers.
                </h4> */}
                <p className='autohor' style={{ margin: "13px 0" }}>
                  {news.news_description}
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className='row my-4'>
          <div className='col-12 '>
            <div className='row justify-content-between'>
              <span className='entry-tag list'>WSM-Blogs</span>
              <div className='icon-style'>
                <i
                  class='fab fa-facebook-f'
                  title='share on facebook on top'
                ></i>
                <i class='fab fa-twitter'></i>
                <i class='fab fa-linkedin-in'></i>
                <i class='fab fa-tumblr'></i>
                <i class='fab fa-google-plus-g'></i>
                <i class='fab fa-pinterest'></i>
              </div>
            </div>
          </div>
        </div>
        {/* <div className='row detail'>
          <div className='col-12'>
            <h4 className='title-mb'>Leave a Comment</h4>
          </div>
          <div className='col-12'>
            <form>
              <div className='marginb'>
                Your email address will not be published.
              </div>
              <div className='row'>
                <div className='col-lg-6 col-md-6 col-sm-12'>
                  <input
                    type='text'
                    placeholder='name*'
                    className='form-control marginb'
                  />
                </div>
                <div className='col-lg-6 col-md-6 col-sm-12'>
                  <input
                    type='text'
                    placeholder='Email*'
                    className='form-control marginb'
                  />
                </div>
              </div>
              <div className='row'>
                <div className='col-12'>
                  <label htmlFor='c1' className='marginb'>
                    <input type='checkbox' name='c1' id='c1' className='mr-2' />
                    <span>
                      Save my name, email, and website in this browser for the
                      next time I comment.
                    </span>
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
        </div> */}
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
