import '../styles/allInfo.css'

export const AllInfo = ({name, capital, population, languages, flag}) => {
  let arrLanguages = []
  
  for(let language in languages){
    arrLanguages.push(languages[language])
  }

  return (
    <div className="allInfo-box">
      <div className="allInfo__content">
        <h1 className="allInfo__title">{name.common}</h1>
        <p >
          <strong>Capital: </strong>
          {capital}
        </p>
        <p>
          <strong>Population: </strong>
          {population}
        </p>

        <h2 className="allInfo__subTitle">Languages</h2>
        <ul className="allInfo__list">
          {arrLanguages.map(language => <li className="allInfo__item" key={Math.random(1000)}>{language}</li>)}
        </ul>
      </div>
      
      <div className="allInfo__content">
        <p className='emoji'>
          {flag}
        </p>
      </div>
    </div>
  )
}