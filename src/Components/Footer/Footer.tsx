import "./Footer.css";
import imgLogo from "../../Resources/images/logo.svg";
import imgTel from "../../Resources/images/telefono.svg";
import imgUbicacion from "../../Resources/images/ubicacion.png";
import imgMail from "../../Resources/images/correo.png";

export const Footer = () => {
  return (
    <div id="footer">
      <div className="footerTop">
        <div className="icons">
          <img src={imgLogo} alt="Logo-Empresa" />
        </div>
        <div className="icons">
          <img src={imgTel} alt="Logo-Tel" />
          <div className="texto">
            <p>Télefonos:</p>
            <p>Maxi: +34 654-83-75-08</p>
            <p>Rodrigo: +54-911-4946-8452</p>
          </div>
        </div>
        <div className="icons">
          <img src={imgUbicacion} alt="Logo-Ubicacion" />
          <div className="texto">
            <p>Ubicación:</p>
            <p>España, Málaga.</p>
            <p>Argentina, Bs As.</p>
          </div>
        </div>
        <div className="icons">
          <img src={imgMail} alt="Logo-Mail" />
          <div className="texto">
            <p>Mails:</p>
            <p>chavezmaxi@gmail.com </p>
            <p>rilago@protonmail.com</p>
          </div>
        </div>
      </div>
      <div className="footerBottom">
        <div className="legal">
          <p>
            © 2023 ALIGNMENT WEBSITES ®. All rights reserved.| Privacy Policy |
            Terms and Conditions
          </p>
        </div>
      </div>
    </div>
  );
};
