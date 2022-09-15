import FeatureCard from "../common/Feature_Card";
import women from "../../public/assets/images/category/women.png";
import men from "../../public/assets/images/category/men.png";
import kid from "../../public/assets/images/category/kid.png";

const Feature = () => {
  return (
    <section className="">
      <div className="container">
        <div className="row">
          <div className="col-4">
            <FeatureCard
              image={women}
              type="Women's Glasses"
              fLink="Shop frames"
              lLink="Shop best seller"
            />
          </div>
          <div className="col-4">
            <FeatureCard
              image={men}
              type="Men's Glasses"
              fLink="Shop frames"
              lLink="Shop best seller"
            />
          </div>
          <div className="col-4">
            <FeatureCard
              image={kid}
              type="Kid's Glasses"
              fLink="Shop frames"
              lLink="Shop best seller"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Feature;
