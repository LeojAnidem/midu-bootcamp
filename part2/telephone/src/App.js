import { useState, useEffect } from 'react'
import axios from 'axios'
import { DisplayMatches } from './modules/DisplayMatches'
import './styles/app.css'

//////////////////////////////////////////////////////////////////

export const App = () => {
  const [countries, setCountries] = useState([])
  const [findCountry, setFindCountry] = useState('')
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)
    axios.get('https://restcountries.com/v3.1/all')
      .then((res) => {
        const {data} = res
        setCountries(data)
        setLoading(false)
      })
  }, [])

  //////////////////////////////////////////////////////////////////

  const handleChange = (e) => setFindCountry(e.target.value)
  
  const handleSubmit = (e) => {
    e.preventDefault()
    setFindCountry('')
  }
  
  const findCountriesMatches = (countries) => {

    const match = (arr, matchString) => {
      return  (
        arr.filter(({name}) => {
          const commonName = (name.common).toLowerCase()
          const officialName = (name.official).toLowerCase()
          const regex = new RegExp (matchString.toLowerCase(), 'gi')
    
          return (commonName.match(regex) || officialName.match(regex))
        })
      )
    }

    const listMatch = match(countries, findCountry)
    return <DisplayMatches arr={listMatch} matchString={findCountry} />
  }

  /////////////////////////////////////////////////////////////////

  if (loading) return <h1>Cargando...</h1>

  return (
    <form onSubmit={handleSubmit}>
      <span>find countries: </span>
      <input type='text' onChange={handleChange} value={findCountry} />
      {
        findCountry !== '' 
          ? findCountriesMatches(countries)
          : <p>Ingrese una letra para comenzar su busqueda!</p>
      }
    </form>  
  );
}