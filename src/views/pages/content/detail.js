import React from "react";

export default function Detail() {
  return (
    <>
      <div className='row wanting'>
        <div className='col-lg-9 col-md-9 col-sm-12'>
          <h4 className='p-title'>DL HOUSE SHAPE FRIDGE MAGNETS</h4>
          <h5>210mm x 97mm</h5>
          <h3 className='sms-title'>Get An Instant Price By SMS Now</h3>
          <div className='my-2'>
            <h4 className='main-title'>How many are you wanting ?</h4>
            <select>
              <option>500</option>
              <option>1000</option>
              <option>1500</option>
              <option>2000</option>
              <option>2500</option>
              <option>3000</option>
              <option>3500</option>
              <option>4000</option>
              <option>4500</option>
              <option>5000</option>
              <option>5500</option>
              <option>6000</option>
              <option>6500</option>
            </select>
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
