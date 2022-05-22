import React from 'react'
import pc from '../images/pc.png';

export default function OfferBanner() {
  return (
    <React.Fragment>
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
                        <figure><img src={pc} alt="#" /></figure>
                     </div>
                  </div>
               </div>
            </div>
         </div>
        </React.Fragment>
    )
}
