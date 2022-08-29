import { useState, useEffect } from 'react'
import reactStringReplace from 'react-string-replace';
import axios from 'axios'
import './styles/app.css'

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

  const handleChange = (e) => setFindCountry(e.target.value)
  const handleSubmit = (e) => {
    e.preventDefault()
    setFindCountry('')
  }
  
  const findCountriesMatches = (countries) => {

    const matchCountry = (arrCountry) => {
      return  (
        arrCountry.filter(({name}) => {
          const commonName = (name.common).toLowerCase()
          const officialName = (name.official).toLowerCase()
          const regex = new RegExp (findCountry.toLowerCase(), 'gi')
    
          return (commonName.match(regex) || officialName.match(regex))
        })
      )
    }

    const displayMatches = (arrFilter) => {
      
      const highlightMatch = (string) => {
        return (
          <>
            {
              reactStringReplace(string, findCountry, (macth, i) => {
                return <span key={i} className='hl'>{macth}</span>
              })
            }
          </>
        )
      }

      const importantInfo = ({name}) => {
        return (
          <p>
            {highlightMatch(name.common)}
            <br></br>
            <strong>Official Name: </strong> {highlightMatch(name.official)}
          </p>
        )
      }

      const allInfo = ({name, capital, population, languages, flag}) => {
        let arrLanguages = []
        
        for(let language in languages){
          arrLanguages.push(languages[language])
        }

        return (
          <div>
            <h1>{name.common}</h1>
            <p><strong>Capital: </strong>{capital}</p>
            <p><strong>Population: </strong> {population}</p>
            <h2>Languages</h2>
            <ul>
              {arrLanguages.map(language => <li>{language}</li>)}
            </ul>
            <p className='emoji'>
              {flag}
            </p>
          </div>
        )
      }

      /* 
        TODO: Cada 10 resultados crear un array con esos resultados
        TODO: Crear botones para retroceder o avanzar entre esos resultados
        TODO: Crear boton para ver informacion detallado del pais seleccionado
        TODO: Refactorizar codigo
      */

      if (arrFilter.length > 10) {
        arrFilter = arrFilter.filter((val, index) => index < 10)
      }

      return (
        arrFilter.map((country) => {
          return (
            <>
              {
                (arrFilter.length === 1)
                  ? allInfo(country)
                  : importantInfo(country)
              }  
            </>
          )
        })
      )
    }

    const listMatchCountry = matchCountry(countries)
    return (
      <>
        {displayMatches(listMatchCountry)}
      </>
    )
  }

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