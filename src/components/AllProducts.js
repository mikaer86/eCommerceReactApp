import Product from "./Product";
import "../styles/allproducts.css";

const AllProducts = ({ products }) => {
  return (
    <div className="allproducts">
      {products.map((product) => (
        <Product product={product} key={product.id} />
      ))}
    </div>
  );
};
export default AllProducts;
