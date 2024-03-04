import React from 'react';
import { FaTwitterSquare,FaFacebookSquare,FaYoutubeSquare   } from 'react-icons/fa';
const Footer = () => {
    return (
        <div className='footer'>
            <div className="container mt-5 ">
                <div className="row">
                    <div className="col-md-7 mt-5 col-sm-12">
                        <div className="row footer-left">
                            <div className="col-md-8">
                                <p className="footer-p">Scan. Detect. Remove.</p>
                                <div className="d-flex gap-4 mt-5 mb-5">
                                    <FaTwitterSquare className=' text-white fs-4'/>
                                    <FaFacebookSquare className="text-white fs-4"  />
                                    <FaYoutubeSquare className="text-white fs-4" />
                                </div>
                                <a href="#" className="text-white me-4">Privacy Policy</a>
                                <a href="#" className="text-white">Terms of Service</a>
                                <p className="hero-p text-white mt-5 footer-des">Copyright &copy; 2022 Certo Software Limited | Registered in England & Wales No. 10072356</p>
                                <p className="hero-p text-white footer-des">Designed & developed by <a href="#" className="text-white">Bigger Picture</a></p>
                            </div>
                            <div className="col-md-3">
                                <h2 className="text-white footer-h2">Miro.</h2>
                                <p className="footer-border"></p>
                                <div className="d-flex flex-column gap-4 mt-5">
                                    <a href="#" className="footer-link"><span className="me-3">__ </span> iPhone</a>
                                    <a href="#" className="footer-link"><span className="me-3">__ </span> Android</a>
                                    <a href="#" className="footer-link"><span className="me-3">__ </span> Help</a>
                                    <a href="#" className="footer-link"><span className="me-3">__ </span> About</a>
                                    <a href="#" className="footer-link"><span className="me-3">__ </span> Insights</a>
                                </div>
                            </div>
                        </div>
                        <p className="hero-p footer-des text-white mt-5">Apple, the Apple logo, and iPhone are trademarks of Apple Inc., registered in the U.S. and other countries. App Store is a service mark of Apple Inc. Android, Google Play and the Google Play logo are trademarks of Google LLC.</p>
                    </div>
                    <div className="col-md-5 col-sm-12 mt-5">
                        <div className="footer-right">
                            <h3 className="newslater">Sign up to our newsletter</h3>
                            <p className="newslater-p">Receive the latest mobile security news, exclusive discounts & offers straight to your inbox!</p>
                            <div className="pb-2">
                                <input type="email" className="form-control newslater-input ms-3 mt-4 mb-5" placeholder="Email address" />
                                <button className="btn submit" type="submit">submit</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;
