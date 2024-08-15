import './CountryDetailsShimmer.css'
const CountryDetailsShimmer = () => {
  return (
    <>
    <div className='flex-country'>
  <div className="shimmer-details ">  </div>
 <div>
  <div className='name'></div>
  <div className='shimmer-details-1'>
  {/* <div className='details1'></div>
    <div className='details1'></div>
    <div className='details1'></div>
    <div className='details1'></div>
    <div className='details1'></div>
    <div className='details1'></div>
    <div className='details1'></div>
    <div className='details1'></div>
    <div className='details1'></div> */}
    {/* or */}
    {Array.from({length:11}).map((el,i)=>{
    return <div className="details1" key={i}></div>
  })    }
    </div>
    </div>
  </div>
</>
  )
}

export default CountryDetailsShimmer
