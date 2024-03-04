import React from 'react';

import { FaLongArrowAltRight  } from 'react-icons/fa';

const Collaborate = () => {
    return (
        <div className="container collaborate-gap">
            <div className="row">
                <div>
                    <h1 className="hero-h1 text-center">
                        Collaborate without <br />
                        constraints
                    </h1>
                    <p className="collaborate-p"><b>Collaborate without constraints</b></p>
                </div>
                <div className="collaborate-col row">
                    <div className="col-md-4">
                        <h4 className="collaborate-h4">Free forever</h4>
                        <p className="hero-p">Our free plan gives you unlimited team members, 3 boards, and 300+ expert-made templates. Signing up with your work email lets you bring in your team faster. See our <a href="#" className="text-decoration-none">pricing plans</a> for more features.</p>
                    </div>
                    <div className="col-md-4">
                        <h4 className="collaborate-h4">Easy integrations</h4>
                        <p className="hero-p">Miro has 100+ powerful integrations with tools you already use like G Suite, Slack, and Jira, so your workflow is seamless. View the full list in our Marketplace . <a href="#" className="text-decoration-none">Marketplace .</a></p>
                    </div>
                    <div className="col-md-4">
                        <h4 className="collaborate-h4">Security first</h4>
                        <p className="hero-p">We treat your data like you would — with the utmost care. We follow industry-leading security standards and give you tools to protect intellectual property. Learn more at our  <a href="#" className="text-decoration-none">Trust Center .</a></p>
                    </div>
                </div>
                <div className="collaborate-btn d-flex justify-content-center">
                    <a href="#" className="btn btn-primary btn-small border-radius">Sign Up Free
                    <FaLongArrowAltRight/> </a>
                </div>
            </div>
        </div>
    );
};

export default Collaborate;
