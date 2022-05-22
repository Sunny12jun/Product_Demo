import React from 'react'
import thr from '../images/thr.png';
import thr1 from '../images/thr1.png';
import thr2 from '../images/thr2.png';

export default function ThreeBox() {
  return (
    <React.Fragment>
         <div className="three_box">
            <div className="container">
               <div className="row">
                  <div className="col-md-4">
                     <div className="box_text">
                        <i><img src={thr} alt="#" /></i>
                        <h3>Computer</h3>
                        <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
                     </div>
                  </div>
                  <div className="col-md-4">
                     <div className="box_text">
                        <i><img src={thr1} alt="#" /></i>
                        <h3>Laptop</h3>
                        <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
                     </div>
                  </div>
                  <div className="col-md-4">
                     <div className="box_text">
                        <i><img src={thr2} alt="#" /></i>
                        <h3>Tablet</h3>
                        <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
                     </div>
                  </div>
               </div>
            </div>
         </div>
    </React.Fragment>
  )
}
