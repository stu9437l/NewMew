import React, { useState } from "react";
import { BiChevronDown, BiChevronRight } from "react-icons/bi";

const MainFilter = () => {
  const [showPriceRange, setShowPriceRange] = useState(true);
  const [showGender, setShowGender] = useState(true);
  const [showColor, setShowColor] = useState(true);
  const [showBrand, setShowBrand] = useState(true);
  return (
    <>
      <h4 className="mb-4 option-title">Shopping Options</h4>
      <ul className="m-0 p-0 filter-list">
        <li className="filter-item mb-5">
          <a
            type="button"
            className="filter-title mb-3"
            onClick={() => {
              setShowPriceRange(!showPriceRange);
            }}
          >
            <p className="mb-0">Price Range</p>
            {showPriceRange ? <BiChevronDown /> : <BiChevronRight />}
          </a>
          <div className={`ps-3 ${showPriceRange ? "d-block" : "d-none"}`}>
            <div className="mb-3">
              <input type="radio" id="below_500" className="d-none" />
              <label htmlFor="below_500">Under Rs 500</label>
            </div>
            <div className="mb-3">
              <input type="radio" id="501_1500" className="d-none" />
              <label htmlFor="501_1500">Rs 501 to Rs 1500</label>
            </div>
            <div className="mb-3">
              <input type="radio" id="below_500" className="d-none" />
              <label htmlFor="below_500">Rs 15001 to Rs 3000</label>
            </div>
            <div className="mb-3">
              <input type="radio" id="below_500" className="d-none" />
              <label htmlFor="below_500">Rs 3001 to Rs 5000</label>
            </div>
            <div className="mb-3">
              <input type="radio" id="below_500" className="d-none" />
              <label htmlFor="below_500">Rs 5001 to Above</label>
            </div>
            <div className="price-range">
              <div className="row">
                <div className="col-4">
                  <input
                    type="number"
                    className="form-control"
                    placeholder="Rs Min"
                  />
                </div>
                <div className="col-4">
                  <input
                    type="number"
                    className="form-control"
                    placeholder="Rs Max"
                  />
                </div>
                <div className="col-2">
                  <button className="btn filter-price">Go</button>
                </div>
              </div>
            </div>
          </div>
        </li>
        <li className="filter-item mb-5">
          <a
            type="button"
            className="filter-title mb-3"
            onClick={() => {
              setShowGender(!showGender);
            }}
          >
            <p className="mb-0">Gender</p>
            {showGender ? <BiChevronDown /> : <BiChevronRight />}
          </a>
          <div className={`ps-3 ${showGender ? "d-block" : "d-none"}`}>
            <div className="d-flex align-items-center mb-3">
              <input
                type="checkbox"
                id="men"
                className="form-input-check me-3"
                name="gender"
              />
              <label htmlFor="men">Men</label>
            </div>
            <div className="d-flex align-items-center mb-3">
              <input
                type="checkbox"
                id="women"
                className="form-input-check me-3"
                name="gender"
              />
              <label htmlFor="women">Women</label>
            </div>
            <div className="d-flex align-items-center mb-3">
              <input
                type="checkbox"
                id="unisex"
                className="form-input-check me-3"
                name="gender"
              />
              <label htmlFor="unisex">Unisex</label>
            </div>
          </div>
        </li>
        <li className="filter-item mb-5">
          <a
            type="button"
            className="filter-title mb-3"
            onClick={() => {
              setShowColor(!showColor);
            }}
          >
            <p className="mb-0">Color</p>
            {showColor ? <BiChevronDown /> : <BiChevronRight />}
          </a>
          <div className={`ps-3 ${showColor ? "d-block" : "d-none"}`}>
            <div className="d-flex align-items-center mb-3">
              <input
                type="checkbox"
                id="red"
                className="form-input-check me-3"
                name="color"
              />
              <label htmlFor="red">Red</label>
            </div>
            <div className="d-flex align-items-center mb-3">
              <input
                type="checkbox"
                id="black"
                className="form-input-check me-3"
                name="color"
              />
              <label htmlFor="black">Black</label>
            </div>
            <div className="d-flex align-items-center mb-3">
              <input
                type="checkbox"
                id="blue"
                className="form-input-check me-3"
                name="color"
              />
              <label htmlFor="blue">Blue</label>
            </div>
            <div className="d-flex align-items-center mb-3">
              <input
                type="checkbox"
                id="gray"
                className="form-input-check me-3"
                name="color"
              />
              <label htmlFor="gray">Gray</label>
            </div>
            <div className="d-flex align-items-center mb-3">
              <input
                type="checkbox"
                id="Multicolor"
                className="form-input-check me-3"
                name="color"
              />
              <label htmlFor="Multicolor">Multicolor</label>
            </div>
          </div>
        </li>
        <li className="filter-item mb-5">
          <a
            type="button"
            className="filter-title mb-3"
            onClick={() => {
              setShowBrand(!showBrand);
            }}
          >
            <p className="mb-0">Brand</p>
            {showBrand ? <BiChevronDown /> : <BiChevronRight />}
          </a>
          <div className={`ps-3 ${showBrand ? "d-block" : "d-none"}`}>
            <div className="d-flex align-items-center mb-3">
              <input
                type="checkbox"
                id="newmew"
                className="form-input-check me-3"
                name="brand"
              />
              <label htmlFor="newmew">Newmew</label>
            </div>
            <div className="d-flex align-items-center mb-3">
              <input
                type="checkbox"
                id="limitless"
                className="form-input-check me-3"
                name="brand"
              />
              <label htmlFor="limitless">Limitless</label>
            </div>
            <div className="d-flex align-items-center mb-3">
              <input
                type="checkbox"
                id="american-optical"
                className="form-input-check me-3"
                name="brand"
              />
              <label htmlFor="american-optical">American Optical</label>
            </div>
            <div className="d-flex align-items-center mb-3">
              <input
                type="checkbox"
                id="oakley"
                className="form-input-check me-3"
                name="brand"
              />
              <label htmlFor="oakley">Oakley</label>
            </div>
            <div className="d-flex align-items-center mb-3">
              <input
                type="checkbox"
                id="rayban"
                className="form-input-check me-3"
                name="brand"
              />
              <label htmlFor="rayban">Ray-Ban</label>
            </div>
          </div>
        </li>
      </ul>
    </>
  );
};

export default MainFilter;
