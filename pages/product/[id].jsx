import React from "react";
import Breadcrumb from "../../component/common/breadcrumb";
import { AiFillStar } from "react-icons/ai";

const ProductDetail = () => {
  return (
    <>
      <Breadcrumb
        category="Sunglasses"
        productName=" Newmew Matte Black Sunglasses with carbon Grey Lens"
      />
      <section className="single-product-detail">
        <div className="container">
          <div className="row">
            <div className="col-7"></div>
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
                <div className="row">
                  <div className="col-3">
                    <h6 className="title">Color</h6>
                  </div>
                  <div className="col-9">
                    <div className="d-flex align-items-center">
                      <input
                        type="color"
                        class="form-control form-control-color"
                        id="exampleColorInput"
                        value="#563d7c"
                        title="Choose your color"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <form>
                <div className="row">
                  <div className="col-2">
                    <input
                      type="number"
                      className="form-control"
                      name="count"
                    />
                  </div>
                  <div className="col-10">
                    <button className="btn lg-add-to-cart">Add To Cart</button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ProductDetail;
