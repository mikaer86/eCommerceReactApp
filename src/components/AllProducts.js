import Product from "./Product";
import "../styles/allproducts.css";

const AllProducts = ({ products }) => {
  return (
    <div className="allproducts">
      {products.map((p) => (
        <Product product={p} key={p.id} />
      ))}
    </div>
  );
};
export default AllProducts;
