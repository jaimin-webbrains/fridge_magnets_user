import React from "react";

export default function Content() {
  return (
    <div>
      <div className='row title'>
        <h3>Get An Instant Price By SMS Now</h3>
        <h4>
          What size fridge magnet are you looking for ?{" "}
          <span> Click Below</span>
        </h4>
      </div>
      <div className='row mb-3 mycard'>
        <div className='col-lg-6 col-md-6 col-sm-6 col-xs-12 mb-4'>
          <div className='card'>
            <img
              className='card-img-top'
              src='https://wholesale-magnets.com.au/wp-content/uploads/2020/07/DL_House-1.jpg'
              alt='Card image cap'
              width='280px'
              height='90%'
            />
            <div className='prdsize'>
              <p>90mm x 55mm</p>
            </div>
            <div className='card-body  text-center'>
              <h5 className='card-title'>DL HOUSE SHAPE</h5>
              <h5>FRIDGE MAGNETS</h5>
            </div>
          </div>
        </div>
        <div className='col-lg-6 col-md-6 col-sm-6 col-xs-12 mb-4'>
          <div className='card'>
            <img
              className='card-img-top'
              src='https://wholesale-magnets.com.au/wp-content/uploads/2020/07/DL_Rectangle-1.jpg'
              alt='Card image cap'
              width='280px'
              height='90%'
            />
            <div className='prdsize'>
              <p>210mm x 148mm</p>
            </div>
            <div className='card-body bg-primary text-center'>
              <h5 className='card-title'>DL HOUSE SHAPE</h5>
              <h5>FRIDGE MAGNETS</h5>
            </div>
          </div>
        </div>
        <div className='col-lg-6 col-md-6 col-sm-6 col-xs-12 mb-4'>
          <div className='card'>
            <img
              className='card-img-top'
              src='https://wholesale-magnets.com.au/wp-content/uploads/2020/07/DL_House-1.jpg'
              alt='Card image cap'
              width='280px'
              height='90%'
            />
            <div className='prdsize'>
              <p>90mm x 55mm</p>
            </div>
            <div className='card-body bg-primary text-center'>
              <h5 className='card-title'>DL HOUSE SHAPE</h5>
              <h5>FRIDGE MAGNETS</h5>
            </div>
          </div>
        </div>
        <div className='col-lg-6 col-md-6 col-sm-6 col-xs-12 mb-4'>
          <div className='card'>
            <img
              className='card-img-top'
              src='https://wholesale-magnets.com.au/wp-content/uploads/2020/07/DL_Rectangle-1.jpg'
              alt='Card image cap'
              width='280px'
              height='90%'
            />
            <div className='prdsize'>
              <p>210mm x 148mm</p>
            </div>
            <div className='card-body bg-primary text-center'>
              <h5 className='card-title'>DL HOUSE SHAPE</h5>
              <h5>FRIDGE MAGNETS</h5>
            </div>
          </div>
        </div>
      </div>
      <div className='row'>
        <h4
          style={{
            color: "#444444",
            fontWeight: "600",
            textTransform: "uppercase",
            fontSize: "17px",
            margin: "35px 0px",
          }}
        >
          Can’t find your size ? <a href='#'>Click here</a>
        </h4>
      </div>
    </div>
  );
}
