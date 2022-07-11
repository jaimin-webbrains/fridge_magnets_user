import React, { useState } from "react";

export default function Markers(prop) {
  const { step, setStep, alldata, setAlldata } = prop.data;
  const [artwork, setArtwork] = useState();
  console.log(alldata, "hghg");

  return (
    <>
      <div className='row wanting'>
        <div className='col-lg-12 col-md-10 col-sm-12 pl-0'>
          <h3 className='sms-title1'>LOOKING FOR SOMETHING DIFFERENT ?</h3>
          <div className='my-2'>
            <h4 className='art'>
              Would you like whiteboard markers included with each magnet ?
            </h4>
            <div className='label'>
              <input
                id='artwork1'
                type='radio'
                name='r1'
                className='mr-1'
                onChange={(e) => {
                  setAlldata({ ...alldata, markers: "yes" });
                }}
              />
              Yes
            </div>
            <div className='label'>
              <input
                id='artwork2'
                type='radio'
                name='r1'
                className='mr-1'
                onChange={(e) => {
                  setAlldata({ ...alldata, markers: "no" });
                }}
              />
              No
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
                // setAlldata({ ...alldata, artwork: artwork });
              }}
            >
              Next
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
