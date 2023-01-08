import "../styles/categories.css"
const CategoryColors = () => {

    return (
        <div>
            <h4>Colors</h4>
            <input className="colorsBtn" type="radio"  id="black" />
            <input className="colorsBtn" type="radio"  id="blue" />
            <input className="colorsBtn" type="radio"  id="red" />
            <input className="colorsBtn" type="radio"  id="green" />

        </div>
    )
}


export default CategoryColors