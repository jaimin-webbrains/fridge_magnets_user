import React from "react";
import { Link, useHistory, useParams } from "react-router-dom";
import "../../assets/css/dashboardlayout.css";

function HeaderUser() {
  return (
    <>
      <div className='sticky-nav'>
        <div className='row'>
          <a>
            <img
              src='https://wholesale-magnets.com.au/wp-content/uploads/2021/03/WM_website_banner-01-scaled.jpg'
              width='100%'
              height='auto'
            ></img>
          </a>
        </div>
        <div className='row main-menu'>
          <div className='col-10 mx-auto'>
            <nav class='navbar navbar-expand-lg navbar-light'>
              {/* <a class='navbar-brand' href='#'>
                Navbar
              </a> */}
              <button
                class='navbar-toggler my-2'
                type='button'
                data-toggle='collapse'
                data-target='#navbarNav'
                aria-controls='navbarNav'
                aria-expanded='false'
                aria-label='Toggle navigation'
              >
                <span class='navbar-toggler-icon'></span>
              </button>
              <div class='collapse navbar-collapse' id='navbarNav'>
                <ul class='navbar-nav'>
                  <li class='nav-item active'>
                    <Link class='nav-link' to='/categories/:slug'>
                      HOME <span class='sr-only'>(current)</span>
                    </Link>
                  </li>
                  <li class='nav-item'>
                    <Link class='nav-link' to='/categories/:slug'>
                      FRIDGE MAGNETS
                    </Link>
                  </li>
                  <li class='nav-item'>
                    <a class='nav-link' href='#'>
                      GALLERY
                    </a>
                  </li>
                  <li class='nav-item'>
                    <a class='nav-link' href='#'>
                      NEWS
                    </a>
                  </li>
                  <li class='nav-item'>
                    <a class='nav-link' href='#'>
                      ABOUT US
                    </a>
                  </li>
                  <li class='nav-item'>
                    <a class='nav-link' href='#'>
                      CONTACT US
                    </a>
                  </li>
                </ul>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </>
  );
}

export default HeaderUser;
