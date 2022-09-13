import React from "react";

const InlineTab = () => {
  return (
    <div className="container">
      <ul className="section-tab inline">
        <li className="tab-items">
          <a type="button" className="tab-link active">
            New Products
          </a>
        </li>
        <li className="tab-items">
          <a type="button" className="tab-link">
            Best Selling
          </a>
        </li>
        <li className="tab-items">
          <a type="button" className="tab-link">
            On Sale Items
          </a>
        </li>
      </ul>
    </div>
  );
};

export default InlineTab;
