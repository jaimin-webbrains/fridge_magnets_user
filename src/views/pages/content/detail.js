import React, { useState } from "react";

export default function Detail(prop) {
  const { step, setStep, product, alldata, setAlldata, psize } = prop.data;
  const [quntity, setQuntity] = useState({ quntity1: "" });

  const onhandlechange = (e) => {
    setQuntity({ quntity1: e.target.value });
  };

  return (
    <>
      <div className='row wanting'>
        <div className='col-lg-9 col-md-9 col-sm-12'>
          <h4 className='p-title'>DL HOUSE SHAPE FRIDGE MAGNETS</h4>
          <h5>{psize}</h5>
          <h3 className='sms-title'>Get An Instant Price By SMS Now</h3>
          <div className='my-2'>
            <h4 className='main-title'>How many are you wanting ?</h4>
            <select
              onChange={(e) => {
                onhandlechange(e);
              }}
            >
              {product.map((val) => {
                return <option>{val.product_quantity}</option>;
              })}
            </select>
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
                setAlldata({ ...alldata, quntity: quntity.quntity1 });
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
