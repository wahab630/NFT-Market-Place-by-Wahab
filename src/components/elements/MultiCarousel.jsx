import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const MultiCarousel = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 5,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    }
  };

  return (
    <>
      <div className="mutlicarousel">
        <div className="container-fluid">
            <h5 className="fw-bold mb-4">Top Collections</h5>
          <div className="row">
            <div className="col">
              <Carousel
                swipeable={false}
                draggable={false}
                showDots={false}
                responsive={responsive}
                ssr={true} // means to render carousel on server-side.
                infinite={true}
                //   autoPlay={this.props.deviceType !== "mobile" ? true : false}
                autoPlaySpeed={1000}
                autoPlay={false}
                arrows={false}
                keyBoardControl={true}
                customTransition="all .5"
                transitionDuration={500}
                containerClass="carousel-container"
                removeArrowOnDeviceType={["tablet", "mobile"]}
                //   deviceType={this.props.deviceType}
                dotListClass="custom-dot-list-style"
                itemClass="carousel-item-padding-40-px"
              >
                <div>
                  <img
                    className="img-fluid"
                    src="https://d2vi0z68k5oxnr.cloudfront.net/e1fea25f-6ae8-4317-8fad-dfc94c03c3ba/original.png?d=lg-cover"
                    alt="no"
                  />
                </div>
                <div>
                  {" "}
                  <img
                    className="img-fluid"
                    src="https://d2vi0z68k5oxnr.cloudfront.net/2ba6d3df-5a6a-4b2b-814e-98f0af890eb1/original.jpeg?d=lg-cover"
                    alt="no"
                  />
                </div>
                <div>
                  {" "}
                  <img
                    className="img-fluid"
                    src="https://d2vi0z68k5oxnr.cloudfront.net/9e167897-8383-4b46-ba88-ae8bc76154e1/original.png?d=lg-cover"
                    alt="no"
                  />
                </div>
                <div>
                  {" "}
                  <img
                    className="img-fluid"
                    src="https://d2vi0z68k5oxnr.cloudfront.net/1a157436-e668-451b-b65c-2b2233e008c4/original.png?d=lg-cover"
                    alt="no"
                  />
                </div>
                <div>
                  {" "}
                  <img
                    className="img-fluid"
                    src="https://d2vi0z68k5oxnr.cloudfront.net/47ec3963-dd1e-4a05-83c5-4cc96ece5120/original.png?d=lg-cover"
                    alt="no"
                  />
                </div>
                <div>
                  {" "}
                  <img
                    className="img-fluid"
                    src="https://d2vi0z68k5oxnr.cloudfront.net/bd58d469-3385-4e12-be4a-696792cdcc47/original.png?d=lg-cover"
                    alt="no"
                  />
                </div>
                <div>
                  {" "}
                  <img
                    className="img-fluid"
                    src="https://d2vi0z68k5oxnr.cloudfront.net/3d1c8681-5943-456d-9606-823a937b9597/original.png?d=lg-cover"
                    alt="no"
                  />
                </div>
                <div>
                  {" "}
                  <img
                    className="img-fluid"
                    src="https://d2vi0z68k5oxnr.cloudfront.net/3c21cdf8-0603-48c8-a1d4-6e7a1bb4228c/original.png?d=lg-cover"
                    alt="no"
                  />
                </div>
              </Carousel>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MultiCarousel;
