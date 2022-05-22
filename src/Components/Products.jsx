import React from 'react'
import product1 from '../images/product1.png';
import product2 from '../images/product2.png';
import product3 from '../images/product3.png';
import product4 from '../images/product4.png';
import product5 from '../images/product5.png';
import product6 from '../images/product6.png';
import product7 from '../images/product7.png';
import product8 from '../images/product8.png';
import product9 from '../images/product9.png';

export default function Products() {
  return (
    <React.Fragment>
        <div className="products">
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
                                 <figure><img src={product1} alt="#" /></figure>
                                 <h3>Computer</h3>
                              </div>
                           </div>
                           <div className="col-md-4 margin_bottom1">
                              <div className="product_box">
                                 <figure><img src={product2} alt="#" /></figure>
                                 <h3>Laptop</h3>
                              </div>
                           </div>
                           <div className="col-md-4 margin_bottom1">
                              <div className="product_box">
                                 <figure><img src={product3} alt="#" /></figure>
                                 <h3>Tablet</h3>
                              </div>
                           </div>
                           <div className="col-md-4 margin_bottom1">
                              <div className="product_box">
                                 <figure><img src={product4} alt="#" /></figure>
                                 <h3>Speakers</h3>
                              </div>
                           </div>
                           <div className="col-md-4 margin_bottom1">
                              <div className="product_box">
                                 <figure><img src={product5} alt="#" /></figure>
                                 <h3>internet</h3>
                              </div>
                           </div>
                           <div className="col-md-4 margin_bottom1">
                              <div className="product_box">
                                 <figure><img src={product6} alt="#" /></figure>
                                 <h3>Hardisk</h3>
                              </div>
                           </div>
                           <div className="col-md-4">
                              <div className="product_box">
                                 <figure><img src={product7} alt="#" /></figure>
                                 <h3>Rams</h3>
                              </div>
                           </div>
                           <div className="col-md-4">
                              <div className="product_box">
                                 <figure><img src={product8} alt="#" /></figure>
                                 <h3>Bettery</h3>
                              </div>
                           </div>
                           <div className="col-md-4">
                              <div className="product_box">
                                 <figure><img src={product9} alt="#" /></figure>
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
        </React.Fragment>
  )
}
