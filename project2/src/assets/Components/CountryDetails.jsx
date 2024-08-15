import { useEffect, useState } from "react"
import './Country.css'
import CountryDetail from "./CountryDetail"
import { useLocation, useParams } from "react-router-dom"
import CountryDetailsShimmer from "./CountryDetailsShimmer"
const CountryDetails = () => {
  const params=useParams()
  const countryName=params.country
    const [countryData,setCountryData]=useState(null)
    const [notFound,setNotFound]=useState(false)
    function updateCountryData(data){
      setCountryData({
        name:data[0].name.common,
        nativeName:Object.values(data[0].name.nativeName)[0].common,
        population:data[0].population,
        region:data[0].region,
        subRegion:data[0].subregion,
        capital:data[0].capital,
        tld:data[0].tld,
        currencies:Object.values(data[0].currencies).map((currency)=>
          currency.name).join(','),
          languages:Object.values(data[0].languages).join(','),
          flag:data[0].flags.svg,
          borders:[]
    
      })
      if(!data[0].borders){
        data[0].borders=[]
      }
      data[0].borders.map((border)=>{
fetch(`https://restcountries.com/v3.1/alpha/${border}`)
.then((res)=>res.json())
.then((borderCountry)=>{
setCountryData((prevState)=>({...prevState,borders:[...prevState.borders,borderCountry[0].name.common]}))  

})
      })
    }
    useEffect(()=>{
      fetch(`https://restcountries.com/v3.1/name/${countryName}?fullText=true`)
      .then((res)=>res.json())
      .then((data)=>{
       updateCountryData(data)
      }).catch(error=>{
setNotFound(true)
      })
    },[countryName])
    if(notFound){
      return <div>Country Not Found</div>
    }
 return (
 
    countryData===null?<CountryDetailsShimmer/>: <CountryDetail countryData={countryData}/>
  
  )

}

export default CountryDetails
