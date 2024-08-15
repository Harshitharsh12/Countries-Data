import { useEffect, useState } from "react";
import SearchBar from "./SearchBar";
import SelectMenu from "./SelectMenu";
import CountriesList from "./CountriesList";
import "./App.css";
const Home = () => {
  const [query, setQuery] = useState("");
  
  return (
    <main>
      <div className="search-filter-container">
        <SearchBar setQuery={setQuery} />
        <SelectMenu setQuery={setQuery} />
      </div>
   
      {query === "unmount" ? "" : <CountriesList query={query} />}
    </main>
  );
};

export default Home;
