import React, {Component} from 'react';
import './../nav.scss';

class Header extends Component {
    render() {
        return (
            <div className="container my-5">
                <div className="row align-items-start justify-content-between">
                    <div className="col-lg-6 order-lg-last d-none d-lg-block">
                        <div className="illustration-holder">
                            <img
                                src="https://html.creativegigs.net/deski/deski/images/assets/ils-01.png"
                                className="illustration_01"/>
                        </div>
                    </div>

                    <div className="col-xl-6 col-lg-6 order-lg-first">
                        <div className="hero-text-wrapper md-mt-50">
                            <h1>
                                <span>
                                    Great ticketing &nbsp;
                                    <img
                                        src="https://html.creativegigs.net/deski/deski/images/shape/line-shape-1.svg"
                                        alt=""
                                        className="cs-screen"/>
                                </span>
                                system for your customer.
                            </h1>
                            <p className="fs-4 fw-bold text-muted">For hassale free event, we are here to help you by creating online ticket.</p>
                            <form action="#" className=" pe-md-5">
                                <div className="input-group ms-1 row border border-2 border-dark rounded p-2">
                                    <input
                                        type="text"
                                        className="form-control col-9 p-md-2 border-0"
                                        id="subscription"
                                        placeholder="Your email"/>
                                    <button className="btn btn-danger col-3 fw-bold">Get Started</button>
                                </div>
                            </form>
                            <div className="my-5">
                                <p className="fs-3">Over &nbsp;
                                    <span className="clients fw-bolder text-danger">13,000+ Clients</span>
                                    &nbsp; all over the world.</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="row align-items-start justify-content-around">
                    <img className="col-3 col-lg-1" src="https://html.creativegigs.net/deski/deski/images/logo/logo-6.png"/>
                    <img className="col-3 col-lg-1" src="https://html.creativegigs.net/deski/deski/images/logo/logo-1.png"/>
                    <img className="col-3 col-lg-1" src="https://html.creativegigs.net/deski/deski/images/logo/logo-4.png"/>
                    <img className="col-3 col-lg-1" src="https://html.creativegigs.net/deski/deski/images/logo/logo-6.png"/>
                    <img className="col-3 col-lg-1" src="https://html.creativegigs.net/deski/deski/images/logo/logo-2.png"/>
                    <img className="col-3 col-lg-1" src="https://html.creativegigs.net/deski/deski/images/logo/logo-6.png"/>
                    <img className="col-3 col-lg-1" src="https://html.creativegigs.net/deski/deski/images/logo/logo-4.png"/>
                </div>
            </div>
        );
    }
}

export default Header;