import React from 'react';
import TextField from '@mui/material/TextField';
import logo1 from '../images/logo1.png';


export default function Footer() {
  return (
    <React.Fragment>
    <footer>
            <div className="footer">
               <div className="container">
                  <div className="row">
                     <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6">
                        <img className="logo1" src={logo1} alt="#" />
                        <ul classmeNa="social_icon">
                           <li><a href="#"><i className="fa fa-twitter" aria-hidden="true"></i></a></li>
                           <li><a href="#"><i className="fa fa-linkedin-square" aria-hidden="true"></i></a></li>
                           <li><a href="#"><i className="fa fa-instagram" aria-hidden="true"></i></a></li>
                        </ul>
                     </div>
                     <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6">
                        <h3>About Us</h3>
                        <ul className="about_us">
                           <li> dolor sit amet, consectetur
                              magna aliqua. Ut enim ad minim veniam,
                              quisdotempor incididunt r
                           </li>
                        </ul>
                     </div>
                     <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6">
                        <h3>Contact Us</h3>
                        <ul className="conta">
                           <li>dolor sit amet,
                              consectetur magna aliqua.
                              quisdotempor incididunt ut e
                           </li>
                        </ul>
                     </div>
                     <div classe="col-xl-3 col-lg-3 col-md-6 col-sm-6">
                        <form className="bottom_form">
                           <h3>Newsletter</h3>
                           {/* <input className="enter" placeholder="Enter your email" type="text" name="Enter your email" /> */}
                           <TextField
                              margin="normal"
                              required
                              fullWidth
                              id="email"
                              label="Email Address"
                              name="email"
                              autoComplete="email"
                              autoFocus
                           />
                           <button className="sub_btn">subscribe</button>
                        </form>
                     </div>
                  </div>
               </div>
               <div className="copyright">
                  <div className="container">
                     <div className="row">
                        <div className="col-md-12">
                           <p>© 2019 All Rights Reserved. Design by<a href="https://html.design/"> Free Html Templates</a></p>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </footer>
         </React.Fragment>
  )
}
