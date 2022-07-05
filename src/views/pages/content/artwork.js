import React from "react";

export default function Artwork() {
  return (
    <>
      <div className='row wanting'>
        <div className='col-lg-9 col-md-9 col-sm-12'>
          <h4 className='p-title'>DL HOUSE SHAPE FRIDGE MAGNETS</h4>
          <h5>210mm x 97mm</h5>
          <h3 className='sms-title'>Get An Instant Price By SMS Now</h3>
          <div className='my-2'>
            <h4 className='art'>Artwork ?</h4>
            <div className='label'>
              <input type='radio' name='g1' className='mr-1' />I will supply my
              own artwork
            </div>
            <div className='label'>
              <input type='radio' name='g1' className='mr-1' />
              Please create my artwork
            </div>
          </div>
          <div className='text-center mb-3'>
            <button type='button' class='btn btn-primary m-2'>
              Previous
            </button>
            <button type='button' class='btn btn-primary m-2'>
              Next
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
