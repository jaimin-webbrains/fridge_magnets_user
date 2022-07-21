import React from "react";
import NavigationActions from "redux/navigation/actions";
import { withRouter } from "react-router-dom";
import { compose } from "redux";
import { connect } from "react-redux";
import AuthActions from "redux/auth/actions";

const { success, error, fetching } = NavigationActions;
const { setuser } = AuthActions;

function AboutUs(props) {
  return (
    <>
      <div className="apus-breadscrumb">
        <img
          src="http://wholesale-magnets.com.au/wp-content/uploads/2020/07/rsz_11wholesale_magnets_website-05_2-2.png"
          alt=""
        />
      </div>
      <div className="container">
        <div className="row about my-4">
          <p>
            Wholesale Magnets have been in the fridge magnet business since
            2008, every year providing their customers with millions of fridge
            magnets to local businesses all over the country.
          </p>
          <p>
            Whilst Wholesale Magnets provides fridge magnets to any industry,
            they have deliberately carved themselves out a niche servicing real
            estate agents, probably the biggest user of fridge magnets.
          </p>
          <p>
            Whilst getting into magnets was purely by chance, servicing the real
            estate industry is in their DNA.
          </p>
          <p>
            The founders, Geoff Brom.ley and Carlo Panarello are both from
            within the real estate industry. Between them, they have done it all
            – Prospector, Sales Agent, Property Manager, Marketing Manager &
            Director. In fact up until recently Geoff owned a real estate office
            with around 1000 rental properties. He now focuses his sole
            attention to the magnet business.
          </p>
          <p>
            Carlo and Geoff have also created some of the country’s most
            innovative lead generation systems in the past 20 years including
            the very first internet lead generation system WhatPriceMyHouse and
            the innovative Real Estate Hotlines that provided house estimates
            over the phone.
          </p>
          <p>
            “I understand agents. I just get their mindset. I also understand
            that if they spend money it needs to make money. Their phone needs
            to ring, and give them a return. If it doesn’t, they don’t come
            back.” says Geoff from Wholesale Magnets. “And that’s why over 70%
            of our agents keep coming back year after year, cos fridge magnets
            work”.
          </p>
          <p>
            Carlo and Geoff getting started in fridge magnets was a stroke of
            luck. Back in 2008 when trying to source quality magnets for their
            100’s of agents they saw a gap in the market.
          </p>
          <p>
            “Agents were paying way too much for fridge magnets until we came
            along”, sales manager Carlo Panarello proudly claims, “the fact is,
            we have driven down the price of magnets in the Australian fridge
            magnet market.”
          </p>
          <p>
            “Over the years we have worked hard to improve the quality of fridge
            magnets being produced and to drive down the prices being charged”
            Carlo claims, “The truth is, we are selling better quality fridge
            magnets now for less money than what the industry was asking 10
            years ago!”
          </p>
          <p>
            Whilst Wholesale Magnets sell all different shapes and size fridge
            magnets, their most popular fridge magnets continue to be their DL
            fridge magnets (either DL rectangle or DL house shape), business
            card fridge magnets or their premium giveaway, our A5 fridge magnet
            with markers.
          </p>
          <p>
            Calendar fridge magnets are a huge part of Wholesale Magnets and
            they guarantee to support their network of loyal customers by
            continuing to supply the Thickest, Strongest & Cheapest fridge
            magnets on the market.
          </p>
          <p>
            All magnets are individually wrapped at no additional charge (except
            business cards), protecting your investment from rain and dust, and
            also giving the magnet a higher perceived value with the homeowners,
            giving you a much higher chance of getting your face on the fridge.
            After all, aren’t all gifts wrapped?
          </p>
          <p>
            Make no mistake, if you are buying your fridge magnets anywhere
            else, you’re paying too much.
          </p>
          <p>
            Use this site to get an instant price on your next magnet campaign
            or if you prefer, simply call us on
            <strong> 1300 135 906 </strong>
            to discuss.
          </p>
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
  // enhancer,
  connect(mapStateToProps, { success, error, fetching, setuser })
)(AboutUs);
