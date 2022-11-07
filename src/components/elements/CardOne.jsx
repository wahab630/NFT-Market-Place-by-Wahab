import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import {
  FaRegHeart,
  FaCopy,
  FaEye,
  FaReply,
  FaEllipsisH,
  FaCaretLeft,
  FaAngleDown,
  FaExternalLinkAlt,
} from "react-icons/fa";

const CardOne = () => {
  const location = useLocation();
  // console.log(location.state)
  const value = location.state;

  const navigate = useNavigate();
  const goBack = () => {
    navigate("/");
  };

  return (
    <>
      <div className="cardone">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-12">
              <img className="cardone-img img-fluid" src={value.img} alt="no" />
            </div>
            <div className="col-lg-8 col-12 text-black">
              <div>
                <button className="btn  back-btn p-0" onClick={() => goBack()}>
                  <FaCaretLeft /> Back
                </button>
              </div>
              <div className="d-flex justify-content-between mb-3">
                <div className="">
                  <span>
                    <FaRegHeart size={30} />{" "}
                  </span>{" "}
                  <span className="mx-2 ">99</span>{" "}
                  <span>
                    <FaEye size={30} />
                  </span>{" "}
                  <span className="mx-2 ">2219</span>
                  <span>
                    <FaReply size={20} />
                  </span>{" "}
                  <span className="ms-2 ">Share</span>
                </div>
                <div>
                  <span className="">
                    {" "}
                    <FaEllipsisH />
                  </span>
                </div>
              </div>
              <div>
                <span>Chain:</span>
                <span className="fw-bold ms-2">{value.cronos}</span>{" "}
                <span>
                  <img src={value.imgthree} alt="no" />
                </span>
              </div>
              <div className="d-flex flex-wrap mt-3">
                <div className="d-flex ">
                  <div className="me-3 ">
                    <div className="img">
                      <img
                        src="assets/loggo.jpg"
                        alt="no"
                        className="card-one-img2"
                      />
                      <img
                        src={value.imgtwo}
                        alt="no"
                        className="card-one-img3"
                      />
                    </div>
                  </div>
                  <div>
                    <small className="text-muted">Creator</small>
                    <div>Crypto.com</div>
                  </div>
                </div>
                <div className="d-flex  ms-5">
                  <div className="me-3 ">
                    <div className="img">
                      <img
                        src={value.imgone}
                        alt="no"
                        className="card-one-img2"
                      />
                      <img
                        src={value.imgtwo}
                        alt="no"
                        className="card-one-img3"
                      />
                    </div>
                  </div>
                  <div>
                    <small className="text-muted">Collection</small>
                    <div>{value.caption}</div>
                  </div>
                </div>
              </div>
              <div className="mt-3">
                <small>381 Edition minted</small>
                <div className="d-flex">
                  <h2>{value.name}</h2>
                  <button className="btn text-muted ms-3 cardone-btn">
                    <small>Marketplace</small>
                  </button>
                </div>
              </div>
              <div>
                {" "}
                <h3>$2300</h3>
              </div>
              <p>The first CyborgSwap NFT collection</p>
              <a href="no" className="anchor-below">
                Art
              </a>
              <a href="no" className="anchor-below ms-2">
                Crosschain
              </a>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-4 ">
              <div className="card text-black mt-3">
                <div className="card-body">
                  <div className="d-flex justify-content-between">
                    <span>Properties</span>{" "}
                    <span>
                      <FaAngleDown />
                    </span>
                  </div>
                </div>
              </div>
              <div className="card text-black mt-3">
                <div className="card-body">
                  <div className="d-flex justify-content-between">
                    <span>View Crypto.org Chain details</span>{" "}
                    <span>
                      <FaExternalLinkAlt />
                    </span>
                  </div>
                </div>
              </div>
              <div className="card text-black mt-3">
                <div className="card-body">
                  <div className="d-flex justify-content-between">
                    <span>View Cronoscan details</span>{" "}
                    <span>
                      <FaExternalLinkAlt />
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-8 text-black mt-3 ">
              <span className="fw-bold ">Ownership</span>
              <span className="fw-bold ms-5">History</span>
              <span className="fw-bold ms-5">Offers</span>
              <div className="mt-3 ">
                <div className="card w-100 ">
                  <div className="card-body d-flex justify-content-between">
                    <div className="d-flex">
                      <img
                        src={value.imgone}
                        alt="no"
                        className="card-one-img2 me-3"
                      />
                     
                      <div>
                        <small className="text-muted">Owner</small>
                        <div className="fw-bold"> Don Tom</div>
                      </div>
                    </div>
                    <div>
                      <span className="me-2">cro14cg7whz5lgg2sv</span>
                      <span><FaCopy/></span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CardOne;
