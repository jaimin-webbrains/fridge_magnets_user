import React from "react";

export default function Userdetail() {
  return (
    <>
      <div className='row wanting'>
        <div className='col-lg-9 col-md-12 col-sm-12'>
          <h4 className='p-title'>DL HOUSE SHAPE FRIDGE MAGNETS</h4>
          <h5>210mm x 97mm</h5>
          <h3 className='sms-title'>Get An Instant Price By SMS Now</h3>
          <div className='my-2'>
            <h4 className='mb-4 y-title'>Your Details</h4>
            <form>
              <label className='d-block mt-2 mb-0 label'>Name:</label>
              <input type='text' name='name' className='form-control' />
              <label className='d-block mt-2 mb-0 label'>Company:</label>
              <input type='text' name='name' className='form-control' />

              <label className='d-block mt-2 mb-0 label'>
                Mobile(for SMS Quote):
              </label>
              <input type='text' name='name' className='form-control' />
              <label className='d-block mt-2 mb-0 label'>
                Delivery Postcode:
              </label>
              <input type='text' name='name' className='form-control' />

              <label className='d-block mt-2 mb-0 label'>Email:</label>
              <input type='text' name='name' className='form-control' />
            </form>
          </div>
          <div className='text-center mb-3'>
            <button type='button' class='btn btn-primary m-2'>
              Previous
            </button>
            <button type='button' class='btn btn-primary m-2'>
              Get Price
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
