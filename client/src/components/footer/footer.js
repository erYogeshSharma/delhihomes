import React from 'react'
import './footer.css';

const Footer = () => {
    return (
        <section id="footer">
            <div className="container">
                <div className="row  ">
                    <div className="col-xs-12 col-sm-5 col-md-5">
                        <div className="pr-xl-4 brand"><a  href="#home"><img className="brand-logo-light" src="../../images/smartphone.png " alt="delhi" width="140" height="37"   /></a>
                            <p>Here we provide a great platform for our users to add their property and for the users who are looking for a prefect place to live. Every property here is certified by our team..</p>

                            <p className="rights"><span>©  </span><span className="copyright-year">2021</span><span> </span><span>DelhiHomes</span><span>. </span><span>All Rights Reserved.</span></p>
                        </div>
                    </div>
                    <div className="col-6 col-sm-3 col-md-3">
                        <h4>Quick links</h4>
                        <ul className="list-unstyled quick-links">
                            <li><a href="#home"><i className="fa  "></i>Home</a></li>
                            <li><a href="#home"><i className="fa  "></i>About</a></li>
                            <li><a href="#home"><i className="fa  "></i>Contact Us</a></li>
                            <li><a href="#home"><i className="fa  "></i>Add property</a></li>

                        </ul>
                    </div>
                    <div className="col-6  col-sm-3 col-md-3">
                        <h4>Contact</h4>
                         
                        <dl className="contact-list">
                            <dt>Address:</dt>
                            <dd>393 Tomar Colony Delhi - 110084</dd>
                        </dl>
                        <dl className="contact-list">
                            <dt>email:</dt>
                            <dd><a href="mailto:#home">er.yogeshsharma</a></dd>
                        </dl>
                        <dl className="contact-list">
                            <dt>phones:</dt>
                            <dd> +91 - 84479 96078
                            </dd>
                        </dl>
                    </div>
                </div>
                    <hr />
                <div className="row">
                    <div className="col-xs-12 col-sm-12 col-md-12 ">
                        <ul className="list-unstyled list-inline social text-center">
                            <li className="list-inline-item"><a href="#home"><i className="fa fa-facebook"></i></a></li>
                            <li className="list-inline-item"><a href="#home"><i className="fa fa-twitter"></i></a></li>
                            <li className="list-inline-item"><a href="#home"><i className="fa fa-instagram"></i></a></li>
                            <li className="list-inline-item"><a href="#home"><i className="fa fa-google-plus"></i></a></li>
                            <li className="list-inline-item"><a href="#home" target="_blank"><i className="fa fa-envelope"></i></a></li>
                        </ul>
                    </div>
                </div>
              
            </div>
                    
        </section>
    )
}

export default Footer;
