import { AllInfo } from "./AllInfo"
import { ImportantInfo } from "./ImportantInfo"
import '../styles/matches.css'

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

const deleteFirst10 = (arr, canDeleteAll = false) => {
  const num = canDeleteAll ? arr.length : 10
  for(let i=0; i < num; i++) {arr.shift()}
}

const addPages = (arr, pagesResult = []) => { 
  let result = [],
      copyArr = []

  if (arr.length > 0) {
    copyArr = [...arr]
    result = copyArr.filter((val, index) => index < 10)

    arr.length > 10
      ? deleteFirst10(copyArr)
      : deleteFirst10(copyArr, true)

    pagesResult = [...pagesResult, result, ...addPages(copyArr)] || []
  }

  return pagesResult
}

export const Matches = ({arr, matchString}) => {

  /* 
    TODO: Cada 10 resultados crear un array con esos resultados ✅
    TODO: Crear botones para retroceder o avanzar entre esos resultados
    TODO: Crear boton para ver informacion detallado del pais seleccionado
    TODO: Refactorizar codigo ✅
  */
  
    let listMatch = match(arr, matchString)
    let pagesOfResults = addPages(listMatch)
    console.log(`pages: ${pagesOfResults}`)
    
    if (listMatch.length > 10) listMatch = listMatch.filter((val, index) => index < 10)
  
    return (
      <div className="results-bg">
        {
          (listMatch.length === 1) 
            ? <AllInfo {...listMatch[0]} /> // ? <AllInfo {...pagesOfResults[0][0][0]} />
            : (
              listMatch.length !== 0
                ? <div className="results__list">
                    {
                      listMatch.map(({name}) => // pagesOfResults[0][0].map(({name}) => 
                          <ImportantInfo key={Math.random(1000)} name={name} matchString={matchString} />
                      )
                    }
                  </div>
                : <h2>No Found</h2>
            )
        }
      </div>
    )
}