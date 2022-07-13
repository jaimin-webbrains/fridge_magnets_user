import { padStart } from "lodash";
import React, { useState } from "react";

export default function Artwork(prop) {
  const { step, setStep, alldata, setAlldata, pdata } = prop.data;
  const [artwork1, setArtwork] = useState({ artwork: "" });
  console.log(alldata, "hghjg");
  return (
    <>
      <div className='row wanting'>
        <div className='col-lg-9 col-md-9 col-sm-12'>
          <h4 className='p-title'>{pdata.pname}</h4>
          <h5>{pdata.size}</h5>
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
                I will supply my own artwork
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
                Please create my artwork
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
                if (artwork1.artwork == "") {
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
