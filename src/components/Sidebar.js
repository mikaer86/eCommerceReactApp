import { useState, useEffect } from 'react'
import CategoryProducts from "./CategoryProducts"
import CategoryPrice from "./CategoryPrice"
import CategorySize from "./CategorySize"
import "../styles/sidebar.css"


const Sidebar = () => {
  const [data, setData] = useState()
  useEffect(() => {
    fetch('./Products.json')
      .then((response) => {
        return response.json
      })
      .then((data) => setData(data))
      .catch((error) => console.log(error))
  }, [data])

  return (
    <div className="Sidebar-Container">

      <CategoryProducts/>
      <CategoryPrice />
      <CategorySize />
    </div>
  )
}

export default Sidebar
