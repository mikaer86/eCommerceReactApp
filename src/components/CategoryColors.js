import "../styles/categories.css"
const CategoryColors = () => {

    return (
        <div>
            <div className="wrapperSize">
            <h4>Colors</h4>
            <input className="colorsBtn" type="radio"  name="color" id="black" />
            <input className="colorsBtn" type="radio" name="color"  id="blue" />
            <input className="colorsBtn" type="radio" name="color" id="red" />
            <input className="colorsBtn" type="radio"  name="color" id="green" />
            </div>

        </div>
    )
}


export default CategoryColors