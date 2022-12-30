import '../assets/styles/checkbox.css'
export const Checkbox = ({ label }) => {
  return (
    <div>
      <label>
        <input type="checkbox" />
        <span>{label}</span>
      </label>
    </div>
  )
}

export default Checkbox
