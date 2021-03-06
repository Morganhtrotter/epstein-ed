import React from 'react';
import { Link } from 'react-router-dom';

function Footer(props) {
	return(
		<div className="footer">
        <div className="container">
            <div className="row justify-content-center">             
                <div className="col-4 offset-1 col-sm-2">
                    <h5>Links</h5>
                    <ul className="list-unstyled">
                        <li><Link className="footerText" to="/home">Home</Link></li>
                        <li><Link className="footerText" to="/menu">About</Link></li>
                        <li><Link className="footerText" to="/aboutus">My Services</Link></li>
                        <li><Link className="footerText" to="/forms">Forms</Link></li>
                        <li><Link className="footerText" to="/contactus">Contact</Link></li>
                    </ul>
                </div>
                <div className="col-7 col-sm-5">
		              <i className="fa fa-envelope fa-lg"></i>: <a className="footerText" href="mailto:epsteined@gmail.com">
                         epsteined@gmail.com</a>
                </div>
                <div className="col-12 col-sm-4 align-self-center">
                    <div className="text-center">
                        <a className="btn btn-social-icon" href="mailto:epsteined@gmail.com"><i className="fa fa-envelope-o"></i></a>
                    </div>
                </div>
            </div>
        </div>
    </div>
	);
}

export default Footer;