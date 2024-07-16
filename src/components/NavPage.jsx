import React, { useContext, useState } from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import { LangContext, ModeContext } from "../App";
import { BsMoonFill } from "react-icons/bs";
import { MdSunny } from "react-icons/md";
import image from "../images/Ekran Alıntısı.PNG";
const NavPage = () => {
  const handleChangeTheme = (mode) => {
    setTheme(mode);
    localStorage.setItem("theme", mode);
  };
  const handleChangeLanguage = (lang) => {
    setLang(lang);
    localStorage.setItem("language", lang);
  };
  const [theme, setTheme] = useContext(ModeContext);
  const [lang, setLang] = useContext(LangContext);
  return (
    <>
      <Navbar
        collapseOnSelect
        expand="lg"
        className={
          theme == "dark" ? "bg-dark navbar-dark" : "bg-light navbar-ligh"
        }
      >
        <Container>
          <Link to="/" className="navbar-brand">
            <img src={image} alt="Cobify" />
          </Link>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mx-auto">
              {lang == "en" ? (
                <Link to="/" className="nav-link navs">
                  Home
                </Link>
              ) : (
                <Link to="/" className="nav-link navs">
                  Ev
                </Link>
              )}
              {lang == "en" ? (
                <Link to="/product" className="nav-link navs">
                  Products
                </Link>
              ) : (
                <Link to="/product" className="nav-link navs">
                  Məhsullar
                </Link>
              )}
              {lang == "en" ? (
                <Link to="/blogs" className="nav-link navs">
                  Blogs
                </Link>
              ) : (
                <Link to="/blogs" className="nav-link navs">
                  Bloqlar
                </Link>
              )}
              {lang == "en" ? (
                <Link to="/login" className="nav-link navs">
                  Login
                </Link>
              ) : (
                <Link to="/login" className="nav-link navs">
                  Daxil ol
                </Link>
              )}
            </Nav>
            <Nav>
              <Nav.Link>
                {theme == "dark" && (
                  <button
                    className="dark-light-mode"
                    onClick={() => handleChangeTheme("light")}
                  >
                    <BsMoonFill />
                  </button>
                )}
                {theme == "light" && (
                  <button
                    className="dark-light-mode"
                    onClick={() => handleChangeTheme("dark")}
                  >
                    <MdSunny />
                  </button>
                )}
              </Nav.Link>
              <Nav.Link className="language">
                {lang == "en" && (
                  <button
                    className="nav-lang "
                    onClick={() => {
                      handleChangeLanguage("az");
                    }}
                  >
                    <img
                      src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Flag_of_the_United_Kingdom_%281-2%29.svg/255px-Flag_of_the_United_Kingdom_%281-2%29.svg.png"
                      alt="en-flag"
                    />
                    <span className="nav-link">English</span>
                  </button>
                )}
                {lang == "az" && (
                  <button
                    className="nav-lang nav-lang-az"
                    onClick={() => {
                      handleChangeLanguage("en");
                    }}
                  >
                    <img
                      src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/dd/Flag_of_Azerbaijan.svg/800px-Flag_of_Azerbaijan.svg.png"
                      alt="az-flag"
                    />
                    <span className="nav-link">Azərbaycan</span>
                  </button>
                )}
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default NavPage;
