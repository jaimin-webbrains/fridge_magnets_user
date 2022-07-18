import React, { useState } from "react";
import NavigationActions from "redux/navigation/actions";
import { withRouter } from "react-router-dom";
import { compose } from "redux";
import { connect } from "react-redux";
import AuthActions from "redux/auth/actions";
const { success, error, fetching } = NavigationActions;
const { setuser } = AuthActions;

function Artwork(props) {
  const { settingdata } = props;
  const { step, setStep, alldata, setAlldata, pdata } = props.data;
  const [artwork1, setArtwork] = useState({ artwork: "" });
  console.log(alldata, "hghjg");
  return (
    <>
      <div className='row wanting'>
        <div className='col-lg-9 col-md-9 col-sm-12'>
          <h4 className='p-title'>{pdata.category}</h4>
          <h5>
            <span className='mr-2'>{pdata.pname}</span>
            {pdata.size}
          </h5>
          <h3 className='sms-title'>Get An Instant Price By SMS Now</h3>
          <div className='my-2'>
            <h4 className='art'>Artwork ?</h4>
            <div className='label'>
              <label htmlFor='artwork1'>
                <input
                  checked='true'
                  id='artwork1'
                  type='radio'
                  name='r1'
                  className='mr-1'
                  onChange={(e) => {
                    setArtwork({
                      artwork: "Yes",
                    });
                  }}
                />
                {settingdata.artwork_label1}
              </label>
            </div>
            <div className='label'>
              <label htmlFor='artwork2'>
                <input
                  id='artwork2'
                  type='radio'
                  name='r1'
                  className='mr-1'
                  onChange={(e) => {
                    setArtwork({
                      artwork: "No",
                    });
                  }}
                />
                {settingdata.artwork_label2}
              </label>
            </div>
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
                setStep(step + 1);
                if (artwork1.artwork === "") {
                  setAlldata({ ...alldata, artwork: "Yes" });
                } else {
                  setAlldata({ ...alldata, artwork: artwork1.artwork });
                }
              }}
            >
              Next
            </button>
          </div>
          <div className='my-4 '>
            <span>{pdata.description}</span>
          </div>
        </div>
      </div>
    </>
  );
}

const mapStateToProps = (state) => {
  console.log("hjhjhj", state);
  return {
    ...state.themeChanger,
    token: state.auth.accessToken,
    user: state.auth.user,
    isFetching: state.navigation.isFetching,
    settingdata: state.settingdata.sdata,
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
)(Artwork);
