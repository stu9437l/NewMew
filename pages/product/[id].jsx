import React, { useState } from "react";
import Breadcrumb from "../../component/common/breadcrumb";
import { AiFillStar } from "react-icons/ai";
import { AiOutlineCheck } from "react-icons/ai";
import Link from "next/link";
import ProductSlider from "../../component/common/ProductSlicer";
import RelatedProduct from "../../component/Related_Products";
import ProductCard from "../../component/common/productCard";

const ProductDetail = () => {
  const hanadleChange = () => {
    console.log("hi");
  };

  const [showTab, setShowTab] = useState("description");

  return (
    <>
      <Breadcrumb
        category="Sunglasses"
        productName=" Newmew Matte Black Sunglasses with carbon Grey Lens"
      />
      <section className="single-product-detail">
        <div className="container">
          <div className="row">
            <div className="col-7">
              <ProductSlider />
            </div>
            <div className="col-5">
              <p className="brand-tag mb-1">NEWMEW</p>
              <h4 className="product-name mb-2">
                Matte Black Sunglasses with carbon Grey Lens
              </h4>
              <p className="d-flex align-items-center mb-4">
                <span className="marked-price me-3">Rs. 1600</span>
                <span className="actual-price">Rs. 1600</span>
              </p>
              <div className="rating mb-4">
                <div className="d-flex align-items-center me-3">
                  <AiFillStar />
                  <AiFillStar />
                  <AiFillStar />
                  <AiFillStar />
                  <AiFillStar />
                </div>
                <span>(32 Customer review)</span>
              </div>
              <p className="product-description mb-5">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam
                consequatur, earum labore, quod eius, enim maiores pariatur a ex
                dolorum rerum hic laudantium. Est animi exercitationem, nisi
                fugiat aut inventore?
              </p>
              <div className="prodcut-addition-info mb-5">
                <div className="row align-items-center mb-4">
                  <div className="col-3">
                    <h6 className="title">Color</h6>
                  </div>
                  <div className="col-9">
                    <div className="d-flex align-items-center color-options">
                      <div className="me-3">
                        <input
                          type="radio"
                          class="form-check-input red d-none"
                          title="Choose your color"
                          id="red"
                          name="color"
                        />
                        <label htmlFor="red" className="yellow">
                          <AiOutlineCheck />
                        </label>
                      </div>
                      <div className="me-3">
                        <input
                          type="radio"
                          class="form-check-input red d-none"
                          title="Choose your color"
                          id="yellow"
                          name="color"
                        />
                        <label htmlFor="yellow" className="black">
                          <AiOutlineCheck />
                        </label>
                      </div>
                      <div className="me-3">
                        <input
                          type="radio"
                          class="form-check-input red d-none"
                          title="Choose your color"
                          id="black"
                          name="color"
                        />
                        <label htmlFor="black" className="red">
                          <AiOutlineCheck />
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row align-items-center mb-4">
                  <div className="col-3">
                    <h6 className="title">Size</h6>
                  </div>
                  <div className="col-9">
                    <div className="d-flex align-items-center size-options">
                      <div className="me-3">
                        <input
                          type="radio"
                          class="form-check-input d-none"
                          title="Choose your color"
                          id="first"
                          name="color"
                        />
                        <label htmlFor="first" className="yellow">
                          30mm
                        </label>
                      </div>
                      <div className="me-3">
                        <input
                          type="radio"
                          class="form-check-input d-none"
                          title="Choose your color"
                          id="second"
                          name="color"
                        />
                        <label htmlFor="second" className="black">
                          44mm
                        </label>
                      </div>
                      <div className="me-3">
                        <input
                          type="radio"
                          class="form-check-input d-none"
                          title="Choose your color"
                          id="third"
                          name="color"
                        />
                        <label htmlFor="third" className="red">
                          50mm
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row align-items-center  mb-4">
                  <div className="col-3">
                    <h6 className="title">SKU</h6>
                  </div>
                  <div className="col-9">
                    <h4 className="sku-id mb-0">NM-6778-mthdi-16</h4>
                  </div>
                </div>
                <div className="row align-items-center  mb-4">
                  <div className="col-3">
                    <h6 className="title">Category</h6>
                  </div>
                  <div className="col-9">
                    <Link href="">
                      <a>Men's Eyewear</a>
                    </Link>
                    <Link href="">
                      <a>Prescription Glassess</a>
                    </Link>
                    <Link href="">
                      <a>Women's Eyewear</a>
                    </Link>
                  </div>
                </div>
                <div className="row align-items-center">
                  <div className="col-3">
                    <h6 className="title">Tags</h6>
                  </div>
                  <div className="col-9">
                    <Link href="">
                      <a>Fashion</a>
                    </Link>
                    ,
                    <Link href="">
                      <a>Glass</a>
                    </Link>
                    ,
                    <Link href="">
                      <a>Men</a>
                    </Link>
                    ,
                    <Link href="">
                      <a>Women</a>
                    </Link>
                  </div>
                </div>
              </div>
              <form>
                <div className="row pt-4">
                  <div className="col-2">
                    <input
                      type="number"
                      className="form-control"
                      name="count"
                      value={1}
                      onChange={hanadleChange}
                    />
                  </div>
                  <div className="col-10">
                    <button className="btn lg-add-to-cart">Add To Cart</button>
                  </div>
                </div>
              </form>
              <button className="btn lg-view-more-btn w-100 mt-5">
                BUILD YOUR PRESCRIPTION
              </button>
            </div>
          </div>
        </div>
      </section>
      <section class="product-addition-features">
        <div className="container">
          <div className="row">
            <div className="col-10 mx-auto">
              <ul className="m-0 p-0 tablist">
                <li className="tab-item">
                  <a
                    type="button"
                    className={`tab-link ${
                      showTab == "description" ? "active" : ""
                    }`}
                    onClick={() => {
                      setShowTab("description");
                    }}
                  >
                    Description
                  </a>
                </li>
                <li className="tab-item mx-5">
                  <a
                    type="button"
                    className={`tab-link ${
                      showTab == "addititonal-information" ? "active" : ""
                    }`}
                    onClick={() => {
                      setShowTab("addititonal-information");
                    }}
                  >
                    Additional Information
                  </a>
                </li>
                <li className="tab-item">
                  <a
                    type="button"
                    className={`tab-link ${
                      showTab == "review" ? "active" : ""
                    }`}
                    onClick={() => {
                      setShowTab("review");
                    }}
                  >
                    Reviews
                  </a>
                </li>
              </ul>
              <div className="tablist-content mt-5">
                <div
                  className={`tab-content ${
                    showTab === "description" ? "d-block" : "d-none"
                  }`}
                >
                  <p className="mb-0 md-font fw-regular text-black">
                    <b>Description Text :</b> Lorem ipsum dolor sit amet
                    consectetur adipisicing elit. Nisi, dolorum ex nemo error
                    doloribus, maiores beatae quasi neque quaerat odio magni
                    necessitatibus iusto temporibus distinctio incidunt sapiente
                    deleniti ullam! Pariatur! Lorem ipsum, dolor sit amet
                    consectetur adipisicing elit. Numquam inventore autem sint
                    architecto perspiciatis reiciendis voluptate incidunt ipsa
                    tempora quod?
                  </p>
                </div>
                <div
                  className={`tab-content ${
                    showTab === "addititonal-information" ? "d-block" : "d-none"
                  }`}
                >
                  <p className="mb-0 md-font fw-regular text-black">
                    <b>Additional Infromations Text :</b> Lorem ipsum dolor sit
                    amet consectetur adipisicing elit. Nisi, dolorum ex nemo
                    error doloribus, maiores beatae quasi neque quaerat odio
                    magni necessitatibus iusto temporibus distinctio incidunt
                    sapiente deleniti ullam! Pariatur! Lorem ipsum, dolor sit
                    amet consectetur adipisicing elit. Numquam inventore autem
                    sint architecto perspiciatis reiciendis voluptate incidunt
                    ipsa tempora quod?
                  </p>
                </div>
                <div
                  className={`tab-content ${
                    showTab === "review" ? "d-block" : "d-none"
                  }`}
                >
                  <p className="mb-0 md-font fw-regular text-black">
                    <b>Reviews Text :</b> Lorem ipsum dolor sit amet consectetur
                    adipisicing elit. Nisi, dolorum ex nemo error doloribus,
                    maiores beatae quasi neque quaerat odio magni necessitatibus
                    iusto temporibus distinctio incidunt sapiente deleniti
                    ullam! Pariatur! Lorem ipsum, dolor sit amet consectetur
                    adipisicing elit. Numquam inventore autem sint architecto
                    perspiciatis reiciendis voluptate incidunt ipsa tempora
                    quod?
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="container">
        <RelatedProduct />
      </div>
    </>
  );
};

export default ProductDetail;
