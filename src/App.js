import "./App.css";
import { useState, useEffect } from "react";
import Navigation from "./components/Navigation";
import MainContent from "./components/MainContent";
import Sidebar from "./components/Sidebar";
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
      <Navigation />
      <MainContent />
      <div className="mainContentWrapper">
        <Sidebar />
        <AllProducts products={storeData.products} />
      </div>
    </div>
  );
}

export default App;
