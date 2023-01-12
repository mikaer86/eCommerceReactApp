import { useState } from "react"
import "./App.css";
import Navigation from "./components/Navigation";
import MainContent from "./components/MainContent";
import Sidebar from "./components/Sidebar";
import AllProducts from "./components/AllProducts";
import useFetchData from "./hooks/useFetchData";

function App() {
  const [query, setQuery] = useState('');

  let url = "./store.json"
  const { status, data } = useFetchData(url);
  const { products } = data;

  if (status === "idle") {
    <h1>Idling..</h1>;
  }

  if (status === "fetching") {
    <h1>Loading...</h1>;
  }

  if (status === "fetched") {
    return (
      <div className="App">
        <Navigation />
        <MainContent />
        <div className="mainContentWrapper">
          <Sidebar products={products} onQuery={setQuery} />
          <AllProducts products={products} query={query} />
        </div>
      </div>
    );
  }

}

export default App;
