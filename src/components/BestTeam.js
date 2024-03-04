import React from 'react';
import temas1 from '../img/temas1.png';
import teams from '../img/teams.png'
import teams2 from '../img/teams2.png'
import client3 from '../img/client3.png'
import clinet2 from '../img/clinet2.png'
import clinet1 from '../img/clinet1.png';
const BestTeam = () => {
    return (
        <div>
            <div className="container mt-5">
                <div className="row">
                    <h1 className="hero-h1 text-center">Loved by the world's best teams</h1>
                    <div className="text-center mt-4">
                        <button className="btn btn-outline-primary border-radius">See all customer stories  <i className="fa-solid fa-arrow-right-long"></i></button>
                    </div>
                    <div className="row mt-5">
                        <div className="col-md-4">
                            <img src={temas1} alt=""/>
                            <p className="hero-p text-muted mt-5">“When the pandemic hit, those of us who thrive on in-person collaboration were worried that our creativity and productivity would suffer. Miro was the perfect tool to help us with collaboration, whiteboarding, and retrospectives while remote.”</p>
                        </div>
                        <div className="col-md-4">
                            <img src={teams} alt=""/>
                            <p className="hero-p text-muted mt-5">“Miro helps solve one of the major gaps in product design: how to manage tasks across product designers whose projects are in different tools.”</p>
                        </div>
                        <div className="col-md-4">
                            <img src={teams2} alt=""/>
                            <p className="hero-p text-muted mt-5">“As we used Miro we moved from skepticism to belief to innovation, and now we have a tool that’s at the core of what we do and will continue to extend into the future.”</p>
                        </div>
                    </div>
                    <div className="row client-info">
                        <div className="col-md-4">
                            <div className="d-flex gap-3 mt-5">
                                <img src={client3} className="client-img" alt=""/>
                                <div className="mt-3">
                                    <p className="hero-p text-muted m-0">Roxanne Mustafa</p>
                                    <p className="hero-p text-muted">Design Team Lead at VMware</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="d-flex gap-3 mt-5">
                                <img src={clinet2} className="client-img" alt=""/>
                                <div className="mt-3">
                                    <p className="hero-p text-muted m-0">Jane Ashley</p>
                                    <p className="hero-p text-muted">Head of Design at DocuSign</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="d-flex gap-3 mt-5">
                                <img src={clinet1} className="client-img" alt=""/>
                                <div className="mt-3">
                                    <p className="hero-p text-muted m-0">Laura Baird</p>
                                    <p className="hero-p text-muted">Associate Design Director at frog</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BestTeam;
