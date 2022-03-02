import React, { useState } from "react";
import serviceapi from "./../api/serviceApi";

const Services = () => {
  const [serviceData, setServiceData] = useState(serviceapi);
  return (
    <>
      <section className="contactus-section ">
        <div className="container service-container">
          <h1 className="conatct-heading text-center fw-bold">
            What We Do Offer
          </h1>
          <div className="row">
            {serviceData.map((curElem) => {
              const { id, logo, title, info } = curElem;
              return (
                <>
                  <div
                    className="col-10 col-lg-4 col-xxl-4 mx-auto work-container-subdiv"
                    key={id}>
                    <i className={`fontawesome-style ${logo}`}></i>
                    <h2 className="sub-heading">{title}</h2>
                    <p className="service-para">{info}</p>
                  </div>
                </>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default Services;
