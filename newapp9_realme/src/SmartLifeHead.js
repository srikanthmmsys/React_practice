import React, { useState } from "react";
import RecomendedPhonesChils01 from "./RecomendedPhonesChils01";
const SmartLifeHead = () => {
  // let c1 = document.getElementById("headdi");
  // let d1 = document.getElementById("headdi1");
  // let e1 = document.getElementById("personalcare");
  // let f1 = document.getElementById("pad");
  const [smartlifedata, setSmartlifeData] = useState(true);
  const [smartlifedata1, setSmartlifeData1] = useState(false);
  return (
    <>
      <div className="d-flex flex-row justify-content-between">
        <div>
          <h4 className="festivalhead p-2">Smart Life</h4>
        </div>

        <div className="d-flex">
          <h5
            className="mr-3 Smartlifeborder"
            id={smartlifedata?"personalcare":""}
            onClick={() => {
              // c1.style.display = "block";
              // d1.style.display = "block";
              // e1.style.textDecoration = "underline";
              // f1.style.textDecoration = "none";
              setSmartlifeData(true);
              setSmartlifeData1(false);
            
            }}
          >
            Personal Care
          </h5>

          <h5
            className="mr-3 Smartlifeborder"
            id={smartlifedata1?"personalcare":""}
            onClick={() => {
              // d1.style.display = "none";
              // c1.style.display = "block";
              // e1.style.textDecoration = "none";
              // f1.style.textDecoration = "underline";
              setSmartlifeData(false);
              setSmartlifeData1(true);
          
            }}
          >
            Pad & Book
          </h5>
          <h6 className="text-secondary mr-4">ViewMore -&gt;</h6>
        </div>
      </div>

      {smartlifedata1 ? (
        <div id="headdi">
          <div className="d-flex justify-content-center">
            <img
              className="mb-3 effect"
              src="https://res.cloudinary.com/dx0fji5gh/image/upload/v1661842194/realme/pad1_cshvge.png"
              alt="noimg"
            />

            <img
              className="ml-3 mb-3 effect"
              src="https://res.cloudinary.com/dx0fji5gh/image/upload/v1661842194/realme/pad2_k4qlmq.png"
              alt="noimg"
            />
          </div>
          <div className="d-flex justify-content-center">
            <img
              className="mb-3 effect"
              src="https://res.cloudinary.com/dx0fji5gh/image/upload/v1661842194/realme/pad3_eaxllo.png"
              alt="noimg"
            />
            <img
              className="ml-3 mb-3 effect"
              src="https://res.cloudinary.com/dx0fji5gh/image/upload/v1661842194/realme/pad4_tcebrr.png"
              alt="noimg"
            />
          </div>
        </div>
      ) : (
        ""
      )}

      {smartlifedata ? (
        <div id="headdi1">
          <div className="d-flex flex-row flex-warp">
            <img
              className="rimg1 effect ml-4 mb-2"
              src="https://res.cloudinary.com/dx0fji5gh/image/upload/v1661841300/realme/pc1_rsb2hr.webp"
              alt="noimg"
            />
            <RecomendedPhonesChils01
              url="https://res.cloudinary.com/dx0fji5gh/image/upload/v1661841300/realme/pc2_tq4kxs.webp"
              name="Hair Dryer"
              price="₹1,999"
            />
            <RecomendedPhonesChils01
              url="https://res.cloudinary.com/dx0fji5gh/image/upload/v1661841300/realme/pc3_jdrsex.webp"
              name="M1 Sonic elec.."
              price="₹1,999"
            />
            <RecomendedPhonesChils01
              url="https://res.cloudinary.com/dx0fji5gh/image/upload/v1661841300/realme/pc4_c6bzlq.webp"
              name="Bread Trimmer"
              price="₹1,999"
            />
          </div>
        </div>
      ) : (
        ""
      )}
    </>
  );
};

export default SmartLifeHead;
