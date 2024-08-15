import { Link } from "react-router-dom";

const CountryCard = ({ name, flag, population, region, capital ,data}) => {
  return (
    // <a className="country-card" href={`/country?name=${name}`}>
    // or
    // <Link className="country-card"  to={`/country?name=${name}`}>
    <Link className="country-card" to={`/${name}`} state={data} >
    <div className="card-text country-card">
      <img src={flag} alt={name + "Flag"} />
        <h3 className="card-title">{name}</h3>
        <p>
          <b>Population: </b>
          {population.toLocaleString("en-IN")} 
        </p>
        <p>
          <b>Region: </b>
          {region}
        </p>
        <p>
          <b>Capital: </b>
          {capital}
        </p>
      </div>
     </Link> 
  );
};

export default CountryCard
