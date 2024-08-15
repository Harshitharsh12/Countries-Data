import { useEffect, useState } from "react";
// import Header from './Components/Header'
import SearchBar from "./SearchBar";
import SelectMenu from "./SelectMenu";
// import CountryCard from './Components/CountryCard'
import CountriesList from "./CountriesList";
import "./App.css";
// import useWindowSize from "../Hooks/useWindowSize";
// import { Outlet } from "react-router-dom";
const Home = () => {
  const [query, setQuery] = useState("");
  // const [query2,setQuery2]=useState("")
  // const size=useWindowSize()
  return (
    <main>
      <div className="search-filter-container">
        <SearchBar setQuery={setQuery} />
        <SelectMenu setQuery={setQuery} />
      </div>
      {/* <CountryCard/> */}
      {/* <CountriesList query={query}/> */}
      {/* <h1 style={{textAlign:'center'}}>Window Size:</h1> */}
      {/* <h1 style={{textAlign:'center'}}>Width:{size.width} X Height:{size.height}</h1> */}
      {query === "unmount" ? "" : <CountriesList query={query} />}
      {/* {query2==='unmount'?'':<CountriesList query2={query2}/>} */}
    </main>
  );
};

export default Home;
