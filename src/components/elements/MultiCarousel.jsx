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
      items: 3,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 2,
    },
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
                arrows={true}
                keyBoardControl={true}
                customTransition="all .5"
                // itemClass={styles.carouselItem}
                partialVisible={false}
                // renderButtonGroupOutside={true}
                // customButtonGroup={<ButtonGroup />}
                transitionDuration={500}
                containerClass="carousel-container"
                removeArrowOnDeviceType={["tablet", "mobile"]}
                //   deviceType={this.props.deviceType}
                dotListClass="custom-dot-list-style"
                itemClass="carousel-item-padding-0-px"
              >
                <div className="first">
                  <div className="inner">
                    <img
                      src="https://d2vi0z68k5oxnr.cloudfront.net/cf1d2314-9d23-4564-aa76-38ed6b4e77ad/original.png?d=sm-logo"
                      className="below-img me-2"
                      alt="no"
                    />
                    <span>Art Blocks</span>
                    <span>
                      <img src="assets/tick.svg" alt="no" />
                    </span>
                  </div>
                </div>
                <div className="second">
                  <div className="inner">
                    <img
                      src="https://d2vi0z68k5oxnr.cloudfront.net/cf1d2314-9d23-4564-aa76-38ed6b4e77ad/original.png?d=sm-logo"
                      className="below-img me-2"
                      alt="no"
                    />
                    <span>Art Blocks</span>
                    <span>
                      <img src="assets/tick.svg" alt="no" />
                    </span>
                  </div>
                </div>
                <div className="third">
                  <div className="inner">
                    <img
                      src="https://d2vi0z68k5oxnr.cloudfront.net/cf1d2314-9d23-4564-aa76-38ed6b4e77ad/original.png?d=sm-logo"
                      className="below-img me-2"
                      alt="no"
                    />
                    <span>Art Blocks</span>
                    <span>
                      <img src="assets/tick.svg" alt="no" />
                    </span>
                  </div>
                </div>
                <div className="fourth">
                  <div className="inner">
                    <img
                      src="https://d2vi0z68k5oxnr.cloudfront.net/cf1d2314-9d23-4564-aa76-38ed6b4e77ad/original.png?d=sm-logo"
                      className="below-img me-2"
                      alt="no"
                    />
                    <span>Art Blocks</span>
                    <span>
                      <img src="assets/tick.svg" alt="no" />
                    </span>
                  </div>
                </div>
                <div className="five">
                  <div className="inner">
                    <img
                      src="https://d2vi0z68k5oxnr.cloudfront.net/cf1d2314-9d23-4564-aa76-38ed6b4e77ad/original.png?d=sm-logo"
                      className="below-img me-2"
                      alt="no"
                    />
                    <span>Art Blocks</span>
                    <span>
                      <img src="assets/tick.svg" alt="no" />
                    </span>
                  </div>
                </div>
                <div className="six">
                  <div className="inner">
                    <img
                      src="https://d2vi0z68k5oxnr.cloudfront.net/cf1d2314-9d23-4564-aa76-38ed6b4e77ad/original.png?d=sm-logo"
                      className="below-img me-2"
                      alt="no"
                    />
                    <span>Art Blocks</span>
                    <span>
                      <img src="assets/tick.svg" alt="no" />
                    </span>
                  </div>
                </div>
                <div className="seven">
                  <div className="inner">
                    <img
                      src="https://d2vi0z68k5oxnr.cloudfront.net/cf1d2314-9d23-4564-aa76-38ed6b4e77ad/original.png?d=sm-logo"
                      className="below-img me-2"
                      alt="no"
                    />
                    <span>Art Blocks</span>
                    <span>
                      <img src="assets/tick.svg" alt="no" />
                    </span>
                  </div>
                </div>
                <div className="eight">
                  <div className="inner">
                    <img
                      src="https://d2vi0z68k5oxnr.cloudfront.net/cf1d2314-9d23-4564-aa76-38ed6b4e77ad/original.png?d=sm-logo"
                      className="below-img me-2"
                      alt="no"
                    />
                    <span>Art Blocks</span>
                    <span>
                      <img src="assets/tick.svg" alt="no" />
                    </span>
                  </div>
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
