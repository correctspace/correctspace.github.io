import React from 'react'
import { Outlet, Link } from "react-router-dom";

function Footer() {
  return (
    <>
    
  
		<footer id="footer">
			<div className="container">
				<div className="row">
					<div className="col-md-3">
					<Link to="/"><img src="" alt="" className="img-fluid logo-footer"/></Link>
                      <div className="footer-about">
                          <p>Correct Space LLP about,  </p>
                      </div>

					</div>
					<div className="col-md-3">
						<div className="useful-link">
							<h2>Useful Links</h2>
							<img src="" alt="" className="img-fluid"/>
							<div className="use-links">
								<li><Link to="/"><i className="fas fa-angle-double-right"></i> Home</Link></li>
								<li><Link to="/"><i className="fas fa-angle-double-right"></i> About Us</Link></li>
								<li><Link to="/"><i className="fas fa-angle-double-right"></i> Gallery</Link></li>
								<li><Link to="/"><i className="fas fa-angle-double-right"></i> Contact</Link></li>
							</div>
						</div>

					</div>
                    <div className="col-md-3">
                        <div className="social-links">
							<h2>Follow Us</h2>
							<img src="" alt=""/>
							<div className="social-icons">
								<li><Link to="/"><i className="fab fa-facebook"></i> Facebook</Link></li>
								<li><Link to="/"><i className="fab fa-instagram"></i> Instagram</Link></li>
								<li><Link to="/"><i className="fab fa-linkedin-in"></i> Linkedin</Link></li>
							</div>
						</div>
                    

                    </div>
					<div className="col-md-3">
						<div className="address">
							<h2>Address</h2>
							<img src="" alt="" className="img-fluid"/>
							<div className="address-links">
								<li className="address1"><i className="fa-solid fa-location-dot"></i> Kolathur ramankulam-
									Malappuram Dt 
								   Kerala 679338</li>
								   <li><Link to="/"><i className="fas fa-phone-alt"></i> +91 90904500112</Link></li>
								   <li><Link to="/"><i className="far fa-envelope"></i> mail@1234567.com</Link></li>
							</div>
						</div>
					</div>
                  
				</div>
			</div>

		</footer>
		
		<section id="copy-right">
			<div className="copy-right-sec"> <i className="far fa-copyright"> </i>   
			Copyright 2022 <Link to="/">Correct Space LLP</Link> 
			Build No. 1.0.6.1

			</div>

		</section>
		
    </>
  )
}

export default Footer