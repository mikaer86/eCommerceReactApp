import { useState } from 'react'
import Checkbox from './Checkbox'
import "../styles/categories.css"



const CategoryProducts = () => {
  const [checked, setCheck] = useState()

  const handleCheck = (value) => {
    setCheck(checked.value)
  }

  return (
    <div className="wrapper">
      <h4>Categories</h4>
      <label>
      <Checkbox onChange={() => handleCheck()} />
      Electronics</label>
      <label> 
      <Checkbox onChange={() => handleCheck()}  /> 
      Sport Equipments</label>
      <label>
      <Checkbox onChange={() => handleCheck()}  />
     Furniture</label>
     <label>
      <Checkbox onChange={() => handleCheck()}  />  
      Software Solutions</label>
      <label>
      <Checkbox onChange={() => handleCheck()}  />  
      Food & Grossery</label>

      
    </div>
  )
}

export default CategoryProducts
