import react from "react";
import { Typewriter } from "react-simple-typewriter";
import { Link } from "react-router-dom";

const Hero = () => {

    return (
        <>
            <header>
                <section className="container main-hero-container">
                    <div className="container col-xxl-8 px-4 py-5">
                        <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
                            <div className="col-10 col-sm-12 col-lg-4">
                                <img src="./assets/img/1.png" class="d-block hero-img img-fluid" alt="Bootstrap Themes" loading="lazy" />
                            </div>

                            <div class="col-lg-8 col-sm-12 col-12 mx-sm-auto">
                                <h1 className="main-heading">Codewithdaivesh</h1>

                                <h3 className="hero-title"> Learn Coding With us
                                </h3>

                                <p className="hero-para">
                                    Learn to code with our beginner-friendly tutorials and examples. Read tutorials, try examples, write programs, and learn to code
                                </p>

                                <div className="social-icon gap-3">
                                    <a href="https://www.facebook.com/codewithdaivesh">
                                        <i class="bi bi-facebook" ></i>
                                    </a>

                                    <a href="https://www.instagram.com/codewithdaivesh">
                                        <i class="bi bi-instagram"></i>
                                    </a>

                                    <a href="https://twitter.com/codewithdaivesh">
                                        <i class="bi bi-twitter"></i>
                                    </a>

                                    <a href="https://in.linkedin.com/in/daivesh-suryawanshi-105231139">
                                        <i class="bi bi-linkedin"></i>
                                    </a>

                                    <a href="https://github.com/daiveshvsuryawanshi">
                                        <i class="bi bi-github"></i>
                                    </a>
                                </div>

                                <div class="d-grid gap-2 d-flex justify-content-md-start justify-content-sm-start">

                                    <button className="btn btn-style" >Our Course</button>


                                    <Link to="/contact">
                                        <button className="btn-style btn-style-border"
                                        >Hire Me</button>
                                    </Link>

                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </header>
        </>
    )
}

export default Hero;