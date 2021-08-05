import React, {Component} from 'react';
import Dropdown from './Dropdown';
import './nav.css';

class Nav extends Component {
    render() {
        return (
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
                <div class="container container-fluid">
                    <a class="navbar-brand" href="#">logo</a>
                    <button
                        class="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent"
                        aria-expanded="false"
                        aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div
                        class="collapse navbar-collapse justify-content-end"
                        id="navbarSupportedContent">
                        <ul class="navbar-nav mb-2 mb-lg-0">
                            <Dropdown title="Home"/>
                            <Dropdown title="Feature"/>
                            <Dropdown title="Blogs"/>
                        </ul>
                        <ul class="navbar-nav ms-5 mb-2 mb-lg-0">
                            <li className="nav-item fw-bold mx-1">En.</li>
                            <li className="nav-item text-muted mx-1">Bn.</li>
                        </ul>
                        <ul class="navbar-nav ms-3 mb-2 mb-lg-0">
                            <li className="nav-item fw-bold">
                                <button className="btn btn-outline-danger rounded-pill fw-bold">Contact</button>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        );
    }
}

export default Nav;