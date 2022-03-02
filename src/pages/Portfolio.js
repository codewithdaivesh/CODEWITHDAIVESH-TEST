import React, { useState } from "react";


const Portfolio = () => {


    return (
        <>
            <section className="contactus-section ">
                <div className="container service-container">
                <h1 className="conatct-heading text-center fw-bold">
                        Our Course
                    </h1>
                    <div className="row">

                        {/*  */}

                        <div
                            className="col-10 col-lg-4 col-xxl-4 mx-auto work-container-subdiv"
                        >
                            <img src="./assets/img/course/2.png" alt="logo" className="work-img  pt-4" />
                            <h2 className="sub-heading">Learn C Programming Language</h2>

                        </div>

                        {/*  */}
                        <div
                            className="col-10 col-lg-4 col-xxl-4 mx-auto work-container-subdiv"
                            >
                            <img src="./assets/img/course/3.png" alt="logo" className="work-img  pt-4" />
                            <h2 className="sub-heading">Learn C++ Programming Language</h2>
                        </div>

                        {/*  */}
                        <div
                            className="col-10 col-lg-4 col-xxl-4 mx-auto work-container-subdiv"
                            >
                            <img src="./assets/img/course/1.png" alt="logo" className="work-img  pt-4" />
                            <h2 className="sub-heading">Learn Web Development</h2>
                        </div>

                    </div>
                </div>
            </section>
        </>
    );
};

export default Portfolio;
