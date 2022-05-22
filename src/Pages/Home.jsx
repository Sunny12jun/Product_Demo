import React from "react";

import loading from '../images/loading.gif'
import Header from "../Components/Header";
import BannerMain from '../Components/BannerMain'
import ThreeBox from "../Components/ThreeBox";
import Products from "../Components/Products";
import OfferBanner from "../Components/OfferBanner";
import Customer from "../Components/Customer";
import Footer from "../Components/Footer";
export default function Home() {
   return (
      <React.Fragment>
         {/* <div className="loader_bg">
       <div className="loader"><img  src={loading} alt="#" /></div>  
       </div>   */}
         {/* <Header /> */}
         <BannerMain />
         <ThreeBox />
         <Products />
         <OfferBanner />
         <Customer />
         <Footer />

      </React.Fragment>
   );
}
