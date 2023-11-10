import React from 'react';
import logo from '../assets/logo.png';

function Navbar() {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-white bg-white shadow-sm p-3 mb-5 bg-body rounded">
        <div className="container text-center">
          <a className="navbar-brand" href="#">
            <img src={logo} height={60} alt="Logo" />
          </a>
         <h4 className='p-0 fw-bolder'>Student Council Elections 2023-24</h4>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button> 
        </div>
      </nav>
    </>
  );
}

export default Navbar;
