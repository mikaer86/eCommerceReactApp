import { useState } from 'react'
import Checkbox from './Checkbox'
import "../styles/sidebar.css"



const CategoryProducts = () => {
  const [checked, setCheck] = useState()

  const handleCheck = (value) => {
    setCheck(checked.value)
  }

  return (
    <div className="wrapper">
      <h4>Categories</h4>
      <label for="Electronics">
      <Checkbox onChange={() => handleCheck()}  name="Electronics" />Electronics</label>
      <label for="Sport Equipments">
      <Checkbox onChange={() => handleCheck()}  /> Sport Equipments</label>
      <label for="Furniture">
      <Checkbox onChange={() => handleCheck()}  />Furniture</label>
      <label for="Software Solutions">
      <Checkbox onChange={() => handleCheck()}  />Software Solutions</label>
      <label for="Food & Grossery">
      <Checkbox onChange={() => handleCheck()}  />Food & Grossery</label>
      
    </div>
  )
}

export default CategoryProducts
