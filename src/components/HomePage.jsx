import React, { useContext } from "react";
import ControlledCarousel from "./SliderComponenet";
import { LangContext } from "../App";

const HomePage = () => {
  const [lang, setLang] = useContext(LangContext);

  return (
    <>
      <div className="home-page">
        <div className="slider">
          <ControlledCarousel />
        </div>
        <div className="product-home-page-container">
          <div className="product-home-page-1">
            <img
              src="https://template.hasthemes.com/hurst-v1/hurst/img/banner/3.jpg"
              alt=""
            />
            {lang == "en" ? (
              <span className="text-1">New</span>
            ) : (
              <span className="text-1">Yeni</span>
            )}
            <span className="text-2">$50.00</span>
            {lang == "en" ? (
              <span className="text-3">Product name</span>
            ) : (
              <span className="text-3">Məhsul adı</span>
            )}

            <span className="text-4">Furniture</span>
          </div>
          <div className="product-home-page-2">
            <img
              src="https://template.hasthemes.com/hurst-v1/hurst/img/banner/4.jpg"
              alt=""
            />
            <span className="text-5">Lorem ipsum dolor sit lorem</span>
            <button className="product-home-page-button">Shop Now</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomePage;
