import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <div className="navbar sticky-top">
        <div className="container-fluid">
          <div className="row">
            <div className="col">
              <div className="header-full">
                <span className="">
                  <Link className="navbar-brand" to="/">
                    NFT
                  </Link>
                </span>

                <span className="mx-5">
                  <div classname="form-group ">
                    <input type="text" classname="top-search" placeholder="Search" />
                  </div>
                </span>
                <span className="ms-5">
                  <Link to="" className="fw-bold ms-4 text-decoration-none ">
                    Marketplace
                  </Link>
                </span>
                <span className="ms-5">
                  <Link to="" className="fw-bold ms-4 text-decoration-none ">
                    drops
                  </Link>
                </span>
                <span className="ms-5">
                  <Link to="" className="fw-bold ms-4 text-decoration-none ">
                    brands
                  </Link>
                </span>
                
                 <span className="ms-5">
                  <button className="btn topbar-btn text-white fw-bold ms-4">Create</button>
                 </span>
             
                <span className="ms-5">
                  <Link to="" className="fw-bold ms-4 text-decoration-none">
                    sign  in
                  </Link>
                </span>
                <span className="ms-5">
                  <Link to="" className="fw-bold ms-4 text-decoration-none">
                    sign up
                  </Link>
                </span>
                <span className="ms-5">
                  <Link to="" className="fw-bold ms-4 text-decoration-none">
                    english
                  </Link>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
