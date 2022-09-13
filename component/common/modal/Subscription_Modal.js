import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import SubsImage from "../../../public/assets/images/subsImage.png";
import WarningImage from "../../../public/assets/images/close-modal/warning.png";
import style from "../../../styles/Modal.module.css";

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
