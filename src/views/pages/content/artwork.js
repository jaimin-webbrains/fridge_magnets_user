import React, { useState } from "react";

export default function Artwork(prop) {
  const { step, setStep, alldata, setAlldata, psize } = prop.data;
  const [artwork, setArtwork] = useState();

  return (
    <>
      <div className='row wanting'>
        <div className='col-lg-9 col-md-9 col-sm-12'>
          <h4 className='p-title'>DL HOUSE SHAPE FRIDGE MAGNETS</h4>
          <h5>{psize}</h5>
          <h3 className='sms-title'>Get An Instant Price By SMS Now</h3>
          <div className='my-2'>
            <h4 className='art'>Artwork ?</h4>
            <div className='label'>
              <input
                id='artwork1'
                type='radio'
                name='r1'
                className='mr-1'
                onChange={(e) => {
                  setArtwork("artwork 1");
                }}
              />
              I will supply my own artwork
            </div>
            <div className='label'>
              <input
                id='artwork2'
                type='radio'
                name='r1'
                className='mr-1'
                onChange={(e) => {
                  setArtwork("artwork 2");
                }}
              />
              Please create my artwork
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
                setAlldata({ ...alldata, artwork: artwork });
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
