// import { useState, useEffect } from 'react'
import CategoryProducts from "./CategoryProducts"
import CategoryPrice from "./CategoryPrice"
import CategorySize from "./CategorySize"
import CategoryColors from "./CategoryColors"
import "../styles/sidebar.css"


const Sidebar = ({ products, onQuery }) => {


  return (
    <div className="Sidebar-Container">

      <CategoryProducts products={products} onQuery={onQuery} />
      <CategoryPrice />
      <CategorySize />
      <CategoryColors />

    </div>
  )
}

export default Sidebar
