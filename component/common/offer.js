import Image from "next/image";
import offer from "../../public/assets/images/offer.png";
const Offer = () => {
  return (
    <div className="pb-section">
      <div className="container">
        <div className="row">
          <div className="col-9 mx-auto">
            <Image src={offer} alt="offer-title"></Image>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Offer;
