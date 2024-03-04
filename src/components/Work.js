import React from 'react';
import togother from '../img/togother.png'
const Work = () => {
    return (
        <div className="container">
            <div className="row together-gap">
                <div className="col-md-5 together-left">
                    <h1 className="hero-h1">Work together, wherever you work</h1>
                    <p className="hero-p">In the office, remote, or a mix of the two, with Miro, your team can connect, collaborate, and co-create in one space no matter where you are.</p>
                    <a href="" className="btn text-primary text-decoration-underline">Learn More <i className="fa-solid fa-arrow-right-long"></i></a>
                </div>
                <div className="col-md-7">
                    <img src={togother} className="img img-fluid" alt="" />
                </div>
            </div>
        </div>
    );
};

export default Work;
