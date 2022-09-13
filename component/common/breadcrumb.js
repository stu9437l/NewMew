import Link from "next/link";
import React from "react";

const Breadcrumb = ({ category, productName }) => {
  return (
    <div className="bg_light py-4 border-top border-bottom">
      <div className="container">
        <nav>
          <ol className="breadcrumb mb-0">
            <li className="breadcrumb-item">
              <Link href="">
                <a type="button">Home</a>
              </Link>
            </li>
            <li className="breadcrumb-item">
              <Link href="">
                <a type="button">{category}</a>
              </Link>
            </li>
            <li className="breadcrumb-item active" aria-current="page">
              {productName}
            </li>
          </ol>
        </nav>
      </div>
    </div>
  );
};

export default Breadcrumb;
