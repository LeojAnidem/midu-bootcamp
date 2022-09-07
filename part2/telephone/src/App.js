import { useState, useEffect } from 'react'
import axios from 'axios'
import { Matches } from './components/Matches'
import { GitHubLink } from './components/GitHubLink'
import { SearchInput } from './components/SearchInput'
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
  
  const handleSubmit = (e) => {
    e.preventDefault()
    setFindCountry('')
  }

  /////////////////////////////////////////////////////////////////

  if (loading) return <h1>Cargando...</h1>

  return (
    <>
      <GitHubLink />

      <form onSubmit={handleSubmit}>
        <SearchInput 
          changer={setFindCountry} 
          placeholder={'Write country name...'}
          val={findCountry} 
        />
      </form>
      {
        findCountry !== '' 
          ? <Matches arr={countries} matchString={findCountry}/>
          : <p>Ingrese una letra para comenzar su busqueda!</p>
      }
    </>
  );
}