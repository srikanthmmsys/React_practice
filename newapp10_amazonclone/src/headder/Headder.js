import React from "react";
const Headder = () => {
  return (
    <div className="headder">
      <img
        className="headder-logo"
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/603px-Amazon_logo.svg.png?20220213013322"
        alt="no"
      />
      <input className="headder-text" type="text" />

      <div className="headder-nav">
        <div className="headder-option">
          <span>
            <div className="headder-optionline">

            </div>
          </span>
        </div>
        <div className="headder-option1">
        <span>
            <div className="headder-optionline">

            </div>
          </span>
        </div>
        <div className="headder-option2">
        <span>
            <div className="headder-optionline">

            </div>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Headder;
