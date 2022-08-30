import { AllInfo } from "./AllInfo"
import { ImportantInfo } from "./ImportantInfo"

const addPages = (arr, pagesResult) => {
  const deleteFirst10 = (arr, canDeleteAll = false) => {
    const num = canDeleteAll ? arr.length : 10
    for(let i=0; i < num; i++) {arr.shift()}
  }
  
  let copyArr = [],
      result = []
  
  if (arr.length > 0) {
    copyArr = [...arr]
    result = copyArr.filter((val, index) => index < 10)
    pagesResult = [...pagesResult, [result]]
  }

  if (copyArr.length > 0) {

    (copyArr.length > 10) 
      ? deleteFirst10(copyArr)
      : deleteFirst10(copyArr, true)

    return addPages(copyArr, pagesResult)
  }

  return pagesResult
}

export const DisplayMatches = ({arr, matchString}) => {

  /* 
    TODO: Cada 10 resultados crear un array con esos resultados ✅
    TODO: Crear botones para retroceder o avanzar entre esos resultados
    TODO: Crear boton para ver informacion detallado del pais seleccionado
    TODO: Refactorizar codigo ✅
  */
  
  if (arr.length > 10) arr = arr.filter((val, index) => index < 10)

  // let pagesOfResults = []
  // pagesOfResults = addPages(arr, pagesOfResults)
  // console.log(pagesOfResults, pagesOfResults[0], pagesOfResults[0][0])

  return (
    <>
      {
        (arr.length === 1) 
          // ? <AllInfo {...pagesOfResults[0][0][0]} />
          ? <AllInfo {...arr[0]} />
          : 
            (
              // pagesOfResults[0][0].map(({name}) => 
              arr.length !== 0
                ? (
                  arr.map(({name}) => 
                    <ImportantInfo key={Math.random(1000)} name={name} matchString={matchString} />
                  )
                )
                : <h2>No Found</h2>
            )
      }
    </>
  )
}