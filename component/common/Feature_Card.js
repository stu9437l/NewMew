import Image from "next/image";
import Link from "next/link";
import { RiArrowRightSLine } from "react-icons/ri";
const FeatureCard = ({ image, type, fLink, lLink }) => {
  return (
    <div className="category-card">
      <div className="mb-3">
        <Image src={image} height={336} alt="women category"></Image>
      </div>
      <h3>{type}</h3>
      <ul className="breadcrumb-list-links">
        <li className="item me-2">
          <Link href="">
            <div className="d-flex align-items-cener ">
              <a type="button" className="link">
                {fLink}
              </a>
              <RiArrowRightSLine className="ms-2 right-chevron" />
            </div>
          </Link>
        </li>
        <li className="item me-2">
          <Link href="">
            <div className="d-flex align-items-cener">
              <a a type="button" className="link">
                {lLink}
              </a>
              <RiArrowRightSLine className="ms-2 right-chevron" />
            </div>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default FeatureCard;
