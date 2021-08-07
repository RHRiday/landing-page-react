import React from 'react';
import './Footer.css';
import FooterCol from './FooterCol';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faInstagram, faTwitter, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
    const products = [
        {name: "Take the tour" },
        {name: "Live chat" },
        {name: "Self-service" },
        {name: "Social"},
        { name: "Mobile" },
        { name: "Collaboration" },
        { name: "deski Reviews" },
    ]
    const address = [
        {name: "companyinfo@mail.com"},
       
    ]
    const aboutUs = [
        {name: "About us"},
        {name: "Work Portfolio" },
        { name: "Team" },
        { name: "Plan & Pricing" },
        {name: "News"},
      
    ]
    const services = [
        {name: "Web Design"},
        { name: "Development" },
        { name: "Wordpress" },
        { name: "Online Marketing" },
        {name: "Content"},
       
    ]
    return (
        <footer className="footer-area clear-both">
            <div className="container">
                <div className="row d-flex py-5 justify-content-center">
                    <div className="col-12 col-lg-2 text-center">
                        <img src="https://codesign.com.bd/conversations/content/images/2020/03/Sprint-logo-design-Codesign-agency.png" width="70px" />
                    </div> 
                    <FooterCol key={1} menuTitle="Products" menuItems={products}/>
                    <FooterCol key={2} menuTitle="Services" menuItems={services}/>
                    <FooterCol key={3} menuTitle="About Us" menuItems={aboutUs}/>
                    <FooterCol key={4} menuTitle="Address" menuItems={address}> 
                            <ul className="social-media list-inline mb-0">
                            <div className="my-1">
                                <h4>+22560255</h4>
                            </div>
                            <li className="list-inline-item"><a href="/"><FontAwesomeIcon className="icon fb" icon={faFacebookF} /></a></li>
                            <li className="list-inline-item"><a href="/"><FontAwesomeIcon className="icon t" icon={faTwitter} /></a></li>
                            <li className="list-inline-item"><a href="/"><FontAwesomeIcon className="icon in" icon={faLinkedinIn} /></a></li>
                            <li className="list-inline-item"><a href="/"><FontAwesomeIcon className="icon ins" icon={faInstagram} /></a></li>
                        </ul>
                    </FooterCol>
                    <div>
                        <ul className="nav justify-content-center">
                        <li className="me-2">
                            <i className="fa fa-mobile" aria-hidden="true"></i>
                            &nbsp; 001 1234 6789
                        </li>
                        <li className="ms-2">
                            <i className="fa fa-map-marker" aria-hidden="true"></i>
                            &nbsp; 6701 Democracy Blvd, Suite 300, USA
                        </li>
                    </ul>
                    <ul className="nav justify-content-center">
                        <li className="me-2">
                            <i className="fa fa-skype" aria-hidden="true"></i>
                            &nbsp; Agency.software
                        </li>
                        <li className="ms-2">
                            <i className="fa fa-envelope" aria-hidden="true"></i>
                            &nbsp; info@example.com
                        </li>
                    </ul>
                    </div>
                    
                </div>
                <div className="copyRight text-center text-muted">
                    <p>Copyright {(new Date()).getFullYear()}&copy;RHRiday All Rights Reserved</p>
                </div>
            </div>
            
        </footer>
        
    );
};

export default Footer;