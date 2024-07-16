import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NavPage from "./components/NavPage";
import HomePage from "./components/HomePage";
import FooterPage from "./components/FooterPage";
import { createContext, useState } from "react";
import ProductPage from "./components/ProductPage";
import BlogsPage from "./components/BlogsPage";
import LoginPage from "./components/LoginPage";
import RegisterPage from "./components/RegisterPage";

export const ModeContext = createContext();
export const LangContext = createContext();
export const UserContext = createContext();
export const AccountDataContext = createContext();

function App() {
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") ? localStorage.getItem("theme") : "light"
  );
  const [lang, setLang] = useState(
    localStorage.getItem("language") ? localStorage.getItem("language") : "en"
  );
  const [user, setUser] = useState(
    localStorage.getItem("user")
      ? JSON.parse(localStorage.getItem("user"))
      : [
          {
            name: "",
            mail: "",
            pass: "",
          },
        ]
  );
  const [accountData, setAccountData] = useState(
    localStorage.getItem("account")
      ? JSON.parse(localStorage.getItem("account"))
      : false
  );
  return (
    <div className="App" id={theme}>
      <AccountDataContext.Provider value={[accountData, setAccountData]}>
        <UserContext.Provider value={[user, setUser]}>
          <ModeContext.Provider value={[theme, setTheme]}>
            <LangContext.Provider value={[lang, setLang]}>
              <BrowserRouter>
                <NavPage></NavPage>
                <Routes>
                  <Route path="/" element={<HomePage />} />
                  <Route path="/product" element={<ProductPage />} />
                  <Route path="/blogs" element={<BlogsPage />} />
                  <Route path="/register" element={<RegisterPage />} />
                  <Route path="/login" element={<LoginPage />} />
                </Routes>
                <FooterPage></FooterPage>
              </BrowserRouter>
            </LangContext.Provider>
          </ModeContext.Provider>
        </UserContext.Provider>
      </AccountDataContext.Provider>
    </div>
  );
}

export default App;
