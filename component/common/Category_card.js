import Image from "next/image";
import cat1 from "../../public/assets/images/category-list/category1.png";
const CategoryCard = () => {
  return (
    <div className="category card p-3">
      <div className="card-body p-5 mb-3">
        <Image src={cat1} height={112} width={206} alt="category-list" />
      </div>
      <h4 className="mb-0">Eyeglasses</h4>
    </div>
  );
};

export default CategoryCard;
