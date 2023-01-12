import Checkbox from './Checkbox'
import "../styles/categories.css"

const CategoryProducts = ({ onQuery }) => {

  return (
    <div className="wrapper">
      <h4>Categories</h4>
      <label>
        {<Checkbox value="electronics" onQuery={onQuery} />}
        Electronics</label>
      <label>
        <Checkbox value="sports" onQuery={onQuery} />
        Sport Equipments</label>
      <label>
        <Checkbox value="furniture" onQuery={onQuery} />
        Furniture</label>
      <label>
        <Checkbox value="food" onQuery={onQuery} />
        Food & Grossery</label>
    </div>
  )
}

export default CategoryProducts
