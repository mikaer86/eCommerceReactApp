//import { DashboardPrice } from '../DashboardPrice'
import { useEffect, useState } from "react";
import "./App.css";
import AllProducts from "./components/AllProducts";
import Navigation from "./components/Navigation"
import mainContent from "./components/mainContent"

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
      <Navigation/>
      <div className="mainContentWrapper">

        <Sidebar/>
        <mainContent/>
      </div>

      <AllProducts products={storeData.products} />
    </div>
  );
}

export default App;
