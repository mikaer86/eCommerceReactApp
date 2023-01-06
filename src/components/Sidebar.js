import { useState, useEffect } from 'react'
import CategoryProducts from "./CategoryProducts"
import "../styles/sidebar.css"
import "../styles/fonts.css"

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
      <CategoryProducts  />
    </div>
  )
}

export default Sidebar
