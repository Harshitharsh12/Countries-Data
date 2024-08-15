import { Link } from "react-router-dom";
const CountryDetail = ({ countryData }) => {
  return (
    <div>
      <main>
        <div className="country-details-container">
          <span className="back-button" onClick={() => history.back()}>
            <i className="fa-solid fa-arrow-left"></i>&nbsp; Back
          </span>
          <div className="country-details">
            <img src={countryData.flag} alt={`${countryData.name} flag`} />
            <div className="details-text-container">
              <h1>{countryData.name}</h1>
              <div className="details-text">
                <p>
                  <b>Native Name:{countryData.nativeName} </b>
                  <span className="native-name"></span>
                </p>
                <p>
                  <b>
                    Population:{countryData.population.toLocaleString("en-IN")}{" "}
                  </b>
                  <span className="population"></span>
                </p>
                <p>
                  <b>Region:{countryData.region}</b>
                  <span className="region"></span>
                </p>
                <p>
                  <b>Sub Region:{countryData.subRegion} </b>
                  <span className="sub-region"></span>
                </p>
                <p>
                  <b>Capital:{countryData.capital.join(" ,")} </b>
                  <span className="capital"></span>
                </p>
                <p>
                  <b>Top Level Domain:{countryData.tld} </b>
                  <span className="top-level-domain"></span>
                </p>
                <p>
                  <b>Currencies:{countryData.currencies} </b>
                  <span className="currencies"></span>
                </p>
                <p>
                  <b>Languages:{countryData.languages} </b>
                  <span className="languages"></span>
                </p>
              </div>
              {countryData.borders.length === 0 ? (
                <div className="border-countries">
                  {" "}
                  <b>
                    Border Countries: No Border Country around{" "}
                    {countryData.nativeName}
                  </b>
                </div>
              ) : (
                <div className="border-countries">
                  <b>Border Countries:</b>&nbsp;
                  {countryData.borders.map((border) => (
                    <Link key={border} to={`/${border}`}>
                      {border}
                    </Link>
                  ))}{" "}
                </div>
              )}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default CountryDetail;
