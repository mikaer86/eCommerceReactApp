// import { useState, useEffect } from 'react'
import CategoryProducts from "./CategoryProducts"
import CategoryPrice from "./CategoryPrice"
import CategorySize from "./CategorySize"
import CategoryColors from "./CategoryColors"
import "../styles/sidebar.css"


const Sidebar = () => {


  return (
    <div className="Sidebar-Container">
      
      <CategoryProducts/>
      <CategoryPrice/>
      <CategorySize/>
      <CategoryColors/>

    </div>
  )
}

export default Sidebar
