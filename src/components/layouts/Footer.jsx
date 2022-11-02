import React from "react";
import { FaMedium, FaTwitter, FaTelegram } from "react-icons/fa";

const Footer = () => {
  return (
    <>
      <div className="footer">
        <div className="container-fluid pt-5">
          <div className="row">
            <div className="col   ">
              <ul className="list-unstyled d-flex ">
                <li className="me-2">
                  {" "}
                  <FaMedium size={30} />{" "}
                </li>
                <li className="me-2">
                  {" "}
                  <FaTwitter size={30} />{" "}
                </li>

                <li className="me-2">
                  {" "}
                  <FaMedium size={30} />{" "}
                </li>
                <li className="me-2">
                  {" "}
                  <FaTelegram size={30} />{" "}
                </li>
              </ul>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12 mb-3 d-flex justify-content-between">
              <div>
                <small className="">
                  Copyright © 2022 Crypto.com. All rights reserved.
                </small>
              </div>
              <div>
                <ul className="list-unstyled d-flex ">
                  <li className="me-2">Help Center</li>
                  <li className="me-2">Blog</li>
                  <li className="me-2">T&C</li>
                  <li className="me-2">Privacy Notice</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
