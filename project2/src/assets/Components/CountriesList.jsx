// import CountriesData from "../CountriesData";
import { useEffect, useState } from "react";
import CountryCard from "./CountryCard";
import CountriesListShimmer from "./CountriesListShimmer";
const CountriesList = ({ query }) => {
  const [countriesData, setCountriesData] = useState([]);
  // const [count,setCount]=useState(0)
  // useEffect(()=>{
  // fetch('https://restcountries.com/v3.1/all')
  // .then((res)=>res.json())
  // .then((data)=>{
  //   setCountriesData(data)
  // })
  // },[])

  // useEffect(()=>{
  // console.log("hi")
  // },[count])

  // or

  // useEffect(()=>{
  //   console.log("hi")
  // },[count,countriesData])

  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then((res) => res.json())
      .then((data) => {
        setCountriesData(data);
      });
    const intervalId = setInterval(() => {
      console.log("Running CountriesList Component");
    }, 1000);
    return () => {
      clearInterval(intervalId);
      console.log("CLEANING UP!!");
    };
  }, []);

  // console.log(CountriesData)
  return (
    // <.>
    // <h1>{count}</h1>
    // <button onClick={()=>{
    // setCount(count+1)
    // }}>Increase Count</button>

    !countriesData.length ? (
      <CountriesListShimmer />
    ) : (
      <div className="countries-container">
        {countriesData
          .filter(
            (country) =>
              country.name.common.toLowerCase().includes(query) ||
              country.region.toLowerCase().includes(query)
          )
          .map((country) => {
            return (
              <CountryCard
                key={country.name.common}
                name={country.name.common}
                flag={country.flags.svg}
                population={country.population}
                region={country.region}
                capital={country.capital?.[0]}
                data={country}
              />
            );
          })}
      </div>
    )
  );
};
export default CountriesList;
