import React from "react";
import UncontrolledExample from "./Bootstrap_corosul";
import Navbar from "./Navbar";
import Navtop from "./Navtop";
import Quickaccess from "./Quickaccess";
import "./Orangehover.css";
import Bestdeals from "./Bestdeals";
import BestSellerPhones from "./BestSellerPhones";
import RecomendedPhones from "./RecomendedPhones";
import NewArrivals from "./NewArrivals";
import Hottest from "./Hottest";
import BestWarables from "./BestWarables";
import SmartLifeHead from "./SmartLifeHead";
import BottomImgs from "./BottomImgs";
import GridBootstrap from "./GridBootstrap";
import Footer from "./Footer";
import ErrorBoundary from "./ErrorBoundary/ErrorBoundary";

const App = () => {
  return (
    <>
   <ErrorBoundary>
      <div className="Appback mb-5 pb-5">
        <Navtop />
        <nav>
          <Navbar />
        </nav>
        <UncontrolledExample /> {/*  carosul */}
        <Quickaccess />
        <Bestdeals />
        <h4 className="festivalhead p-2">828 Fan Festival</h4>
        <img
          className="fanimg effect"
          src="https://res.cloudinary.com/dx0fji5gh/image/upload/v1661510596/realme/1_dpszfz.webp"
          alt="noimg"
        />
        <h4 className="festivalhead  p-2">Best Seller Phones</h4>
        <BestSellerPhones />
        <h4 className="festivalhead  p-2">Recomended Phones</h4>
        <RecomendedPhones />
        <h4 className="festivalhead p-2">New Arrivals</h4>
        <NewArrivals />
        <h4 className="festivalhead p-2">Hottest Audios</h4>
        <Hottest />
        <h4 className="festivalhead p-2">Best Werables</h4>
        <BestWarables />
        <SmartLifeHead />
      </div>
      <div className="AppBack1">
        <BottomImgs />
        
                      <GridBootstrap />
                      
        <Footer/>
      </div>
      
      </ErrorBoundary>
    </>
  );
};

export default App;
