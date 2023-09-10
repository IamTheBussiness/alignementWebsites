import Faq from "../Faq/Faq";
import { Footer } from "../Footer/Footer";
import QueOfrecemos from "../QueOfrecemos/QueOfrecemos";
import { QuienesSomos } from "../QuienesSomos/QuienesSomos";
import "./Content.css";
import { useEffect, useState } from "react";

const Content = () => {
  const [isQueOfrecemosVisible, setIsQueOfrecemosVisible] = useState(false);
  const [isQuienesSomosVisible, setIsQuienesSomosVisible] = useState(false);
  const [isFaqVisible, setIsFaqVisible] = useState(false);
  const [isFooterVisible, setIsFooterVisible] = useState(false);

  const handleScroll = () => {
    const scrollTop = window.scrollY;
    const windowHeight = window.innerHeight;

    if (!isQueOfrecemosVisible) {
      const queOfrecemosElement = document.querySelector(".que-ofrecemos");
      const queOfrecemosOffset = queOfrecemosElement?.offsetTop;
      if (scrollTop > queOfrecemosOffset - windowHeight) {
        setIsQueOfrecemosVisible(true);
      }
    }

    if (!isQuienesSomosVisible) {
      const quienesSomosElement = document.querySelector(".quienes-somos");
      const quienesSomosOffset = quienesSomosElement?.offsetTop;
      if (scrollTop > quienesSomosOffset - windowHeight) {
        setIsQuienesSomosVisible(true);
      }
    }

    if (!isFaqVisible) {
      const faqElement = document.querySelector(".faq");
      const faqOffset = faqElement?.offsetTop;
      if (scrollTop > faqOffset - windowHeight) {
        setIsFaqVisible(true);
      }
    }

    if (!isFooterVisible) {
      const footerElement = document.querySelector(".footer");
      const footerOffset = footerElement?.offsetTop;
      if (scrollTop > footerOffset - windowHeight) {
        setIsFooterVisible(true);
      }
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <div className="content">
        <div
          className={`fade-in que-ofrecemos ${
            isQueOfrecemosVisible ? "visible" : ""
          }`}
        >
          <QueOfrecemos />
        </div>
        <div
          className={`fade-in quienes-somos ${
            isQuienesSomosVisible ? "visible" : ""
          }`}
        >
          <QuienesSomos />
        </div>
        <div className={`fade-in faq ${isFaqVisible ? "visible" : ""}`}>
          <Faq />
        </div>
        <div className={`fade-in footer ${isFooterVisible ? "visible" : ""}`}>
          <Footer />
        </div>
      </div>
    </>
  );
};

export default Content;
