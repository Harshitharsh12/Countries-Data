import './CountriesListShimmer.css'
const CountriesListShimmer = () => {
  return (
    <div className="countries-container">
      {/* <div className=" shimmer-card country-card"></div>
      <div className=" shimmer-card country-card"></div>
      <div className=" shimmer-card country-card"></div>
      <div className=" shimmer-card country-card"></div>
      <div className=" shimmer-card country-card"></div>
      <div className=" shimmer-card country-card"></div>
      <div className=" shimmer-card country-card"></div>
      <div className=" shimmer-card country-card"></div>
      <div className=" shimmer-card country-card"></div>
      <div className=" shimmer-card country-card"></div>
      <div className=" shimmer-card country-card"></div>
      <div className=" shimmer-card country-card"></div>
      <div className=" shimmer-card country-card"></div>
      <div className=" shimmer-card country-card"></div>
      <div className=" shimmer-card country-card"></div> */}
       
       {/* or */}
{Array.from({length:15}).map((el,i)=>{
    return <div className=" shimmer-card country-card" key={i}></div>
  })    }
    </div>
  )
}

export default CountriesListShimmer
