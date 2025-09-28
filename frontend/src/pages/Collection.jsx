import React, { useContext, useEffect, useState } from "react";
import Search from "../components/Search";
import { ShopContext } from "../context/ShopContext";

const Collection = () => {
  const { products, search } = useContext(ShopContext);
  const [categories, setCategories] = useState([]);
  const [sortType, setSortType] = useState("relevant");
  const [filteredProduct, setFilteredProduct] = useState(second);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  const toggleFilter = (value, setState) => {
    setState((prev) =>
      prev.includes(value)
        ? prev.filter((item) => item !== value)
        : [...prev, value]
    );
  };

  const applyFilter = () => {
    let filtered = [...products];
    if (search) {
      filtered = filtered.filter((product) =>
        product.name.toLowerCase().includes(search.toLowerCase())
      );
    }
    if (categories.length) {
      filtered = filtered.filter((product) => {
        categories.includes(product.categories);
      });
    }
    return filtered;
  };

  const applySorting = (productList) => {
    switch (sortType) {
      case "low":
        return productList.sort((a, b) => a.price - b.price);
      case "high":
        return productList.sort((a, b) => b.price - a.price);
      default:
        return productList;
    }
  };

  useEffect(() => {
    let filtered = applyFilter();
    let sorted = applySorting(filtered);
    setFilteredProduct(sorted);
    setCurrentPage(1); // Restet to the first page when filters change
  }, [categories, sortType, products, search]);

  const getPagintedProduct = () => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    return filteredProduct.slice(startIndex, endIndex);
  };

  const totalpage = Math.ceil(filteredProduct.length / itemsPerPage)
  
 
  return (
    <div className="max-padd-container !px-0">
      <div className="flex flex-col sm:flex-row gap-8 mb-16">
        {/* Filter option */}
        <div className="min-w-72 bg-primary p-4 mt-8 pl-6 lg:pl-12">
          <Search />
          <div className="pl-5 py-3 mt-4 bg-white rounded-xl">
            <h5 className="h5 mb-4">Categories</h5>
            <div className="flex flex-col gap-2 text-sm font-light">
              {[
                "Headphones",
                "Cameras",
                "Mobiles",
                "Speakers",
                "Mouse",
                "Watches",
              ].map((cat) => (
                <label key={cat} className="flex gap-2 medium-14 text-gray-30">
                  <input
                  onChange={(e) => toggleFilter(e.target.value, setCategories)}
                  type="checkbox" value={cat} className="w-3" />
                  {cat}
                </label>
              ))}
            </div>
          </div>
          <div className="">
            <h5>Sort By</h5>
            <select>
              <option value="relevant">Relevant</option>
              <option value="low">Low</option>
              <option value="high">High</option>
            </select>
          </div>
        </div>
        {/* Right Side */}
        <div className="">
          <div className="">{"productss"}</div>
        </div>
      </div>
    </div>
  );
};

export default Collection;
