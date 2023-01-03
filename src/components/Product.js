import "../styles/product.css";
const Product = ({ product }) => {
  return (
    <div className="product">
      <p> {product.productname}</p>
      <p>{product.price}</p>
    </div>
  );
};
export default Product;
