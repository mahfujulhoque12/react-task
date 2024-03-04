import React from 'react';
import frame from '../img/Frame.png'
import get from '../img/get.png'
import cetera from '../img/cetera.png'
import hero from '../img/hero.png'
import { FaStar, FaRegStar,FaLongArrowAltRight } from 'react-icons/fa';

const Hero = () => {
    return (
        <div className="container">
            <div className="row mt-5 mb-5">
                <div className="col-lg-5">
                    <div className="hero-left">
                        <h1 className="hero-h1">Take ideas from better to best</h1>
                        <p className="hero-p">Miro is your team's visual platform to connect, collaborate, and create — together.</p>
                        <input type="email" placeholder="Enter your work email" className="form-control border-radius mt-4" />
                        <a href="#" className="btn btn-primary border-radius w-100 mt-4">Sign Up Free <FaLongArrowAltRight/></a>
                        <p className="text-muted"><small>Collaborate with your team within minutes</small></p>
                        <div className="d-flex gap-4 star-logo-div">
                            <div>
                            <FaStar className="text-orange" />
                            <FaStar className="text-orange" />
                            <FaStar className="text-orange" />
                            <FaStar className="text-orange" />
                            <FaRegStar className="text-orange" />
                            <p className="star-p">Based on 5149+ reviews:</p>
                            </div>
                            <div>
                                <img src={frame } alt="" />
                                <img src={get} alt="" className="mx-3" />
                                <img src={cetera} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-7 hero-img">
                    <img src={hero} className="img img-fluid" alt="" />
                </div>
            </div>
        </div>
    );
};

export default Hero;
