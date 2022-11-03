import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaSearch } from "react-icons/fa";
import Button from "react-bootstrap/Button";
import Offcanvas from "react-bootstrap/Offcanvas";
import { FaAlignJustify } from "react-icons/fa";

const Header = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <div className="navbar sticky-top d-lg-block d-none">
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
                  <Link to="/drops" className="  text-decoration-none ">
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
      <Button className="d-lg-none d-block canvas-btn" onClick={handleShow}>
        <FaAlignJustify size={25} />
      </Button>

      <Offcanvas show={show} onHide={handleClose} className="canvas">
        <Offcanvas.Header closeButton closeVariant="white">
          <Offcanvas.Title>
            <span className="">
              <Link className="navbar-brand" to="/">
                <img src="assets/loggo.jpg" className="logo" alt="no" />
                NFT
              </Link>
            </span>
          </Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <span className="  d-block  mb-4">
            <Link
              to="/"
              className=" text-decoration-none text-white fw-bold    "
            >
              Marketplace
            </Link>
          </span>
          <span className=" d-block mb-4">
            <Link
              to="/drops"
              className="  text-decoration-none text-white fw-bold  "
            >
              Drops
            </Link>
          </span>

          <div className="dropdown ">
            <button
              className="btn dropdown-btn  ps-0 fw-bold dropdown-toggle text-white"
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
          <span className=" d-block mt-3 ">
            <button className="btn topbar-btn text-white fw-bold ">
              Create
            </button>
          </span>

          <span className=" fw-bold mt-4 border-top d-block">
            <Link to="" className="d-block  text-white text-decoration-none mt-4">
              Sign in
            </Link>
          </span>
          <span className=" fw-bold d-block mt-4  ">
            <Link to="" className=" text-white  text-decoration-none">
              Sign up
            </Link>
          </span>
          <span className="d-block fw-bold mt-4 border-top">
            <Link to="" className=" text-white text-decoration-none mt-4 d-block">
              English
            </Link>
          </span>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
};

export default Header;
