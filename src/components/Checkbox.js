import { useState } from "react";
import "../styles/checkbox.css";

const Checkbox = ({ onQuery, value }) => {
  const [isChecked, setIsChecked] = useState(false)

  const checkHandler = (e) => {
    setIsChecked(!isChecked)
    onQuery(!isChecked ? e.target.value : "");
  }
  return (
    <div>
      <label className="labelCheckbox">
        <input type="checkbox" id="checkbox" value={value} checked={isChecked} onChange={checkHandler} />

      </label>
    </div>
  );
};

export default Checkbox;
