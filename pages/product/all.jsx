import { useState } from "react";
import { Breadcrumb2 } from "../../component/common/breadcrumb";
import ProductCard from "../../component/common/productCard";
import MainFilter from "../../component/main-filter";
import { BsArrowDown, BsArrowUp } from "react-icons/bs";

const ProductListPage = () => {
  const [sort, setSort] = useState(true);
  return (
    <>
      <Breadcrumb2 category="Search Result" />
      <section className="product-all-list">
        <div className="container">
          <div className="row justify-content-between">
            <div className="col-2">
              <form action="">
                <MainFilter />
              </form>
            </div>
            <div className="col-9">
              <div className="ordering-header mb-5">
                <h4 className="mb-0">
                  Search result for : "<span> blue cut</span>"
                </h4>
                <form action="">
                  <div className="ms-4 d-flex align-items-center">
                    <p className="mb-0 me-3">Short by : </p>
                    <select name="" id="" className="form-select">
                      <option value="">Most Viewed</option>
                      <option value="">Ascending Price</option>
                    </select>
                    <div className="ms-3">
                      {sort ? (
                        <>
                          <input
                            type="radio"
                            className="d-none"
                            name="sort"
                            id="asc_order"
                          />
                          <label
                            htmlFor="asc_order"
                            onClick={() => setSort(!sort)}
                          >
                            <BsArrowDown />
                          </label>
                        </>
                      ) : (
                        <>
                          <input
                            type="radio"
                            className="d-none"
                            name="sort"
                            id="des_order"
                          />
                          <label
                            htmlFor="des_order"
                            onClick={() => setSort(!sort)}
                          >
                            <BsArrowUp />
                          </label>
                        </>
                      )}
                    </div>
                  </div>
                </form>
              </div>
              <div className="row">
                <div className="col-4 mb-5">
                  <ProductCard />
                </div>
                <div className="col-4 mb-5">
                  <ProductCard />
                </div>
                <div className="col-4 mb-5">
                  <ProductCard />
                </div>
                <div className="col-4 mb-5">
                  <ProductCard />
                </div>
                <div className="col-4 mb-5">
                  <ProductCard />
                </div>
                <div className="col-4 mb-5">
                  <ProductCard />
                </div>
                <div className="col-4 mb-5">
                  <ProductCard />
                </div>
                <div className="col-4 mb-5">
                  <ProductCard />
                </div>
              </div>
              <button className="btn view-more-btn mx-auto mt-4">
                Load More
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ProductListPage;
