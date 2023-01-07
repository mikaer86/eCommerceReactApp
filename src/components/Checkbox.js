import { useState } from 'react'
import '../styles/checkbox.css'

const Checkbox = () => {
  const [checked, setChecked] = useState([])

  const handleCheck = (e) => {
    setChecked(e.target.value)
  }
  return (
    <div>
      <label className="labelCheckbox">
        <input onChange={() => handleCheck(checked)} type="checkbox" />
      </label>
    </div>
  )
}

export default Checkbox
