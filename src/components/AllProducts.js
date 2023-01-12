import { useState, useEffect } from 'react'
import Product from "./Product";

import "../styles/allproducts.css";

const AllProducts = ({ products, query }) => {

  const [data, setData] = useState([]);

  // Add default value on page load
  useEffect(() => {
    setData(products);
  }, [products]);

  const filteredList = query ? data.filter((item) => item.category === query) : data;

  return (
    <div className="allproducts">
      {filteredList.map((product, index) => (
        <Product {...product} key={index} />
      ))}
    </div>
  );
};
export default AllProducts;
