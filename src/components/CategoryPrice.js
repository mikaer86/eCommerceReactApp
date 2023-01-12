import { useState } from "react"
import Checkbox from "./Checkbox"
import "../styles/categories.css"

const CategoryPrice = () => {

  const [checked, setCheck] = useState()


  const handleCheck = (value) => {
    setCheck(checked.value)
  }
  return (
    <div className="wrapper">
      <h4>Price</h4>
      <label htmlFor="All">
        <Checkbox onChange={() => handleCheck()} />
        All</label>
      <label htmlFor="0$-99$">
        <Checkbox onChange={() => handleCheck()} />
        0$-99$</label>
      <label htmlFor="100$-999$">
        <Checkbox onChange={() => handleCheck()} />
        100$-999$</label>
      <label htmlFor="1000$-1999$">
        <Checkbox onChange={() => handleCheck()} />
        1000$-1999$</label>
      <label htmlFor=" 2000$-2999$">
        <Checkbox onChange={() => handleCheck()} />
        2000$-2999$</label>

      <h5>Price Range</h5>
      <input className="rangePrice" type="range" />


    </div>
  )
}


export default CategoryPrice