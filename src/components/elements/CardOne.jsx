import React from "react";
import { useLocation ,useNavigate} from "react-router-dom";
import { FaRegHeart, FaEye, FaReply, FaEllipsisH,FaCaretLeft } from "react-icons/fa";


const CardOne = () => {

  
  const  location  = useLocation();
  // console.log(location.state)
  const value =location.state;
 

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
              <img
                className="cardone-img img-fluid"
                src={value.img}
                alt="no"
              />
            </div>
            <div className="col-lg-8 col-12 text-black">
              <div>
                <button className="btn  back-btn p-0" 
                onClick={() => goBack()}
                
                ><FaCaretLeft/> Back</button>
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
              <div > <h3>$2300</h3></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CardOne;
