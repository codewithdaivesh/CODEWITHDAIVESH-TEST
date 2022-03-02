import React, { useState } from "react";

const Aboutus = () => {
  return (
    <>
      <section className="common-section our-services">
        <div className="container mb-5">
          <div className="row">
            <div className="col-12 col-lg-5 text-center ">
              <img src="./assets/img/developer.gif" alt="aboutusIMg" />
            </div>

            {/* 1section right side data  */}
            <div className="col-12 col-lg-7 our-services-list my-auto">


              <h3 className="hero-title">
                Learn Coding With us  </h3>

              <div className="row our-services-info">

                <div className="col-12 our-services-data">

                  <p className="our-services-para">
                    We have provide online and ofline coding classes. to learn coding and web design and development.
                  </p>

                  <p className="our-services-para">
                  Videos to keep you on track and for better understanding of concepts. we provide video tutorials.
                  </p>

                  <p className="our-services-para">
                  The only way to learn to program is by writing code. We provide a lot of complete examples that will help you run and edit code on your own
                  </p>

                  <p className="our-services-para">
                  We focus on simplicity. Programming tutorials and examples written in simple, understandable language for beginners 
                  </p>


                </div>
              </div>


              <br />
              {/* <button className="btn-style btn-style-border">learn more</button> */}
            </div>
          </div>
        </div>
      </section>


    </>
  );
};

export default Aboutus;
