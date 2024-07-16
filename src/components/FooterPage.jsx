import React, { useContext } from "react";
import { FaRegDotCircle } from "react-icons/fa";
import { LangContext } from "../App";
const FooterPage = () => {
  const [lang, setLang] = useContext(LangContext);

  return (
    <div className="footer-page">
      <div className="footer-container">
        {
          lang=="en" ? <h4>Contact Us</h4> : <h4>Bizimlə əlaqə</h4>
        }
        <div className="div-1">
          {
            lang=="en" ? <span className="span-text">Address:</span> : <span className="span-text">Ünvan:</span>
          }
          <span className="span-text-2">28 Green Tower, Street </span>
        </div>
        <div className="div-1">
          {
            lang=="en" ? <span className="span-text">Phone:</span> : <span className="span-text">Telefon:</span>
          }
          <span className="span-text-2">012345 - 123456789</span>
        </div>
        <div className="div-1">
          {
            lang=="en" ? <span className="span-text">Email:</span> : <span className="span-text">E-mail:</span>
          }
          <span className="span-text-2">your-email@gmail.com</span>
        </div>
      </div>
      <div className="footer-container">
         {
          lang=="en" ? <h4>Accounts</h4> : <h4>Hesablar</h4>
         }
        <ul>
          <li>
            <a href="">
              <FaRegDotCircle />
              {
                lang=="en" ? <span>My Account</span>: <span>Hesabım</span>
              }

            </a>
          </li>
          <li>
            <a href="">
              <FaRegDotCircle />
              <span>My Wishlist</span>
            </a>
          </li>
          <li>
            <a href="">
              <FaRegDotCircle />
              <span>My Cart</span>
            </a>
          </li>
          <li>
            <a href="">
              <FaRegDotCircle />
              <span>Sign In</span>
            </a>
          </li>
          <li>
            <a href="">
              <FaRegDotCircle />
              <span>Check out</span>
            </a>
          </li>
        </ul>
      </div>
      <div className="footer-container">
        {
          lang=="en" ? <h4>Social</h4> : <h4>Sosial</h4>
        }
        <ul>
          <li>
            <a href="">
              <FaRegDotCircle />
              <span>Facebook</span>
            </a>
          </li>
          <li>
            <a href="">
              <FaRegDotCircle />
              <span>Instagram</span>
            </a>
          </li>
          <li>
            <a href="">
              <FaRegDotCircle />
              <span>Linkedin</span>
            </a>
          </li>
          <li>
            <a href="">
              <FaRegDotCircle />
              <span>Twitter</span>
            </a>
          </li>

        </ul>
      </div>
      <div className="footer-container">
        <h4>Email</h4>
        <input type="email" placeholder="Email address..."/>
        <button>Subscribe</button>
      </div>
    </div>
  );
};

export default FooterPage;
