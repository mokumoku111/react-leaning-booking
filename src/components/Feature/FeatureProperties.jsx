import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import React from "react";
import "./FeatureProperties.css";

const FeatureProperties = () => {
  return (
    <div className="featureProperties">
      <div className="featurePropertiesItem">
        <div className="ftest">
          <img
            src="https://cf.bstatic.com/xdata/images/hotel/square600/13125860.webp?k=e148feeb802ac3d28d1391dad9e4cf1e12d9231f897d0b53ca067bde8a9d3355&o=&s=1"
            alt=""
            className="featurePropertiesImg"
          />
          <div className="ratingOnImg">
            <button>8.9</button>
          </div>
        </div>
        <div className="Namerating">
          <span className="featurePropertiesName">Aparthotel Stare Miasto</span>
          <button>
            8.9 <FontAwesomeIcon icon={faStar} className="faRating" />
          </button>
        </div>
        <span className="featurePropertiesCity">Madrid</span>
        <span className="featurePropertiesPrice">Starting from $120</span>
        <div className="featurePropertiesRating">
          <button>
            8.9 <FontAwesomeIcon icon={faStar} className="faRating" />
          </button>
          <span>Excellent</span>
        </div>
      </div>

      <div className="featurePropertiesItem">
        <div className="ftest">
          <img
            src="https://cf.bstatic.com/xdata/images/hotel/max1280x900/215955381.jpg?k=ff739d1d9e0c8e233f78ee3ced82743ef0355e925df8db7135d83b55a00ca07a&o=&hp=1"
            alt=""
            className="featurePropertiesImg"
          />
          <div className="ratingOnImg">
            <button>9.0</button>
          </div>
        </div>
        <div className="Namerating">
          <span className="featurePropertiesName">Aparthotel Stare Miasto</span>
          <button>
            9.0 <FontAwesomeIcon icon={faStar} className="faRating" />
          </button>
        </div>
        <span className="featurePropertiesCity">Madrid</span>
        <span className="featurePropertiesPrice">Starting from $120</span>
        <div className="featurePropertiesRating">
          <button>
            9.0 <FontAwesomeIcon icon={faStar} className="faRating" />
          </button>
          <span>Excellent</span>
        </div>
      </div>

      <div className="featurePropertiesItem">
        <img
          src="https://cf.bstatic.com/xdata/images/hotel/max1280x900/322658536.jpg?k=3fffe63a365fd0ccdc59210188e55188cdb7448b9ec1ddb71b0843172138ec07&o=&hp=1"
          alt=""
          className="featurePropertiesImg"
        />
        <div className="Namerating">
          <span className="featurePropertiesName">Aparthotel Stare Miasto</span>
          <button>
            9.1 <FontAwesomeIcon icon={faStar} className="faRating" />
          </button>
        </div>
        <span className="featurePropertiesCity">Madrid</span>
        <span className="featurePropertiesPrice">Starting from $120</span>
        <div className="featurePropertiesRating">
          <button>
            9.1 <FontAwesomeIcon icon={faStar} className="faRating" />
          </button>
          <span>Excellent</span>
        </div>
      </div>
    </div>
  );
};

export default FeatureProperties;
