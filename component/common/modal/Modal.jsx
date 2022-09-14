import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import SubsImage from "../../../public/assets/images/subsImage.png";
import WarningImage from "../../../public/assets/images/close-modal/warning.png";
import style from "../../../styles/Modal.module.css";
import ProductSLider from "../ProductSlider";
import { BiChevronLeft, BiChevronRight } from "react-icons/bi";
import { AiOutlineCheck } from "react-icons/ai";
import { FaTimes } from "react-icons/fa";

export const SubscriptionModal = () => {
  const [show, setShow] = useState(false);
  const handleShow = () => {
    setShow(!show);
  };
  return (
    <div>
      <button type="button" className="btn btn-primary" onClick={handleShow}>
        newsletter
      </button>
      <div className={`subscriptions modal fade ${show ? "show d-block" : ""}`}>
        <div class="modal-dialog modal-dialog-centered modal-lg ">
          <div class="modal-content border-0 shadow rounded overflow-hidden">
            <div className="card border-0">
              <div className="row align-items-center">
                <div className="col-6">
                  <Image
                    height={410}
                    objectFit="cover"
                    objectPosition="center"
                    src={SubsImage}
                    alt="subscription-image"
                  ></Image>
                </div>
                <div className="col-6">
                  <div className="pe-4">
                    <h3 className={style.title}>Subsctibe to our newslwtter</h3>
                    <p className={style.description}>
                      Sign up to receive updates, promotions, and sneak peaks of
                      upcoming products. Plus 205 off your next order
                    </p>
                    <div class="input-group mb-3">
                      <input
                        type="email"
                        className="form-control"
                        id="newsletter"
                        name="newsletter"
                        placeholder="Enter email address"
                      />
                      <button class="btn subscribe-button" type="button">
                        Sign Up
                      </button>
                    </div>
                    <Link href="/">
                      <a class={style.note}>Please, Dont ask again</a>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export const ClosedModal = () => {
  const [show, setShow] = useState(false);
  const handleShow = () => {
    setShow(!show);
  };
  return (
    <div>
      <button type="button" className="btn btn-primary" onClick={handleShow}>
        Close Modal
      </button>
      <div
        className={`subscriptions  modal fade ${show ? "show d-block" : ""}`}
      >
        <div class="modal-dialog modal-dialog-centered modal-lg ">
          <div class="modal-content border-0 shadow rounded overflow-hidden">
            <div className="card border-0">
              <div className="row align-items-center">
                <div className="col-6">
                  <div class={style.left_wave_bg}>
                    <Image
                      height={250}
                      width={250}
                      objectFit="cover"
                      objectPosition="center"
                      src={WarningImage}
                      alt="subscription-image"
                    ></Image>
                  </div>
                </div>
                <div className="col-6">
                  <div className="pe-4">
                    <h3 className={style.title}>We are Closed</h3>
                    <p className={style.description}>
                      Due to the escalating circumstances surrounding{" "}
                      <b>Coronavirus ( COVID-19). </b>Our store is tempoearily
                      closes. We apologise for the inconvenience .<br />
                      We'll be giving you a full update and announcing the
                      reopening ad soon as possible.
                    </p>

                    <button class="btn subscribe-button" type="button">
                      SEE RECENT UPDATE
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export const SummmerSaleModal = () => {
  const [show, setShow] = useState(false);
  const handleShow = () => {
    setShow(!show);
  };
  return (
    <div>
      <button type="button" className="btn btn-primary" onClick={handleShow}>
        summer sale
      </button>
      <div
        className={`subscriptions  modal fade ${show ? "show d-block" : ""}`}
      >
        <div class="modal-dialog modal-dialog-centered modal-lg ">
          <div class="modal-content border-0 shadow rounded overflow-hidden">
            <div className="card border-0">
              <div className="row align-items-center">
                <div className="col-6">
                  <div class={style.left_wave_bg}></div>
                </div>
                <div className="col-6">
                  <div className="pe-5">
                    <h3 className={style.title}>Summer Sales</h3>
                    <p className={style.description}>
                      Where can we send you <b>30% off</b> discound?
                    </p>
                    <input
                      type="text"
                      className="form-control mb-3"
                      name="fullname"
                      placeholder="Full Name"
                    />
                    <input
                      type="email"
                      className="form-control mb-5"
                      name="fullname"
                      placeholder="Enter your email"
                    />
                    <button
                      class="btn discount-offer-button w-100"
                      type="button"
                    >
                      GET MY 30% OFF
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export const BuyProductModal = () => {
  const [show, setShow] = useState(true);
  const handleShow = () => {
    setShow(!show);
  };
  const [precription, setPreciption] = useState(null);
  const [showOption, setShowOption] = useState(null);

  return (
    <div>
      <button type="button" className="btn btn-primary" onClick={handleShow}>
        Buy Product
      </button>
      <div className={`buy-product modal fade ${show ? "show d-block" : ""}`}>
        <div class="modal-dialog modal-dialog-centered modal-xl">
          <div class="modal-content border-0 shadow rounded">
            <div className="card border-0">
              <button className="modal-close" onClick={() => setShow(false)}>
                <FaTimes />
              </button>
              <div className="row">
                <div className="col-6 border-end">
                  <div className="card-body">
                    <h2 class="title ">Build your Prescription</h2>
                    <ProductSLider />
                    <div className="product-bill">
                      <div className="d-flex align-items-center justify-content-between border-bottom pb-2">
                        <p className="mb-0">#2015326</p>
                        <p className="mb-0">Red</p>
                        <p className="mb-0">Rs 2650</p>
                      </div>
                      <div className="d-flex align-items-center justify-content-between mt-3">
                        <h5 className="mb-0">Estimated total</h5>
                        <h4 className="mb-0">Rs 2650</h4>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-6">
                  <div className="card-body multi-form d-none">
                    <div className="d-flex align-items-center justify-content-between sub-title mb-5">
                      <div style={{ visibility: "hidden" }}>
                        <BiChevronLeft />
                      </div>
                      <h3 className="mb-0">Select a Lens Types</h3>
                      <div style={{ visibility: "hidden" }}>
                        <BiChevronRight />
                      </div>
                    </div>
                    <form action="">
                      <div className="mb-4">
                        <input
                          type="radio"
                          name="lens-type"
                          id="lens-type1"
                          className="d-none"
                          checked={precription === true}
                        />
                        <label
                          htmlFor="lens-type1"
                          className="tab-label"
                          onClick={() => {
                            setPreciption(true);
                          }}
                        >
                          <div className="me-4">
                            <h5 className="mb-1">Prescription</h5>
                            <p className="mb-0">Lens with vision Correction</p>
                          </div>
                          {precription ? (
                            <AiOutlineCheck />
                          ) : (
                            <BiChevronRight />
                          )}
                        </label>
                      </div>
                      <input
                        type="radio"
                        name="lens-type"
                        id="lens-type2"
                        className="d-none"
                        checked={precription === false}
                      />
                      <label
                        htmlFor="lens-type2"
                        className="tab-label"
                        onClick={() => {
                          setPreciption(false);
                        }}
                      >
                        <div className="me-4">
                          <h5 className="mb-1">Non-Prescription</h5>
                          <p className="mb-0">Lens with vision no Correction</p>
                        </div>
                        {precription ? <BiChevronRight /> : <AiOutlineCheck />}
                      </label>
                    </form>
                  </div>
                  <div className="card-body multi-form d-none">
                    <div className="d-flex align-items-center justify-content-between sub-title mb-5">
                      <div>
                        <BiChevronLeft />
                      </div>
                      <h3 className="mb-0">Select an Option</h3>
                      <div style={{ visibility: "hidden" }}>
                        <BiChevronRight />
                      </div>
                    </div>
                    <form action="">
                      <div className="mb-4">
                        <input
                          type="radio"
                          name="lens-type"
                          id="lens-type1"
                          className="d-none"
                          checked={precription === true}
                        />
                        <label
                          htmlFor="lens-type1"
                          className="tab-label"
                          onClick={() => {
                            setShowOption(true);
                          }}
                        >
                          <div className="me-4">
                            <h5 className="mb-1">
                              New Customer of New Prescrption?
                            </h5>
                            <p className="mb-0">
                              You will need current prescription and pupillary
                              distance(PD).
                            </p>
                          </div>
                          {showOption ? <AiOutlineCheck /> : <BiChevronRight />}
                        </label>
                      </div>
                      <input
                        type="radio"
                        name="lens-type"
                        id="lens-type2"
                        className="d-none"
                        checked={precription === false}
                      />
                      <label
                        htmlFor="lens-type2"
                        className="tab-label"
                        onClick={() => {
                          setShowOption(false);
                        }}
                      >
                        <div className="me-4">
                          <h5 className="mb-1">Sekext from my account</h5>
                          <p className="mb-0">
                            Choose a saved prescription or select one from a
                            previous oerder.
                          </p>
                        </div>
                        {showOption ? <BiChevronRight /> : <AiOutlineCheck />}
                      </label>
                    </form>
                  </div>
                  <div className="card-body multi-form login d-none">
                    <div className="d-flex align-items-center justify-content-between sub-title mb-5">
                      <div>
                        <BiChevronLeft />
                      </div>
                      <h3 className="mb-0">Welcome Back</h3>
                      <div style={{ visibility: "hidden" }}>
                        <BiChevronRight />
                      </div>
                    </div>
                    <form action="">
                      <div className="mb-4">
                        <input
                          type="email"
                          name="email"
                          id=""
                          className="form-control"
                        />
                        <p className="validation-error">Email is required</p>
                      </div>
                      <div className="mb-5 password-field">
                        <input
                          type="password"
                          name="password"
                          id=""
                          className="form-control"
                        />
                        <p className="validation-error">Password is required</p>
                      </div>
                      <div className="mb-2 d-flex align-items-center">
                        <input
                          type="checkbox"
                          name=""
                          id="remember_me"
                          className="form-check-input"
                        />
                        <label htmlFor="remember_me">Remember me ?</label>
                      </div>
                      <div className="mb-0 d-flex">
                        <input
                          type="checkbox"
                          name=""
                          id="accept_terms_conditions"
                          className="form-check-input"
                        />
                        <label htmlFor="accept_terms_conditions">
                          Yes, I want to join Newmew Rewards, inside in the
                          Nepal, and agree to the Rewards terms and conditions
                        </label>
                      </div>
                      <button className="btn lg-add-to-cart w-100 mt-5">
                        Sign IN
                      </button>
                      <div className="text-center mt-5">
                        <Link href="">
                          <a className="authLink">Forgot Passoword</a>
                        </Link>
                      </div>
                    </form>
                  </div>
                  <div className="card-body multi-form login ">
                    <div className="d-flex align-items-center justify-content-between sub-title mb-5">
                      <div>
                        <BiChevronLeft />
                      </div>
                      <h3 className="mb-0">
                        Please Fill the Preception Details
                      </h3>
                      <div style={{ visibility: "hidden" }}>
                        <BiChevronRight />
                      </div>
                    </div>
                    <form action="">
                      <h5 className="eye-type mb-4">Right Eye</h5>
                      <div className="row  mb-4">
                        <div className="col-6 mb-4">
                          <label htmlFor="sph" className="mb-2">
                            SPH
                          </label>
                          <select name="" id="" className="form-select">
                            <option value="">Option1</option>
                          </select>
                        </div>
                        <div className="col-6 mb-4">
                          <label htmlFor="sph" className="mb-2">
                            CYL
                          </label>
                          <select name="" id="" className="form-select">
                            <option value="">Option1</option>
                          </select>
                        </div>
                        <div className="col-6 mb-4">
                          <label htmlFor="sph" className="mb-2">
                            AXIS
                          </label>
                          <select name="" id="" className="form-select">
                            <option value="">Option1</option>
                          </select>
                        </div>
                        <div className="col-6 mb-4">
                          <label htmlFor="sph" className="mb-2">
                            ADDITIONAL
                          </label>
                          <select name="" id="" className="form-select">
                            <option value="">Option1</option>
                          </select>
                        </div>
                      </div>
                      <h5 className="eye-type mb-4">Left Eye</h5>
                      <div className="row">
                        <div className="col-6 mb-4">
                          <label htmlFor="sph" className="mb-2">
                            SPH
                          </label>
                          <select name="" id="" className="form-select">
                            <option value="">Option1</option>
                          </select>
                        </div>
                        <div className="col-6 mb-4">
                          <label htmlFor="sph" className="mb-2">
                            CYL
                          </label>
                          <select name="" id="" className="form-select">
                            <option value="">Option1</option>
                          </select>
                        </div>
                        <div className="col-6 mb-4">
                          <label htmlFor="sph" className="mb-2">
                            AXIS
                          </label>
                          <select name="" id="" className="form-select">
                            <option value="">Option1</option>
                          </select>
                        </div>
                        <div className="col-6 mb-4">
                          <label htmlFor="sph" className="mb-2">
                            ADDITIONAL
                          </label>
                          <select name="" id="" className="form-select">
                            <option value="">Option1</option>
                          </select>
                        </div>
                      </div>

                      <button className="btn lg-add-to-cart w-100 mt-4">
                        Submit Your prescriptions
                      </button>
                      <div className="text-center mt-3">
                        <Link href="">
                          <a className="aurthsaveOption green">
                            Save my Prescriptions
                          </a>
                        </Link>
                        <span className="sm-font fw-regular mx-4">Or</span>
                        <Link href="">
                          <a className="aurthsaveOption blue">
                            Uploads your Precriptions
                          </a>
                        </Link>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
