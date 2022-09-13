import Image from "next/image";
import React from "react";
import product from "../../public/assets/images/category-list/category1.png";
import { AiFillStar } from "react-icons/ai";
import { FaHeart } from "react-icons/fa";

const ProductCard = () => {
  return (
    <div className="product card p-4">
      <div className="card-body">
        <Image src={product} height={112} width={206} alt="category-list" />|
        <label htmlFor="favorite-box" className="favorite-box">
          <FaHeart />
        </label>
        <input
          type="radio"
          id="favorite-box"
          name="favorite"
          className="d-none"
          checked
        />
        <div className="tag-badge">Limitless</div>
      </div>
      <div className="d-flex align-items-start justify-content-between mb-4">
        <h3 className="mb-0">Silver frame clear gls and black frame</h3>
        <div className="rating  ms-4">
          <AiFillStar />
          <h3 className="mb-2 ms-1">4.3</h3>
        </div>
      </div>
      <h3 className="mb-4">
        <span className="actual-price">Rs 1600</span>
        <span className="marked-price">RS. 1800</span>
      </h3>
      <div className="row pb-3">
        <div className="col-6">
          <button className="btn add-to-cart d-block w-100">Add To Cart</button>
        </div>
        <div className="col-6">
          <button className="btn buy-now d-block w-100">Buy Now</button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
