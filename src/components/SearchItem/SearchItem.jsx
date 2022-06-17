import React from "react";
import "./SearchItem.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";

const SearchItem = () => {
  return (
    <div className="searchItem">
      <img
        src="https://cf.bstatic.com/xdata/images/hotel/square600/261707778.webp?k=fa6b6128468ec15e81f7d076b6f2473fa3a80c255582f155cae35f9edbffdd78&o=&s=1"
        alt=""
        className="searchItemImg"
      />
      <div className="searchItemDesc">
        <h1 className="searchItemTitle">Tower Street Apartment</h1>
        <span className="searchItemDistance">
          <FontAwesomeIcon icon={faLocationDot} /> 500m from center
        </span>
        <span className="searchItemTaxiOp">Free airport taxi</span>
        <span className="searchItemSubTitle">
          Studio Apartment with Air conditioning
        </span>
        <span className="searchItemFeatures">
          Entire studio 1 bathroom 1 full bed
        </span>
        <span className="searchItemCancelOp">Free cancellation </span>
        <span className="searchItemCancelOpSubtitle">
          You can cancel later, so lock in this great price today!
        </span>
      </div>
      <div className="searchItemDetail">
        <div className="searchItemRating">
          <button>8.9</button>
        </div>
        <div className="searchItemDetailText">
          <span className="searchItemPrice"> $112 </span>
          <span className="searchItemTaxOp">Includes taxes and fees</span>
          <button className="searchItemCheckBtn">See availabillity</button>
        </div>
      </div>
    </div>
  );
};

export default SearchItem;
