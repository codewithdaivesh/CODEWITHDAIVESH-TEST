import React, { useState } from "react";

const Aboutus = () => {
    return (
        <>
            <section className="contactus-section  our-services">
                <div className="container mb-5">
                    <h1 className="conatct-heading text-center fw-bold">
                        About US
                    </h1>                    <div className="row">
                        <div className="col-12 col-lg-5 text-center">
                            <img src="./assets/img/1.jpg" alt="aboutusIMg" />
                        </div>

                        {/* 1section right side data  */}
                        <div className="col-12 col-lg-7 our-services-list my-auto">


                            <h3 className="mini-title">
                                Hello I"m Daivesh Vijay Suryawanshi  </h3>

                            <div className="row our-services-info">

                                <div className="col-12 our-services-data">
                                    <p className="our-services-para">
                                        I'm a IT Professional. we offers a wide range of IT services ranging from App Development, Website Development, in India. And Also Providing the Content Writing Services. for like blogging , Video Script writing. And I also Known about some computer Programming. like for C, C++, Java , Javascript, html , Css. I also know a little bit about hacking.                                    </p>
                                </div>
                            </div>

                            <br />
                            {/* <button className="btn-style btn-style-border">learn more</button> */}
                        </div>

                        <div className="container service-container">

                            <div className="row">

                                {/*  */}

                                <div
                                    className="col-10 col-lg-4 col-xxl-4 mx-auto work-container-subdiv"
                                >
                                    <i className="bi bi-terminal fs-1 fw-bold d-flex justify-content-center py-4"></i>
                                    <h2 className="sub-heading text-center">Programming made easy</h2>

                                    <p className="fs-4 pt-2">
                                    We focus on simplicity. Programming tutorials and examples written in simple, understandable language for beginners
                                    </p>


                                </div>

                                {/*  */}
                                <div
                                    className="col-10 col-lg-4 col-xxl-4 mx-auto work-container-subdiv"
                                >
                                   <i className="bi bi-play-circle fs-1 fw-bold d-flex justify-content-center py-4"></i>
                                    <h2 className="sub-heading text-center">Video Course
</h2>

                                    <p className="fs-4 pt-2">
                                    Videos to keep you on track and for better understanding of concepts. we provide video tutorials.
                                    </p>
                                </div>

                                {/*  */}
                                <div
                                    className="col-10 col-lg-4 col-xxl-4 mx-auto work-container-subdiv"
                                >
                                    <i className="bi bi-code-slash fs-1 fw-bold d-flex justify-content-center py-4"></i>
                                    <h2 className="sub-heading text-center">Learn by Doing</h2>

                                    <p className="fs-4 pt-2">
                                    The only way to learn to program is by writing code. We provide a lot of complete examples that will help you run and edit code on your own
                                    </p>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>

            </section>


        </>
    );
};

export default Aboutus;
