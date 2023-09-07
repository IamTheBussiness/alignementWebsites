import "./CardOffer.css";

interface CardOffersProps {
  imgO: string;
  titleO: string;
  descriptionO: string;
}

const CardOffer = ({ imgO, titleO, descriptionO }: CardOffersProps) => {
  return (
    <div>
      <div className="cardOffers">
        <div id="divImage">
          <img className="imgCard" src={imgO} alt="" />
        </div>
        <h2 className="hDosCard">{titleO}</h2>
        <h3 className="hTresCard">{descriptionO}</h3>
      </div>
    </div>
  );
};

export default CardOffer;
