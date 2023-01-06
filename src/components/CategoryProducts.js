import { useState } from 'react'
import Checkbox from './Checkbox'
import "../styles/fonts.css"

const CategoryProducts = () => {
  const [checked, setCheck] = useState()

  const handleCheck = (value) => {
    setCheck(checked.value)
  }

  return (
    <div>
      <h4>Categories</h4>
      <Checkbox onChange={() => handleCheck()}  />
      <Checkbox onChange={() => handleCheck()}  />
      <Checkbox onChange={() => handleCheck()}  />
      <Checkbox onChange={() => handleCheck()}  />
    </div>
  )
}

export default CategoryProducts
