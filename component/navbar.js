import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import Logo from "../public/assets/images/logo.png";
import { FiSearch } from "react-icons/fi";
import { RiGiftFill } from "react-icons/ri";

const NavBar = () => {
  const router = useRouter();
  const [showDropDown, setShowDropdown] = useState(false);
  const toggleDropdown = () => {
    setShowDropdown(!showDropDown);
  };
  return (
    <>
      <section className="top-navbar">
        <div className="container">
          <div className="row">
            <div className="col-2">
              <Link href="">
                <Image height={28} width={190} src={Logo} alt="Logo-Image" />
              </Link>
            </div>
            <div className="col-8">
              <div className="d-flex align-itmes-cener justify-content-center">
                <ul className="nav">
                  <li className="nav-item">
                    <Link href="/" aria-current="page">
                      <a
                        className={`nav-link ${router === "" ? "active" : ""}`}
                      >
                        Sunglasses
                      </a>
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link href="/" aria-current="page">
                      <a
                        className={`nav-link ${router === "" ? "active" : ""}`}
                      >
                        Frames
                      </a>
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link href="/" aria-current="page">
                      <a
                        className={`nav-link active ${
                          router === "" ? "active" : ""
                        }`}
                      >
                        Contact Lens
                      </a>
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link href="/" aria-current="page">
                      <a
                        className={`nav-link ${router === "" ? "active" : ""}`}
                      >
                        Collection
                      </a>
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link href="/" aria-current="page">
                      <a
                        className={`nav-link ${router === "" ? "active" : ""}`}
                      >
                        Sale
                        <div className="hot-dag">Hot</div>
                      </a>
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link href="/" aria-current="page">
                      <a
                        className={`nav-link ${router === "" ? "active" : ""}`}
                      >
                        StoreLocator
                      </a>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-2">
              <div className="d-flex align-items-center justify-content-end">
                <div className="dropdown">
                  <a
                    type="button"
                    className={`sign-in dropdown-toggle ${
                      showDropDown ? "show" : ""
                    }`}
                    onClick={toggleDropdown}
                  >
                    Sign In
                  </a>
                  <ul className={`dropdown-menu ${showDropDown ? "show" : ""}`}>
                    <li className="dropdown-item">
                      <Link href="">
                        <a className="dropdown-link">Dropdown Item</a>
                      </Link>
                    </li>
                    <li className="dropdown-item">
                      <a className="dropdown-link">Dropdown Item</a>
                    </li>
                  </ul>
                </div>
                <a type="button" className="search-btn mx-5">
                  <FiSearch />
                </a>
                <Link href="">
                  <div className="cart-count">
                    <RiGiftFill />
                    <div className="nubmer">4</div>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default NavBar;
