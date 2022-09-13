import Image from "next/image";
import Link from "next/link";
import Logo from "../public/assets/images/logo.png";
const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer>
      <div className="container">
        <div className="top-footer border-top border-bottom">
          <div className="row">
            <div className="col-4">
              <div className="mb-3">
                <Image height={16} width={110} src={Logo} alt="logo" />
              </div>
              <p className="mb-0 foot_info">
                Newmew is the e-commerce site for eyewear company. You will find
                a wide specs frames to buy eywglasses.
              </p>
            </div>
            <div className="col-2">
              <h4 className="foot_title">Shop</h4>
              <ul className="footer-link-list">
                <li className="nav-item">
                  <Link href="">
                    <a className="nav-link">Eyeglasses</a>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link href="">
                    <a className="nav-link">Sunglasses</a>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link href="">
                    <a className="nav-link">Blue Light glasses</a>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link href="">
                    <a className="nav-link">Clearance</a>
                  </Link>
                </li>
              </ul>
            </div>
            <div className="col-2">
              <h4 className="foot_title">Services</h4>
              <ul className="footer-link-list">
                <li className="nav-item">
                  <Link href="">
                    <a className="nav-link">Store Locations</a>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link href="">
                    <a className="nav-link">Shippings & Teturns</a>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link href="">
                    <a className="nav-link">About Us</a>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link href="">
                    <a className="nav-link">Terms Of Use</a>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link href="">
                    <a className="nav-link">Privacy Policy</a>
                  </Link>
                </li>
              </ul>
            </div>
            <div className="col-2">
              <h4 className="foot_title">Help</h4>
              <ul className="footer-link-list">
                <li className="nav-item">
                  <Link href="">
                    <a className="nav-link">Track Order</a>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link href="">
                    <a className="nav-link">Returns and exchange</a>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link href="">
                    <a className="nav-link">FAQs</a>
                  </Link>
                </li>
              </ul>
            </div>
            <div className="col-2">
              <h4 className="foot_title">About</h4>
              <ul className="footer-link-list">
                <li className="nav-item">
                  <Link href="">
                    <a className="nav-link">Affiliate Program</a>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link href="">
                    <a className="nav-link">Student Discount</a>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link href="">
                    <a className="nav-link">Reviews</a>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="bottom-footer">
          <h5 className="mb-0">@{year} NewMew</h5>
          <div className="d-flex align-items-center">
            <div className="me-5">
              <Link href="">
                <a className="nav-link">Privacy Policy</a>
              </Link>
            </div>
            <Link href="">
              <a className="nav-link">Terms and Conditions</a>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
