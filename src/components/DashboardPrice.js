import { useState } from 'react'

const DashboardPrice = () => {
  // control states for check and unchecked boxes for price range
  const [check, setCheck] = useState()
  const [range, setRange] = useState()

  return (
    <div>
      <h3>Price</h3>
      <section>
        <input type="checkbox" name="lowRangePrices" />
        <input type="checkbox" name="lowMidRangePrices" />
        <input type="checkbox" name="midRangePrices" />
        <input type="checkbox" name="highRangePrices" />
      </section>

      <h4>Price Range</h4>
      <input type="range" min="0" max="99" />
    </div>
  )
}

export default DashboardPrice
