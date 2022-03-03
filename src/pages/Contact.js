import React, { useState, useRef } from "react";
import emailjs from '@emailjs/browser';

const Contact = () => {

  

 

    // email server sending mail 
    const form = useRef();

    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.sendForm('service_uqayekf', 'template_460q3bi', form.current, 'user_kUYP97Fv6vU5MDLn55qwx')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
    };

   

  
    

    return (
        <>

            <section className="contactus-section overflow-hidden">

                <div className="container">
                    <h1 className="conatct-heading text-center fw-bold">
                        Contact Us.
                    </h1>
                    <div className="row">
                        <div className="col-12 col-lg-10 mx-auto">

                            <div className="row">
                                <div className="contact-leftside col-12 col-lg-5">
                                    <h1 className="mini-title fw-bold">
                                        Connect With Us.
                                    </h1>
                                    <p className="contact-para">
                                        If you have any queries, please do not hesitate to contact me.
                                        <br />
                                        If you are intersted learn coding please contact us.
                                    </p>

                                    <div class="d-flex mb-3 simpleCircle">
                                        <i class="bi bi-geo-alt"></i>
                                        <p class="contact-info my-auto ms-4">Siddhivinayak plaza Thengode (Satana) </p>
                                    </div>

                                    <div class="d-flex mb-3 simpleCircle">
                                        <i class="bi bi-whatsapp"></i>
                                        <p class="contact-info my-auto ms-4">+91 9322142526</p>
                                    </div>

                                    <div class="d-flex mb-3 simpleCircle">
                                        <i class="bi bi-envelope"></i>
                                        <p class="contact-info my-auto ms-4">codewithdaivesh@hotmail.com</p>
                                    </div>

                                </div>

                                {/* right side contact form  */}
                                <div className="contact-rightside col-12 col-lg-7">
                                    <form method="POST" ref={form} onSubmit={sendEmail} 
                                    >
                                        <div className="row">
                                            <div className="col-12 col-lg-12 contact-input-feild">
                                            <input
                                                    type="text"
                                                    name="user_name"
                                                    id=""
                                                    className="form-control"
                                                    placeholder="Full Name"
                        
                                                />
                                            </div>
                                           
                                        </div>
                                        <div className="row">
                                            
                                            <div className="col-12 col-lg-12 contact-input-feild">
                                                <input
                                                    type="email"
                                                    name="user_email"
                                                    id=""
                                                    className="form-control"
                                                    placeholder="Email Address"
                        
                                                />
                                                
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-12 contact-input-feild">
                                                <input
                                                    type="text"
                                                    name="subject"
                                                    id=""
                                                    className="form-control"
                                                    placeholder="Subject"
                                                    
                                                />
                                            </div>
                                        </div>

                                        <div className="row">
                                            <div className="col-12 ">
                                                <input
                                                    type="text"
                                                    name="message"
                                                    id=""
                                                    className="form-control"
                                                    placeholder="Enter Your Message"
                                                  
                                                />
                                            </div>
                                        </div>

                                        <div class="form-check form-checkbox-style">
                                        <input type="submit" value="Send" className="btn btn-style w-100"  />
                                        </div>


                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Contact;
