import Faq from "../Faq/Faq";
import { Footer } from "../Footer/Footer";
import QueOfrecemos from "../QueOfrecemos/QueOfrecemos";
import "./Content.css";

const Content = () => {
  return (
    <>
      <div id="div-content">
        <QueOfrecemos />
        <Faq />
        <Footer />
      </div>
    </>
  );
};

export default Content;
