import React, { useState } from 'react';
import pic1 from '../img/pic1.png';
import pic2 from '../img/pic2.png';
import pic3 from '../img/pic3.png';
import pic4 from '../img/pic4.png';
import right from '../img/right.png';



const Teams = () => {
    
    const [activeButton, setActiveButton] = useState('UX & Design');

    const handleButtonClick = (buttonName) => {
        setActiveButton(buttonName);
    };
    return (
        <div>
            <div className="container mt-5">
                <div className="row">
                    <h1 className="hero-h1">Built for the way you work</h1>
                    <div className="my-3">
                    <button
                            className={`teams-btn py-2 px-3 ${activeButton === 'UX & Design' ? 'active' : ''}`}
                            onClick={() => handleButtonClick('UX & Design')}>UX &amp; Design</button>
                          <button
                            className={`teams-btn py-2 px-3 ${activeButton === 'Marketing' ? 'active' : ''}`}
                            onClick={() => handleButtonClick('Marketing')}>Marketing</button>
                        <button
                            className={`teams-btn py-2 px-3 ${activeButton === 'Product Management' ? 'active' : ''}`}
                            onClick={() => handleButtonClick('Product Management')}>Product Management</button>
                        <button
                            className={`teams-btn py-2 px-3 ${activeButton === 'Engineering' ? 'active' : ''}`}
                            onClick={() => handleButtonClick('Engineering')}> Engineering
                        </button>
                        <button
                            className={`teams-btn py-2 px-3 ${activeButton === 'Consultants' ? 'active' : ''}`}
                            onClick={() => handleButtonClick('Consultants')} >
                            Consultants
                        </button>
                        <button
                            className={`teams-btn py-2 px-3 ${activeButton === 'Agile Coaches' ? 'active' : ''}`}
                            onClick={() => handleButtonClick('Agile Coaches')}>
                            Agile Coaches
                        </button>
                        <button
                            className={`teams-btn py-2 px-3 ${activeButton === 'Sales' ? 'active' : ''}`}
                            onClick={() => handleButtonClick('Sales')}>
                            Sales
                        </button>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-4 mt-5">
                        <div className="d-flex">
                            <i className="fa-solid fa-check me-3"></i>
                            <p className="hero-p">Build low-fi wireframes</p>
                        </div>
                        <div className="d-flex">
                            <i className="fa-solid fa-check me-3"></i>
                            <p className="hero-p">Involve stakeholders in the design process</p>
                        </div>
                        <div className="d-flex">
                            <i className="fa-solid fa-check me-3"></i>
                            <p className="hero-p">Run engaging design workshops</p>
                        </div>

                        <a href="#" className="btn text-primary text-decoration-underline">Learn More <i className="fa-solid fa-arrow-right-long"></i></a>

                        <p className="hero-p mt-5">Integrate your favorite tools</p>
                        <div className="d-flex gap-4">
                            <img src={pic1} alt="" />
                            <img src={pic2} alt="" />
                            <img src={pic3} alt="" />
                            <img src={pic4} alt="" />

                        </div>
                    </div>
                    <div className="col-md-8">
                        <img src={right} className="img img-fluid" alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Teams;
