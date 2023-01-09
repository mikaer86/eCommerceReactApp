//import { DashboardPrice } from '../DashboardPrice'
import { useEffect, useState } from "react";
import "./App.css";
import AllProducts from "./components/AllProducts";

function App() {
  const [storeData, setStoreData] = useState();
  useEffect(() => {
    fetch("/store.json")
      .then((response) => response.json())
      .then((data) => setStoreData(data));
  }, []);
  if (!storeData) {
    return <h1>Loading...</h1>;
  }
  return (
    <div className="App">
      <h1>Welcome to E-Shop</h1>
      <AllProducts products={storeData.products} />
    </div>
  );
}

export default App;
