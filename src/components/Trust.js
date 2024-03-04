import React from 'react';
import trust1 from '../img/trust1.png'
import trust2 from '../img/trust2.png'
import trust3 from '../img/trust3.png'
import trust4 from '../img/trust4.png'
import trust5 from '../img/trust5.png'


const Trust = () => {
    return (
        <div className="container mt-5">
            <div className="row">
                <p className="trust-p">Trusted by 45M+ users</p>
                <div className="d-flex justify-content-center align-items-center mt-3 start"> 
                    <img src={trust1} className="img img-fluid" alt="" />
                    <img src={trust2} className="img img-fluid" alt="" />
                    <img src={trust3} className="img img-fluid" alt="" />
                    <img src={trust4} className="img img-fluid" alt="" />
                    <img src={trust5} className="img img-fluid" alt="" />
                </div>
            </div>
        </div>
    );
};

export default Trust;
