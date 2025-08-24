import "./Footer.css";
import { FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";
import Logo from "../assets/logo.svg";
function Footer() {
  return (
    <footer>
      <div className="footer">
        {/* Sol tarafta logo + açıklama */}
        <div className="footer-logo">
          <img src={Logo} alt="Serhat Otomatik Şanzıman" />
          <p>
            Serhat Otomatik Şanzıman, 30 yıldır Ankara’da hizmet veriyor.
            Kaliteli işçilik ve müşteri memnuniyetini her zaman ön planda
            tutuyoruz.
          </p>
        </div>

        {/* Ortada hızlı linkler */}
        <div className="footer-links">
          <h4>Hızlı Linkler</h4>
          <ul>
            <li>
              <a href="#">Anasayfa</a>
            </li>
            <li>
              <a href="#">Hakkımızda</a>
            </li>
            <li>
              <a href="#">Hizmetler</a>
            </li>
            <li>
              <a href="#">Fiyat Al</a>
            </li>
          </ul>
        </div>

        {/* Sağda iletişim bilgileri */}
        <div className="footer-contact">
          <h4>İletişim</h4>
          <ul>
            <li>
              <i>
                <FaPhoneAlt />
              </i>{" "}
              0 (312) 123 45 67
            </li>
            <li>
              <i>
                <FaMapMarkerAlt />
              </i>{" "}
              Ostim, Ankara
            </li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        © 2025 Serhat Otomatik Şanzıman - Tüm hakları saklıdır.
      </div>
    </footer>
  );
}

export default Footer;
