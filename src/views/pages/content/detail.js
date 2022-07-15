import React, { useState, useEffect } from "react";

export default function Detail(prop) {
  const { step, setStep, product, alldata, setAlldata, pdata } = prop.data;
  const [quntity1, setQuntity] = useState({ quantity: "" });

  const ans = pdata?.pquantity?.split(",");
  setAlldata(Object.assign(alldata, {}, { quantity: ans[0] }));
  const onhandlechange = (e) => {
    setQuntity({ quantity: e.target.value });
  };
  // console.log(pdata, "hhkh");
  console.log(alldata, "alldata");
  return (
    <>
      <div className='row wanting'>
        <div className='col-lg-9 col-md-9 col-sm-12'>
          <h4 className='p-title'>{pdata.pname}</h4>
          <h5>{pdata.size}</h5>
          <h3 className='sms-title'>Get An Instant Price By SMS Now</h3>
          <div className='my-2'>
            <h4 className='main-title'>How many are you wanting ?</h4>
            <select
              value={product[0].product_quantity}
              onChange={(e) => {
                setAlldata(
                  Object.assign(alldata, {}, { quantity: e.target.value })
                );
              }}
            >
              {ans.map((val) => {
                return <option value={val}>{val}</option>;
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
