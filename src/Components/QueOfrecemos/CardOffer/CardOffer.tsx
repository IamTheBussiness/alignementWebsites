import "./CardOffer.css";
import mobile_friendly from "../../../Resources/images/mobile_friendly.png";

interface CardOffersProps {
  titleO: string;
  descriptionO: string;
}

const CardOffer = ({ titleO, descriptionO }: CardOffersProps) => {
  return (
    <div>
      <div className="cardOffers">
        <img className="imgCard" src={mobile_friendly} alt="" />
        <h2 className="hDosCard">{titleO}</h2>
        <h3 className="hTresCard">{descriptionO}</h3>
      </div>
    </div>
  );
};

export default CardOffer;