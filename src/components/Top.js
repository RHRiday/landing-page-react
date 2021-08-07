import React, {Component} from 'react';

class Top extends Component {
    render() {
        return (
            <div className="container d-none d-lg-block">
                <header className="my-1 d-flex justify-content-between">
                    <ul className="nav">
                        <li className="me-2">
                            <i className="fa fa-mobile" aria-hidden="true"></i>
                            &nbsp; 001 1234 6789
                        </li>
                        <li className="ms-2">
                            <i className="fa fa-map-marker" aria-hidden="true"></i>
                            &nbsp; 6701 Democracy Blvd, Suite 300, USA
                        </li>
                    </ul>
                    <ul className="nav float-end">
                        <li className="me-2">
                            <i className="fa fa-skype" aria-hidden="true"></i>
                            &nbsp; Agency.software
                        </li>
                        <li className="ms-2">
                            <i className="fa fa-envelope" aria-hidden="true"></i>
                            &nbsp; info@example.com
                        </li>
                    </ul>
                </header>
            </div>
        );
    }
}

export default Top;