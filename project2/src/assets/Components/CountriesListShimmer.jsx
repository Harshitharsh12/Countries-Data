import './CountriesListShimmer.css'
const CountriesListShimmer = () => {
  return (
    <div className="countries-container">
     
{Array.from({length:15}).map((el,i)=>{
    return <div className=" shimmer-card country-card" key={i}></div>
  })    }
    </div>
  )
}

export default CountriesListShimmer
