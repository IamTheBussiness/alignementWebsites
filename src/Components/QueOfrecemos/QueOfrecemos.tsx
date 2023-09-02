import CardOffer from "./CardOffer/CardOffer";
import "./QueOfrecemos.css";

const QueOfrecemos = () => {
  return (
    <div>
      <div className="seccionQueOfrecemos seccion">
        <div id="titleOffer">
          <h1>
            UN SITIO WEB QUE <span id="amaras">AMARAS</span>
          </h1>
        </div>
        <div className="queOfrecemos">
          <CardOffer />
          <CardOffer />
          <CardOffer />
        </div>

        <div className="queOfrecemos">
          <CardOffer />
          <CardOffer />
          <CardOffer />
        </div>
      </div>
    </div>
  );
};

export default QueOfrecemos;
