import { useState } from 'react'

const DashboardPrice = () => {
  // control states for check and unchecked boxes for price range
  const [first, setFirst] = useState(true)
  const [second, setSecond] = useState(true)

  return (
    <div>
      <h3>Price</h3>
      <section>
        <input className="checkBox" type="checkbox" placeholder="All" />
        <input
          className="checkBox"
          onChange={() => handleChange()}
          type="checkbox"
          placeholder="0$ - 99$"
        />
        <input className="checkBox" type="checkbox" placeholder="100$ - 999$" />
        <input
          className="checkBox"
          type="checkbox"
          placeholder="1000$ & Above"
        />

        <h4>Price Range</h4>
        <input type="range" min="0" max="99" />
      </section>
    </div>
  )
}

export default DashboardPrice
