export const AllInfo = ({name, capital, population, languages, flag}) => {
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
        {arrLanguages.map(language => <li key={Math.random(1000)}>{language}</li>)}
      </ul>
      <p className='emoji'>
        {flag}
      </p>
    </div>
  )
}