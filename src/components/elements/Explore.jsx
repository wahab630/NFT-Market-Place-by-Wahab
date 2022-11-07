import React from "react";
import { useNavigate } from "react-router-dom";
import { ProSidebarProvider } from "react-pro-sidebar";
import { FaExchangeAlt} from "react-icons/fa";
import Esidebar from "./Esidebar";

const Explore = () => {
  const data = [
    {
      img: "https://d2vi0z68k5oxnr.cloudfront.net/efbf901e-4700-4d5f-b0ee-6ff0b47e0989/original.png?d=sm-cover",
      imgone:
        "https://d2vi0z68k5oxnr.cloudfront.net/48da74e2-4f65-416d-932a-2654657b73c7/original.gif",
      caption: "Cryptoverse",
      imgtwo: "assets/tick.svg",
      name: "Pâtissier Lionne",
      cronos:"cronos",
      imgthree:"assets/c.svg",
      text: "545/3.9K for sale",
      innertext: "from",
    },
    {
      img: "https://d2vi0z68k5oxnr.cloudfront.net/0ff0e98e-fff4-4113-98fa-c5fa75a5310e/original.jpeg?d=sm-cover",
      imgone:
        "https://d2vi0z68k5oxnr.cloudfront.net/08e89ca3-ed8c-4e6d-8699-bff8871f8295/original.webp?d=sm-logo",
      caption: "Loaded Lions",
      imgtwo: "assets/tick.svg",
      name: "Loaded Lion 999",
      imgthree:"assets/c.svg",
      text: "1 minted",
      innertext: "from",
      cronos:"cronos",
    },
    {
      img: "https://d2vi0z68k5oxnr.cloudfront.net/5b1d30d8-67e9-4149-9a35-2ae1e6b1d89b/original.gif",
      imgone:
        "https://d2vi0z68k5oxnr.cloudfront.net/6f1bc1d8-8e81-4640-85fe-20e8bd845be6/original.png?d=sm-logo",
      caption: "Cronos World Tour",
      imgtwo: "assets/tick.svg",
      name: "Cronos World Tour at Messa. ...",
      imgthree:"assets/c.svg",
      text: "1 minted",
      innertext: "from",
      cronos:"cronos",
    },
    {
      img: "https://d2vi0z68k5oxnr.cloudfront.net/9f94ce47-9f72-4c1c-b3fd-e209e49890ca/original.png?d=sm-cover",
      imgone:
        "https://d2vi0z68k5oxnr.cloudfront.net/9af2e6a6-412a-42f8-af60-5385ac2face0/original.png?d=sm-logo",
      caption: "Meta Cyborgs",
      imgtwo: "assets/tick.svg",
      cronos:"cronos",
      imgthree:"assets/c.svg",
      name: "The Meta Cyborgs 9102",
      text: "545/3.9K for sale",
      innertext: "from",
    },
    {
      img: "https://d2vi0z68k5oxnr.cloudfront.net/11ecba7a-6ef0-4439-b78e-fb4dccd0cd1c/original.png?d=sm-cover",
      imgone:
        "https://d2vi0z68k5oxnr.cloudfront.net/0240fa7f-38b2-4b08-a05b-e1b5c127ccd5/original.jpeg?d=sm-logo",
      caption: "Cryptoverse",
      imgtwo: "assets/tick.svg",
      name: "Bookers 2421",
      cronos:"cronos",
      imgthree:"assets/c.svg",
      text: "545/3.9K for sale",
      innertext: "from",
    },
    {
      img: "https://d2vi0z68k5oxnr.cloudfront.net/a32eaa6d-aa0c-4eb9-9ee1-02f742f299ce/original.png?d=sm-cover",
      imgone:
        "https://d2vi0z68k5oxnr.cloudfront.net/05881eb0-6266-4b07-b9f2-e9cf1161b4b4/original.jpeg?d=sm-logo",
      caption: "Cryptoverse",
      imgtwo: "assets/tick.svg",
      name: "Bushicro Warrior 1969",
      imgthree:"assets/c.svg",
      text: "545/3.9K for sale",
      cronos:"cronos",
      innertext: "from",
    },

    // {
    //     img:"",
    //     imgone:"",
    //     caption:"",
    //     imgtwo:"",
    //     name:"",
    //     text:"",
    //     innertext:"",
    // }
  ];

  const navigate = useNavigate();

  const component=(v)=>
  {
    navigate("/cardOne", {state:v});
  }
  

  return (
    <>
      <div className="explore">
        <div className="container-fluid">
          <h4 className=" ">Explore</h4>
          <div className="row">
            <div className="col-lg-3  pt-5  explore-left">
              <ProSidebarProvider>
                <Esidebar/>
              </ProSidebarProvider>
            </div>

         
            <div className="col-lg-9  explore-right">
              <div className="mb-2 d-flex justify-content-between">
                <span></span>
                <div className="dropdown ms-4 cards-top-btn">
                <FaExchangeAlt/> 
                  <button
                    className="btn dropdown-btn dropdown-toggle "
                    type="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Sort By
                  </button>
                  <ul className="dropdown-menu  ">
                    <li>
                      <a className="dropdown-item text-black" href="no">
                      Most relevent
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item text-black" href="no">
                      Recently
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item text-black" href="no">
                      Newest
                      </a>
                    </li>
                  </ul>
                </div>
               
                
              </div>
              <div className="row gy-4 ">
                {data.map((v, i) => {
                  return (
                    <>
                      <div className="col-lg-4 col-md-6 ">
                        <div
                          className="card border-0  "
                          onClick={()=>
                            {
                                component(v)
                            }}
                        
                        >
                          <img className="img-fluid" src={v.img} alt="no" />
                          <div className="card-body">
                            <div>
                              <span>
                                <img
                                  className="card-img-two"
                                  src={v.imgone}
                                  alt="no"
                                />
                              </span>
                              <small className="text-black mx-2">
                                {v.caption}{" "}
                              </small>
                              <span>
                                <img src={v.imgtwo} alt="no" />
                              </span>
                            </div>
                            <div className="d-flex justify-content-between">
                              <span className="text-black">{v.name} </span>
                              <span>
                                <img src={v.imgthree} alt="no" />
                              </span>
                            </div>
                            <small className="text-black text-muted">
                         
                              {v.text}{" "}
                            </small>
                            <div className="d-flex justify-content-between">
                              <span className="explore-card-b text-muted">
                           
                                {v.innertext}{" "}
                              </span>
                              <span className="explore-card-c">Buy</span>
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
    </>
  );
};

export default Explore;
