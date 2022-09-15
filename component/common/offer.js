import Image from "next/image";
import Link from "next/link";
import offer from "../../public/assets/images/offer.png";
const Offer = () => {
  return (
    <div className="pb-section pt-section">
      <div className="container">
        <div className="row">
          <div className="col-9 mx-auto">
            <Link href="">
              <Image src={offer} alt="offer-title"></Image>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Offer;
