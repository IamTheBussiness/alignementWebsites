import "./CardOffer.css";
import mobile_friendly from "../../../Resources/images/mobile_friendly.png";

const CardOffer = () => {
  return (
    <div className="cardOffers">
      <img className="imgCard" src={mobile_friendly} alt="" />
      <h2 className="hDosCard">Mobile Friendly</h2>
      <h3 className="hTresCard">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.
      </h3>
    </div>
  );
};

export default CardOffer;
