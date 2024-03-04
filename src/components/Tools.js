import React from 'react';
import tools from '../img/tools.png';
const Tools = () => {
    return (
        <div>
            <div className="container">
                <div className="row together-gap">
                    <div className="col-md-7">
                        <img src={tools} className="img img-fluid" alt="" />
                    </div>

                    <div className="col-md-5 mt-5">
                        <h1 className="hero-h1">Connect <br />
                            your tools, <br /> close your tabs</h1>
                        <p className="hero-p">Whether you want to edit your Google Docs, resolve Jira issues, or collaborate over Zoom, Miro has 100+ integrations with tools you already use and love.</p>
                        <a href="" className="btn text-primary text-decoration-underline">Learn More <i className="fa-solid fa-arrow-right-long"></i></a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Tools;
