import React from "react";
import "./Header.css";
import Logo from "../assets/logo.svg"; // logonun yolunu ayarla

function Header() {
  return (
    <header className="header">
      <div className="left-section">
        <img src={Logo} alt="Serhat Otomatik Şanzıman" className="logo" />
        <nav className="nav-links">
          <a href="/">Ana Sayfa</a>
          <a href="/about">Hakkımızda</a>
          <a href="/contact">İletişim</a>
          <a href="/reviews">Yorumlar</a>
        </nav>
      </div>
      <div className="right-section">
        <a href="/pricing" className="pricing-btn">
          Fiyat Al
        </a>
      </div>
    </header>
  );
}

export default Header;
