import React from "react";

const SectionTitle = ({ subtitle, mainTitle }) => {
  return (
    <div className="section-title">
      <div className="container">
        <div className="text-center">
          <h5 className="text-center">{subtitle}</h5>
          <h2 className="text-center mb-0">{mainTitle}</h2>
        </div>
      </div>
    </div>
  );
};

export default SectionTitle;
