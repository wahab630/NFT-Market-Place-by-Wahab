import React from "react";
import { Link } from "react-router-dom";
import { FaSearch } from "react-icons/fa";

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
                    <img src="assets/loggo.jpg" className="logo" alt="no" />
                    NFT
                  </Link>
                </span>

                <span className="ms-3">
                  <span>
                    <FaSearch className="input-icon" />
                  </span>
                  <input
                    type="text"
                    classname="top-search "
                    placeholder="Search"
                    size={35}
                  />
                </span>
                <span className="ms-5 mt-2">
                  <Link to="/" className=" text-decoration-none ">
                    Marketplace
                  </Link>
                </span>
                <span className="ms-5 mt-2">
                  <Link to="" className="  text-decoration-none ">
                    drops
                  </Link>
                </span>
                
                <div className="dropdown ms-4">
                  <button
                    className="btn dropdown-btn dropdown-toggle"
                    type="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Brands
                  </button>
                  <ul className="dropdown-menu ">
                    <li>
                      <a className="dropdown-item text-black" href="no">
                        English
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item text-black" href="no">
                      French
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item text-black" href="no">
                        German
                      </a>
                    </li>
                  </ul>
                </div>
                <span className="ms-5 ">
                  <button className="btn topbar-btn text-white fw-bold ">
                    Create
                  </button>
                </span>
               
                <span className=" mt-2"> 
                  <Link to="" className="ms-5  text-decoration-none">
                    sign in
                  </Link>
                </span>
                <span className="ms-5 mt-2">
                  <Link to="" className="  text-decoration-none">
                    sign up
                  </Link>
                </span>
                <span className="ms-5 mt-2">
                  <Link to="" className="  text-decoration-none">
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
