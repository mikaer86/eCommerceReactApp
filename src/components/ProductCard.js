import "../styles/productcard.css"
const ProductCard = ({products}) => {
   
    
    return (

        <div className="productCard">
            <img src={products.img}/>
            <p>{products.productname}</p>
            <p>{products.price}</p>
        </div>




    )
}

export default ProductCard