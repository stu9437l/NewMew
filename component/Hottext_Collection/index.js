import ProductCard from "../common/productCard";
import SectionTitle from "../common/Section_Title";

const HottestCollection = () => {
  return (
    <section className="pb-section">
      <SectionTitle
        subtitle="Our Hotest collections"
        mainTitle="New Arrivals"
      />
      <div className="container">
        <div className="row">
          <div className="col-3 mb-5">
            <ProductCard />
          </div>
          <div className="col-3 mb-5">
            <ProductCard />
          </div>
          <div className="col-3 mb-5">
            <ProductCard />
          </div>
          <div className="col-3 mb-5">
            <ProductCard />
          </div>
          <div className="col-3 mb-5">
            <ProductCard />
          </div>
          <div className="col-3 mb-5">
            <ProductCard />
          </div>
          <div className="col-3 mb-5">
            <ProductCard />
          </div>
          <div className="col-3 mb-5">
            <ProductCard />
          </div>
        </div>
        <button className="btn view-more-btn mt-3 mx-auto">View More</button>
      </div>
    </section>
  );
};

export default HottestCollection;
