import React from "react";
import { FaAngleUp, FaAngleDown, FaAngleLeft, FaBars } from "react-icons/fa";

const Explore = () => {

    const data=[
        {
            img:"https://d2vi0z68k5oxnr.cloudfront.net/efbf901e-4700-4d5f-b0ee-6ff0b47e0989/original.png?d=sm-cover",
            imgone:"https://d2vi0z68k5oxnr.cloudfront.net/48da74e2-4f65-416d-932a-2654657b73c7/original.gif",
            caption:"Cryptoverse",
            imgtwo:"assets/tick.svg",
            name:"Pâtissier Lionne",
            text:"545/3.9K for sale",
            innertext:"from",
        },
        {
            img:"https://d2vi0z68k5oxnr.cloudfront.net/9526095a-0ca5-488e-9fdc-83d6fbb81b4f/original.png?d=sm-cover",
            imgone:"https://d2vi0z68k5oxnr.cloudfront.net/48da74e2-4f65-416d-932a-2654657b73c7/original.gif",
            caption:"Cryptoverse",
            imgtwo:"assets/tick.svg",
            name:"Pâtissier Lionne",
            text:"545/3.9K for sale",
            innertext:"from",
        },
        {
            img:"https://d2vi0z68k5oxnr.cloudfront.net/acf0fb45-3208-4984-b52a-8c561370255a/original.png?d=sm-cover",
            imgone:"https://d2vi0z68k5oxnr.cloudfront.net/48da74e2-4f65-416d-932a-2654657b73c7/original.gif",
            caption:"Cryptoverse",
            imgtwo:"assets/tick.svg",
            name:"Pâtissier Lionne",
            text:"545/3.9K for sale",
            innertext:"from",
        },
        {
            img:"https://d2vi0z68k5oxnr.cloudfront.net/28059f96-f384-49c8-8ecd-1bcb3ad4f81a/original.jpeg?d=sm-cover",
            imgone:"https://d2vi0z68k5oxnr.cloudfront.net/48da74e2-4f65-416d-932a-2654657b73c7/original.gif",
            caption:"Cryptoverse",
            imgtwo:"assets/tick.svg",
            name:"Pâtissier Lionne",
            text:"545/3.9K for sale",
            innertext:"from",
        },
        {
            img:"https://d2vi0z68k5oxnr.cloudfront.net/88b5fb1e-3536-4c53-ab2f-3db8b800d4de/original.jpeg?d=sm-cover",
            imgone:"https://d2vi0z68k5oxnr.cloudfront.net/48da74e2-4f65-416d-932a-2654657b73c7/original.gif",
            caption:"Cryptoverse",
            imgtwo:"assets/tick.svg",
            name:"Pâtissier Lionne",
            text:"545/3.9K for sale",
            innertext:"from",
        },
        {
            img:"https://d2vi0z68k5oxnr.cloudfront.net/76bda935-1c99-4e79-add6-ee8b079754ab/original.jpeg?d=sm-cover",
            imgone:"https://d2vi0z68k5oxnr.cloudfront.net/48da74e2-4f65-416d-932a-2654657b73c7/original.gif",
            caption:"Cryptoverse",
            imgtwo:"assets/tick.svg",
            name:"Pâtissier Lionne",
            text:"545/3.9K for sale",
            innertext:"from",
        },

        // {
        //     img:"",
        //     imgone:"",
        //     caption:"",
        //     imgtwo:"",
        //     name:"",
        //     text:"",
        //     innertext:"",
        // },
        // {
        //     img:"",
        //     imgone:"",
        //     caption:"",
        //     imgtwo:"",
        //     name:"",
        //     text:"",
        //     innertext:"",
        // }
    ]

  return (
    <>
      <div className="explore">
        <div className="container-fluid">
          <h4 className="mb-4">Explore</h4>
          <div className="row">
            <div className="col-lg-3 ">
              <div className="filter">
                <span>Filters</span>
                <span>
                  <FaAngleLeft />
                  <FaBars />
                </span>
              </div>
              <div className="listing d-flex flex-column">
                <div className="d-flex justify-content-between">
                  <span>Listing Types</span>
                  <span>
                    <FaAngleUp />
                  </span>
                </div>

                <div className="d-flex mt-3">
                  <input type="checkbox" className="input-checks me-2 " />{" "}
                  <span>Buy Now</span>
                </div>
                <div className="d-flex mt-3">
                  <input type="checkbox" className="input-checks me-2 " />{" "}
                  <span>Buy Now</span>
                </div>
              </div>
              <div className="curation d-flex flex-column">
                <div className="d-flex justify-content-between">
                  <span>Curation</span>
                  <span>
                    <FaAngleUp />
                  </span>
                </div>

                <div className="d-flex mt-3">
                  <input type="checkbox" className="input-checks me-2 " />{" "}
                  <span>Buy Now</span>
                </div>
                <div className="d-flex mt-3">
                  <input type="checkbox" className="input-checks me-2 " />{" "}
                  <span>Buy Now</span>
                </div>
              </div>
              <div className="Price">
                <span>Price</span>
                <span>
                  <FaAngleDown />
                </span>
              </div>
              <div className="Price">
                <span>Collections</span>
                <span>
                  <FaAngleDown />
                </span>
              </div>
              <div className="Price">
                <span>Chains</span>
                <span>
                  <FaAngleDown />
                </span>
              </div>
            </div>
            <div className="col-lg-9">
              <div className="row gy-4">
                {
                    data.map((v,i)=>{
                        return(
                            <>
                             <div className="col-lg-4">
                  <div className="card border-0">
                  <img
                        className="img-fluid"
                        src={v.img}
                        alt="no"
                      />
                    <div className="card-body">
                      
                      <div>
                        <span>
                          <img
                            className="card-img-two"
                            src={v.imgone}
                            alt="no"
                          />
                        </span>
                        <small className="text-black mx-2">{v.caption} </small>
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
                      <small className="text-black "> {v.text} </small>
                      <div className="d-flex justify-content-between">
                        <span className="explore-card-b"> {v.innertext} </span>
                        <span className="explore-card-c">Buy</span>
                      </div>
                    </div>
                  </div>
                </div>
                            </>
                        );
                    })
                }
               
               
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Explore;
