import React from "react";
import { FaDiscord, FaTwitter, FaTelegram,FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <>
      <div className="footer">
        <div className="container-fluid pt-5">
          <div className="row">
            <div className="col   ">
              <ul className="list-unstyled d-flex ">
                <li className="me-4">
                  {" "}
                  <FaInstagram size={25} />{" "}
                </li>
                <li className="me-4">
                  {" "}
                  <FaTwitter size={25 } />{" "}
                </li>

                <li className="me-4">
                  {" "}
                  <FaDiscord size={25} className="footer-icon" />{" "}
                </li>
                <li className="me-2">
                  {" "}
                  <FaTelegram size={25} />{" "}
                </li>
              </ul>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-6 mb-3 ">
              <div>
                <small className="">
                  Copyright © 2022 Crypto.com. All rights reserved.
                </small>
              </div>
             
            </div>
            <div className="col-lg-6 d-flex justify-content-end">
            <div>
                <ul className="list-unstyled d-flex ">
                  <li className="me-3 small text-muted">Help Center</li>
                  <li className="me-3 small text-muted">Blog</li>
                  <li className="me-3 small text-muted">T&C</li>
                  <li className="me-3 small text-muted">Privacy Notice</li>
                  <li className="me-3 small text-muted">Cookies Preference</li>
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
