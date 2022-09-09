import { AllInfo } from "./AllInfo"
import { ImportantInfo } from "./ImportantInfo"
import '../styles/matches.css'

/* 
  TODO: Cada 10 resultados crear un array con esos resultados ✅
  TODO: Crear botones para retroceder o avanzar entre esos resultados
  TODO: Crear boton para ver informacion detallado del pais seleccionado
  TODO: Refactorizar codigo ✅
*/

// const addPages = (arr, pagesResult = []) => { 
  
//   const deleteFirst10 = (arr, canDeleteAll = false) => {
//     const num = canDeleteAll ? arr.length : 10
//     for(let i=0; i < num; i++) {arr.shift()}
//   }
  
//   let result = [],
//       copyArr = []

//   if (arr.length > 0) {
//     copyArr = [...arr]
//     result = copyArr.filter((val, index) => index < 10)

//     arr.length > 10
//       ? deleteFirst10(copyArr)
//       : deleteFirst10(copyArr, true)

//     pagesResult = [...pagesResult, result, ...addPages(copyArr)] || []
//   }

//   return pagesResult
// }

export const Matches = ({arr, matchString, changer}) => {

  const match = (arr, matchString) => {
    return  (
      arr.filter(({name}) => {
        const commonName = (name.common).toLowerCase()
        const regex = new RegExp (matchString.toLowerCase(), 'gi')
        return (commonName.match(regex))
      })
    )
  }

  let listMatch = match(arr, matchString)

  return (
    (listMatch.length === 1) 
      ? <AllInfo {...listMatch[0]} />
      : <ImportantInfo 
          arr={listMatch}
          matchString={matchString}
          changer={changer}
        />
  )
}