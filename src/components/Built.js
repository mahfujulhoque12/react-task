import React, { useState } from 'react';
import built from '../img/built.png'

const Built = () => {

        const [activeButton, setActiveButton] = useState('Brainstorming');

        const handleButtonClick = (buttonName) => {
            setActiveButton(buttonName);
        };
    
    return (
        <div>
            <div className="container mt-5">
                <div className="row">
                    <h1 className="hero-h1">Built for the way you work</h1>
                    <div className="my-3">
                        <button className={`butil-btn py-2 px-3 ${activeButton === 'Brainstorming' ? 'active' : ''}`} onClick={() => handleButtonClick('Brainstorming')}>Brainstorming</button>
                        <button className={`butil-btn py-2 px-3 ${activeButton === 'Diagramming' ? 'active' : ''}`} onClick={() => handleButtonClick('Diagramming')}>Diagramming</button>
                        <button className={`butil-btn py-2 px-3 ${activeButton === 'Meetings & Workshops' ? 'active' : ''}`} onClick={() => handleButtonClick('Meetings & Workshops')}>Meetings & Workshops</button>
                        <button className={`butil-btn py-2 px-3 ${activeButton === 'Scrum Events' ? 'active' : ''}`} onClick={() => handleButtonClick('Scrum Events')}>Scrum Events</button>
                        <button className={`butil-btn py-2 px-3 ${activeButton === 'Mapping' ? 'active' : ''}`} onClick={() => handleButtonClick('Mapping')}>Mapping</button>
                        <button className={`butil-btn py-2 px-3 ${activeButton === 'Research & Design' ? 'active' : ''}`} onClick={() => handleButtonClick('Research & Design')}>Research & Design</button>
                        <button className={`butil-btn py-2 px-3 ${activeButton === 'Strategic Planning' ? 'active' : ''}`} onClick={() => handleButtonClick('Strategic Planning')}>Strategic Planning</button>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-4 mt-5">
                        <h5 className="mb-5">Brainstorming</h5>
                        <p className="hero-p">Unleash creative ideas and build on them with the help of sticky notes, images, mind maps, videos, drawing capabilities — the list goes on.</p>
                        <a href="" className="btn text-primary text-decoration-underline">Learn More <i className="fa-solid fa-arrow-right-long"></i></a>
                    </div>
                    <div className="col-md-8">
                        <img src={built} className="img img-fluid" alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Built;
