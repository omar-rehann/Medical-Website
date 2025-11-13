import React from "react";
import "../pagesstyles/aboutpages.css";
function Aboutpages() {
  return (
    <>
      <div className="pageone">
        <div className="container">
          <div className="banner-content">
            <h1>About Us</h1>
            <div className="breadcrumb">
              <span><i class="fa-solid fa-house"></i> Home </span>
              <span className="separator"> / </span>
              <span className="current">About Us</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Aboutpages;