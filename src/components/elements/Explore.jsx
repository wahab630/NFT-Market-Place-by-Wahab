import React from "react";
import { useNavigate } from "react-router-dom";
import { ProSidebarProvider } from "react-pro-sidebar";
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
      text: "545/3.9K for sale",
      innertext: "from",
    },
    {
      img: "https://d2vi0z68k5oxnr.cloudfront.net/9526095a-0ca5-488e-9fdc-83d6fbb81b4f/original.png?d=sm-cover",
      imgone:
        "https://d2vi0z68k5oxnr.cloudfront.net/08e89ca3-ed8c-4e6d-8699-bff8871f8295/original.webp?d=sm-logo",
      caption: "Cryptoverse",
      imgtwo: "assets/tick.svg",
      name: "Pâtissier Lionne",
      text: "545/3.9K for sale",
      innertext: "from",
    },
    {
      img: "https://d2vi0z68k5oxnr.cloudfront.net/acf0fb45-3208-4984-b52a-8c561370255a/original.png?d=sm-cover",
      imgone:
        "https://d2vi0z68k5oxnr.cloudfront.net/08e89ca3-ed8c-4e6d-8699-bff8871f8295/original.webp?d=sm-logo",
      caption: "Cryptoverse",
      imgtwo: "assets/tick.svg",
      name: "Pâtissier Lionne",
      text: "545/3.9K for sale",
      innertext: "from",
    },
    {
      img: "https://d2vi0z68k5oxnr.cloudfront.net/28059f96-f384-49c8-8ecd-1bcb3ad4f81a/original.jpeg?d=sm-cover",
      imgone:
        "https://d2vi0z68k5oxnr.cloudfront.net/08e89ca3-ed8c-4e6d-8699-bff8871f8295/original.webp?d=sm-logo",
      caption: "Cryptoverse",
      imgtwo: "assets/tick.svg",
      name: "Pâtissier Lionne",
      text: "545/3.9K for sale",
      innertext: "from",
    },
    {
      img: "https://d2vi0z68k5oxnr.cloudfront.net/88b5fb1e-3536-4c53-ab2f-3db8b800d4de/original.jpeg?d=sm-cover",
      imgone:
        "https://d2vi0z68k5oxnr.cloudfront.net/08e89ca3-ed8c-4e6d-8699-bff8871f8295/original.webp?d=sm-logo",
      caption: "Cryptoverse",
      imgtwo: "assets/tick.svg",
      name: "Pâtissier Lionne",
      text: "545/3.9K for sale",
      innertext: "from",
    },
    {
      img: "https://d2vi0z68k5oxnr.cloudfront.net/76bda935-1c99-4e79-add6-ee8b079754ab/original.jpeg?d=sm-cover",
      imgone:
        "https://d2vi0z68k5oxnr.cloudfront.net/48da74e2-4f65-416d-932a-2654657b73c7/original.gif",
      caption: "Cryptoverse",
      imgtwo: "assets/tick.svg",
      name: "Pâtissier Lionne",
      text: "545/3.9K for sale",
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

  const goToCardOne = () => {
    navigate("/cardOne");
  };

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
              <div className="row gy-4 ">
                {data.map((v, i) => {
                  return (
                    <>
                      <div className="col-lg-4">
                        <div
                          className="card border-0  "
                          onClick={() => goToCardOne()}
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
                                <img src={v.imgtwo} alt="no" />
                              </span>
                            </div>
                            <small className="text-black text-muted">
                              {" "}
                              {v.text}{" "}
                            </small>
                            <div className="d-flex justify-content-between">
                              <span className="explore-card-b text-muted">
                                {" "}
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
