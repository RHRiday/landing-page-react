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
                <div className="row py-5 justify-content-center">
                    <div className="col-sm-2">
                        <img src="https://codesign.com.bd/conversations/content/images/2020/03/Sprint-logo-design-Codesign-agency.png" width="70px" />
                    </div> 
                    <FooterCol key={1} menuTitle="Products" menuItems={products}/>
                    <FooterCol key={2} menuTitle="Services" menuItems={services}/>
                    <FooterCol key={3} menuTitle="About Us" menuItems={aboutUs}/>
                    <FooterCol key={4} menuTitle="Address" menuItems={address}> 
                            <ul className="social-media list-inline">
                            <div className="my-1">
                                <h4>+22560255</h4>
                            </div>
                            <li className="list-inline-item"><a href="/"><FontAwesomeIcon className="icon fb" icon={faFacebookF} /></a></li>
                            <li className="list-inline-item"><a href="/"><FontAwesomeIcon className="icon t" icon={faTwitter} /></a></li>
                            <li className="list-inline-item"><a href="/"><FontAwesomeIcon className="icon in" icon={faLinkedinIn} /></a></li>
                            <li className="list-inline-item"><a href="/"><FontAwesomeIcon className="icon ins" icon={faInstagram} /></a></li>
                        </ul>
                    </FooterCol>
                </div>
                <div className="copyRight text-center text-muted">
                    <p>Copyright {(new Date()).getFullYear()}&copy; All Rights Reserved</p>
                </div>
            </div>
        </footer>
        
    );
};

export default Footer;