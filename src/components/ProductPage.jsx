import React, { useContext } from "react";
import { IoIosStar } from "react-icons/io";
import { IoIosStarHalf } from "react-icons/io";
import { GoHeart } from "react-icons/go";
import { SlBasket } from "react-icons/sl";
import { LangContext } from "../App";

const ProductPage = () => {
  const [lang, setLang] = useContext(LangContext);

  const productData = [
    {
      id: 1,
      image: "https://template.hasthemes.com/hurst-v1/hurst/img/product/6.jpg",
    },
    {
      id: 2,
      image: "https://template.hasthemes.com/hurst-v1/hurst/img/product/5.jpg",
    },
    {
      id: 3,
      image: "https://template.hasthemes.com/hurst-v1/hurst/img/product/4.jpg",
    },
    {
      id: 4,
      image: "https://template.hasthemes.com/hurst-v1/hurst/img/product/3.jpg",
    },
    {
      id: 5,
      image: "https://template.hasthemes.com/hurst-v1/hurst/img/product/2.jpg",
    },
    {
      id: 6,
      image: "https://template.hasthemes.com/hurst-v1/hurst/img/product/1.jpg",
    },
    {
      id: 7,
      image: "https://template.hasthemes.com/hurst-v1/hurst/img/product/7.jpg",
    },
    {
      id: 8,
      image: "https://template.hasthemes.com/hurst-v1/hurst/img/product/8.jpg",
    },
    {
      id: 9,
      image: "https://template.hasthemes.com/hurst-v1/hurst/img/product/9.jpg",
    },
    {
      id: 10,
      image: "https://template.hasthemes.com/hurst-v1/hurst/img/product/10.jpg",
    },
    {
      id: 11,
      image: "https://template.hasthemes.com/hurst-v1/hurst/img/product/11.jpg",
    },
    {
      id: 12,
      image: "https://template.hasthemes.com/hurst-v1/hurst/img/product/12.jpg",
    },
  ];
  return (
    <div className="product-page">
      {lang == "en" ? <h3>Products</h3> : <h3>Məhsullar</h3>}

      <div className="product-list">
        {productData.map((product) => (
          <div key={product.id} className="product-card">
            <img
              src={product.image}
              alt="product"
              className="product-card-img"
            />
            {lang == "en" ? (
              <span className="text-1">New</span>
            ) : (
              <span className="text-1">Yeni</span>
            )}{" "}
            <span className="text-2">$50.00</span>
            <div className="product-details">
              <span className="product-name-text">DUMMY PRODUCT NAME</span>
              <p className="product-rate">
                <IoIosStar />
                <IoIosStar />
                <IoIosStar />
                <IoIosStar />
                <IoIosStarHalf />
              </p>
              <span className="heart">
                <GoHeart />
              </span>
              <span className="basket">
                <SlBasket />
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductPage;
