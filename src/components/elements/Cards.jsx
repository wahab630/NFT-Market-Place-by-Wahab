import React,{useState} from "react";
import { Link, useNavigate } from "react-router-dom";

const Cards = () => {
    const [state, setState] = useState("")
    // console.log(state)
  const navigate = useNavigate();
  const component=(v)=>
  {
    navigate("/marketplace", {state:v});
  }
  const data = [
    {
      img: "./Assists/card1.gif",
      img2: "./Assists/1.1.png",
      text1: "Cross world tour",
      img3: "./Assists/1.svg",
      title: "Cronos World Tour at Messari Mainnet 2022",
      text2: "1 minted",
      text3: "Current Bid",
      price: "$1",
      text4: "Ends in",
      time: "3hours",
      bit: "Bid",
    },
    {
      img: "./Assists/card2.gif",
      img2: "./Assists/1.1.png",
      text1: "Cross world tour",
      img3: "./Assists/1.svg",
      title: "Cronos World Tour at Token2049 Singapore 2022",
      text2: "1 minted",
      text3: "Current Bid",
      price: "$1",
      text4: "Ends in",
      time: "6hours",
      bit: "Bid",
    },
    {
      img: "./Assists/card3.png",
      img2: "./Assists/1.1.png",
      text1: "ZED Run",
      img3: "./Assists/1.svg",
      title: "Send me to Burn",
      text2: "1 minted",
      text3: "Current Bid",
      price: "$1",
      text4: "Ends in",
      time: "4hours",
      bit: "Bid",
    },
    {
      img: "./Assists/card4.png",
      img2: "./Assists/1.1.png",
      text1: "ZED Run",
      img3: "./Assists/1.svg",
      title: "One rainy wish ",
      text2: "1 minted",
      text3: "Current Bid",
      price: "$1",
      text4: "Ends in",
      time: "3hours",
      bit: "Bid",
    },
    {
      img: "./Assists/card5.png",
      img2: "./Assists/1.1.png",
      text1: "Meta cyborgs",
      img3: "./Assists/1.svg",
      title: `The Meta Cyborgs #2347`,
      text2: "1 minted",
      text3: "Current Bid",
      price: "$39",
      bit: "Buy",
    },
    {
      img: "./Assists/card6.png",
      img2: "./Assists/1.1.png",
      text1: "ZED Run",
      img3: "./Assists/1.svg",
      title: "Isra Villarreal",
      text2: "1 minted",
      text3: "Current Bid",
      price: "$1",
      text4: "Ends in",
      time: "5hours",
      bit: "Bid",
    },
    {
      img: "./Assists/card3.png",
      img2: "./Assists/1.1.png",
      text1: "ZED Run",
      img3: "./Assists/1.svg",
      title: "Send me to Burn",
      text2: "1 minted",
      text3: "Current Bid",
      price: "$1",
      text4: "Ends in",
      time: "4hours",
      bit: "Bid",
    },
    {
      img: "./Assists/card2.gif",
      img2: "./Assists/1.1.png",
      text1: "Cross world tour",
      img3: "./Assists/1.svg",
      title: "Cronos World Tour at Token2049 Singapore 2022",
      text2: "1 minted",
      text3: "Current Bid",
      price: "$1",
      text4: "Ends in",
      time: "6hours",
      bit: "Bid",
    },
  ];

  return (
     <div className="Cards-section">
      <div className="container">
        <div className="row my-5">
          <div className="col-md-2"></div>
          <div className="col-md-10">
            <div className="row ">
              {data.map((v, i) => {
                return (
                  <>
                    <div className="col-md-3 mt-5">
                      <div className="card  "
                      onClick={()=>
                    {
                        component(v)
                    }}
                      style={{ border: "none" }}>
                        <div className="card-body p-0">
                          <div>
                            <img
                              src={v.img}
                              // className="p-0"
                              style={{ width: "100%" }}
                              alt=""
                            />
                          </div>
                          <div className="mt-1">
                            <ul className="list-unstyled">
                              <li className="d-inline">
                                <img
                                  src={v.img2}
                                  className="rounded-5 ms-3"
                                  style={{ width: "10%" }}
                                  alt=""
                                />
                              </li>
                              <li className="d-inline">
                                <p
                                  className="d-inline  ms-2"
                                  style={{
                                    fontSize: "12px",
                                    fontWeight: "600",
                                  }}
                                >
                                  {v.text1}
                                </p>
                              </li>
                              <li className="d-inline">
                                <img
                                  src={v.img3}
                                  alt=""
                                  style={{ width: "8%" }}
                                  className="ms-2"
                                />
                              </li>
                            </ul>
                          </div>
                          <div>
                            <p
                              className="ms-2"
                              style={{ fontSize: "15px", fontWeight: "600" }}
                            >
                              {v.title.slice(0, 26)}...
                            </p>
                          </div>
                          <div>
                            <p
                              className="text-muted ms-2"
                              style={{ fontSize: "12px", fontWeight: "600" }}
                            >
                              {v.text2}
                            </p>
                          </div>
                          <div className="row">
                            <div
                              className=" col-md-8  ms-3 rounded mb-2 "
                              style={{
                                backgroundColor: "#E0E0E0",
                              }}
                            >
                              <div className="row  ">
                                <div className="col-md-4 ms-1 p-0 m-0">
                                  <p
                                    className=""
                                    style={{
                                      fontSize: "12px",
                                    }}
                                  >
                                    {v.text3}
                                  </p>
                                </div>
                                <div className="col-md-4 text-end p-0 m-0">
                                  <p
                                    className=""
                                    style={{
                                      fontSize: "12px",
                                    }}
                                  >
                                    {v.price}
                                  </p>
                                </div>
                              </div>
                              <div className="row ">
                                <div className="col-md-5  ">
                                  <p
                                    className="0"
                                    style={{
                                      fontSize: "12px",
                                    }}
                                  >
                                    {v.text4}
                                  </p>
                                </div>
                                <div className="col-md-4 ">
                                  <p
                                    className=""
                                    style={{
                                      fontSize: "12px",
                                    }}
                                  >
                                    {v.time}
                                  </p>
                                </div>
                              </div>
                            </div>
                            <div
                              className="col-md-2 m-1 pt-3 rounded-4 mb-2"
                              style={{
                                fontSize: "14px",
                                backgroundColor: "#1199fa1A",
                              }}
                            >
                              <p>{v.bit}</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Cards