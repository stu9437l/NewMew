import ProductCard from "../common/productCard";
import SectionTitle from "../common/Section_Title";

const RelatedProduct = () => {
  return (
    <section className="related-products">
      <SectionTitle subtitle="Related" mainTitle="Related Products" />
      <div className="row">
        <div className="col-3">
          <ProductCard />
        </div>
        <div className="col-3">
          <ProductCard />
        </div>
        <div className="col-3">
          <ProductCard />
        </div>
        <div className="col-3">
          <ProductCard />
        </div>
      </div>
    </section>
  );
};

export default RelatedProduct;
