import { useState } from "react";
import "./App.css";
import Navigation from "./components/Navigation";
import Sidebar from "./components/Sidebar";
import AllProducts from "./components/AllProducts";
import useFetchData from "./hooks/useFetchData";

function App() {
  const [query, setQuery] = useState("");

  let url = "./store.json";
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
      <>
        <Navigation />
        <div className="App">
          <div className="mainContentWrapper">
            <Sidebar products={products} onQuery={setQuery} />

            <AllProducts products={products} query={query} />
          </div>
        </div>
      </>
    );
  }
}

export default App;
