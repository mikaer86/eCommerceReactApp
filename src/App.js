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
      <h1>Hello world!!!</h1>
      <AllProducts products={storeData.products} />
      {/* {storeData.products.map((product) => (
        <p>{product.productname}</p>
      ))} */}
    </div>
  );
}

export default App;
