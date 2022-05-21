import React from "react";
import logo from '../images/logo.png';
import pct from '../images/pct.png';
import thr from '../images/thr.png';
import thr1 from '../images/thr1.png';
import thr2 from '../images/thr2.png';
import product1 from '../images/product1.png';
import product2 from '../images/product2.png';
import product3 from '../images/product3.png';
import product4 from '../images/product4.png';
import product5 from '../images/product5.png';
import product6 from '../images/product6.png';
import product7 from '../images/product7.png';
import product8 from '../images/product8.png';
import product9 from '../images/product9.png';
import pc from '../images/pc.png';
import logo1 from '../images/logo1.png';
import loading from '../images/loading.gif'
import cos from '../images/cos.png'



export default function Home() {
  return (
    <React.Fragment>
      {/* <div className="loader_bg">
       <div className="loader"><img  src={loading} alt="#" /></div>  
       </div>   */}
      <header>
        <div className="header">
          <div className="container-fluid">
            <div className="row">
              <div className="col-xl-3 col-lg-3 col-md-3 col-sm-3 col logo_section">
                <div className="full">
                  <div className="center-desk">
                    <div className="logo">
                      <a href="index.html">
                        <img src={logo} alt="#" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-9 col-lg-9 col-md-9 col-sm-9">
                <nav className="navigation navbar navbar-expand-md navbar-dark ">
                  <button
                    className="navbar-toggler"
                    type="button"
                    data-toggle="collapse"
                    data-target="#navbarsExample04"
                    aria-controls="navbarsExample04"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                  >
                    <span className="navbar-toggler-icon"></span>
                  </button>
                  <div
                    className="collapse navbar-collapse"
                    id="navbarsExample04"
                  >
                    <ul className="navbar-nav mr-auto">
                      <li className="nav-item active">
                        <a className="nav-link" href="index.html">
                          Home
                        </a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" href="about.html">
                          About
                        </a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" href="computer.html">
                          Computer
                        </a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" href="laptop.html">
                          Laptop
                        </a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" href="product.html">
                          Products
                        </a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" href="contact.html">
                          Contact Us
                        </a>
                      </li>
                      <li className="nav-item d_none">
                        <a className="nav-link" href="#">
                          <i className="fa fa-search" aria-hidden="true"></i>
                        </a>
                      </li>
                      <li className="nav-item d_none">
                        <a className="nav-link" href="#">
                          Login
                        </a>
                      </li>
                    </ul>
                  </div>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </header>
      <section className="banner_main">
         <div id="banner1" className="carousel slide" data-ride="carousel">
            <ol className="carousel-indicators">
               <li data-target="#banner1" data-slide-to="0" className="active"></li>
               <li data-target="#banner1" data-slide-to="1"></li>
               <li data-target="#banner1" data-slide-to="2"></li>
               <li data-target="#banner1" data-slide-to="3"></li>
               <li data-target="#banner1" data-slide-to="4"></li>
            </ol>
            <div className="carousel-inner">
               <div className="carousel-item active">
                  <div className="container">
                     <div className="carousel-caption">
                        <div className="row">
                           <div className="col-md-6">
                              <div className="text-bg">
                                 <span>Computer And Laptop</span>
                                 <h1>Accessories</h1>
                                 <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or </p>
                                 <a href="#">Buy Now </a> <a href="contact.html">Contact </a>
                              </div>
                           </div>
                           <div className="col-md-6">
                              <div className="text_img">
                                 <figure><img src={pct} alt="#"/></figure>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
               <div className="carousel-item">
                  <div className="container">
                     <div className="carousel-caption">
                        <div className="row">
                           <div className="col-md-6">
                              <div className="text-bg">
                                 <span>Computer And Laptop</span>
                                 <h1>Accessories</h1>
                                 <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or </p>
                                 <a href="#">Buy Now </a> <a href="contact.html">Contact </a>
                              </div>
                           </div>
                           <div className="col-md-6">
                              <div className="text_img">
                                 <figure><img src={pct}alt="#"/></figure>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
               <div className="carousel-item">
                  <div className="container">
                     <div className="carousel-caption">
                        <div className="row">
                           <div className="col-md-6">
                              <div className="text-bg">
                                 <span>Computer And Laptop</span>
                                 <h1>Accessories</h1>
                                 <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or </p>
                                 <a href="#">Buy Now </a> <a href="contact.html">Contact </a>
                              </div>
                           </div>
                           <div className="col-md-6">
                              <div className="text_img">
                                 <figure><img src={pct}alt="#"/></figure>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
               <div className="carousel-item">
                  <div className="container">
                     <div className="carousel-caption">
                        <div className="row">
                           <div className="col-md-6">
                              <div className="text-bg">
                                 <span>Computer And Laptop</span>
                                 <h1>Accessories</h1>
                                 <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or </p>
                                 <a href="#">Buy Now </a> <a href="contact.html">Contact </a>
                              </div>
                           </div>
                           <div className="col-md-6">
                              <div className="text_img">
                                 <figure><img src={pct} alt="#"/></figure>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
               <div className="carousel-item">
                  <div className="container">
                     <div className="carousel-caption">
                        <div className="row">
                           <div className="col-md-6">
                              <div className="text-bg">
                                 <span>Computer And Laptop</span>
                                 <h1>Accessories</h1>
                                 <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or </p>
                                 <a href="#">Buy Now </a> <a href="contact.html">Contact </a>
                              </div>
                           </div>
                           <div className="col-md-6">
                              <div className="text_img">
                                 <figure><img src={pct} alt="#"/></figure>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
            <a className="carousel-control-prev" href="#banner1" role="button" data-slide="prev">
            <i className="fa fa-chevron-left" aria-hidden="true"></i>
            </a>
            <a className="carousel-control-next" href="#banner1" role="button" data-slide="next">
            <i className="fa fa-chevron-right" aria-hidden="true"></i>
            </a>
         </div>
      </section>
      <div className="three_box">
         <div className="container">
            <div className="row">
               <div className="col-md-4">
                  <div className="box_text">
                     <i><img src={thr}alt="#"/></i>
                     <h3>Computer</h3>
                     <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
                  </div>
               </div>
               <div className="col-md-4">
                  <div className="box_text">
                     <i><img src={thr1} alt="#"/></i>
                     <h3>Laptop</h3>
                     <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
                  </div>
               </div>
               <div className="col-md-4">
                  <div className="box_text">
                     <i><img src={thr2}alt="#"/></i>
                     <h3>Tablet</h3>
                     <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
                  </div>
               </div>
            </div>
         </div>
      </div>
      <div  className="products">
         <div className="container">
            <div className="row">
               <div className="col-md-12">
                  <div className="titlepage">
                     <h2>Our Products</h2>
                  </div>
               </div>
            </div>
            <div className="row">
               <div className="col-md-12">
                  <div className="our_products">
                     <div className="row">
                        <div className="col-md-4 margin_bottom1">
                           <div className="product_box">
                              <figure><img src={product1} alt="#"/></figure>
                              <h3>Computer</h3>
                           </div>
                        </div>
                        <div className="col-md-4 margin_bottom1">
                           <div className="product_box">
                              <figure><img src={product2}alt="#"/></figure>
                              <h3>Laptop</h3>
                           </div>
                        </div>
                        <div className="col-md-4 margin_bottom1">
                           <div className="product_box">
                              <figure><img src={product3}alt="#"/></figure>
                              <h3>Tablet</h3>
                           </div>
                        </div>
                        <div className="col-md-4 margin_bottom1">
                           <div className="product_box">
                              <figure><img src={product4} alt="#"/></figure>
                              <h3>Speakers</h3>
                           </div>
                        </div>
                        <div className="col-md-4 margin_bottom1">
                           <div className="product_box">
                              <figure><img src={product5} alt="#"/></figure>
                              <h3>internet</h3>
                           </div>
                        </div>
                        <div className="col-md-4 margin_bottom1">
                           <div className="product_box">
                              <figure><img src={product6} alt="#"/></figure>
                              <h3>Hardisk</h3>
                           </div>
                        </div>
                        <div className="col-md-4">
                           <div className="product_box">
                              <figure><img src= {product7} alt="#"/></figure>
                              <h3>Rams</h3>
                           </div>
                        </div>
                        <div className="col-md-4">
                           <div className="product_box">
                              <figure><img src={product8} alt="#"/></figure>
                              <h3>Bettery</h3>
                           </div>
                        </div>
                        <div className="col-md-4">
                           <div className="product_box">
                              <figure><img src= {product9} alt="#"/></figure>
                              <h3>Drive</h3>
                           </div>
                        </div>
                        <div className="col-md-12">
                           <a className="read_more" href="#">See More</a>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
      <div className="laptop">
         <div className="container">
            <div className="row">
               <div className="col-md-6">
                  <div className="titlepage">
                     <p>Every Computer and laptop</p>
                     <h2>Up to 40% off !</h2>
                     <a className="read_more" href="#">Shop Now</a>
                  </div>
               </div>
               <div className="col-md-6">
                  <div className="laptop_box">
                     <figure><img src={pc} alt="#"/></figure>
                  </div>
               </div>
            </div>
         </div>
      </div>
      <div className="customer">"keywords"
         <div className="container">
            <div className="row">
               <div className="col-md-12">
                  <div className="titlepage">
                     <h2>Customer Review </h2>
                  </div>               
               </div>
            </div>
            <div class="row">
               <div class="col-md-12">
                  <div id="myCarousel" className="main_form"> data-ride="carousel">
                     <ol class="carousel-indicators">
                        <li data-target="#myCarousel" data-slide-to="0" className="active"></li>
                        <li data-target="#myCarousel" data-slide-to="1"></li>
                        <li data-target="#myCarousel" data-slide-to="2"></li>
                     </ol>
                     <div className="carousel-inner">
                        <div className="carousel-item active">
                           <div className="container">
                              <div className="carousel-caption ">
                                 <div className="row">
                                    <div className="col-md-9 offset-md-3">
                                       <div className="test_box">
                                          <i><img src={cos} alt="#"/></i>
                                          <h4>Sandy Miller</h4>
                                          <p>ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id</p>
                                       </div>
                                    </div>
                                 </div>
                              </div>
                           </div>
                        </div>
                        <div className="carousel-item">  s"contactus" placeholder="Name" type="type" name="Name"> 
                        </div>
                        <div class="col-md-12">
                           <div className="container">
                              <div className="carousel-caption">
                                 <div className="row">
                                    <div className="col-md-9 offset-md-3">
                                       <div className="test_box">
                                          <i><img src={cos} alt="#"/></i>
                                          <h4>Sandy Miller</h4>
                                          <p>ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id</p>
                                       </div>
                                    </div>
                                 </div>
                              </div>
                           </div>
                        </div>
                        <div className="carousel-item">"contactus"
                           <div className="container">"contactus"
                              <div className="carousel-caption">"contactus"
                                 <div className="row">Name
                                    <div className="col-md-9 offset-md-3">Email
                                       <div className="test_box">phone Number
                                          <i><img src= {cos} alt="#"/></i>
                                          <h4>Sandy Miller</h4>
                                          <p>ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id</p>
                                       </div>
                                    </div>
                                 </div>
                              </div>
                           </div>
                        </div>
                     </div>
                     <a className="carousel-control-prev" href="#myCarousel" role="button" data-slide="prev">
                     <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                     <span className="sr-only">Previous</span>
                     </a>
                     <a className="carousel-control-next" href="#myCarousel" role="button" data-slide="next">
                     <span className="carousel-control-next-icon" aria-hidden="true"></span>
                     <span className="sr-only">Next</span>
                     </a>
                  </div>
               </div>
            </div>
         </div>
      </div>
      <div className="contact">
         <div className="container">
            <div className="row">
               <div className="col-md-12">
                  <div className="titlepage">
                     <h2>Contact Now</h2>
                  </div>
               </div>
            </div>
            <div className="row">
               <div className="col-md-10 offset-md-1">
                  <form id="request" className="main_form"> 
                     <div className="row"> 
                        <div className="col-md-12 ">
                           <input className="contactus" placeholder="Name" type="type" name="Name"/> 
                        </div>
                        <div className="col-md-12">
                           <input className="contactus" placeholder="Email" type="type" name="Email"/> 
                        </div>
                        <div className="col-md-12">
                           <input className="contactus" placeholder="Phone Number" type="type" name="Phone Number"/>                          
                       </div>
                        <div className="col-md-12">
                           <textarea className="textarea" placeholder="Message" type="type" Message="Name">Message </textarea>
                        </div>
                        <div className="col-md-12">
                           <button className="send_btn">Send</button>
                        </div>
                     </div>
                  </form>            </div>
  </div>
      </div>
      <footer>
         <div classmNae="footer">
            <div class="container">
               <div class="row">
                  <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6">
                          <img className="logo1" src= {logo1} alt="#"/>
                     <ul classmeNa="social_icon">
                        <li><a href="#"><i class="fa fa-twitter" aria-hidden="true"></i></a></li>
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
                  <div class="col-xl-3 col-lg-3 col-md-6 col-sm-6">
                     <h3>Contact Us</h3>
                     <ul class="conta">
                        <li>dolor sit amet, 
                            consectetur magna aliqua. 
                            quisdotempor incididunt ut e 
                        </li>
                     </ul>
                  </div>
                  <div classe="col-xl-3 col-lg-3 col-md-6 col-sm-6">
                     <form class="bottom_form">
                        <h3>Newsletter</h3>
                        <input class="enter" placeholder="Enter your email" type="text" name="Enter your email"/>
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
  );
}
