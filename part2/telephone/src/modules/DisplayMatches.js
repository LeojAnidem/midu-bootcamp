import { AllInfo } from "./AllInfo"
import { ImportantInfo } from "./ImportantInfo"

export const DisplayMatches = ({arr, matchString}) => {

  /* 
    TODO: Cada 10 resultados crear un array con esos resultados
    TODO: Crear botones para retroceder o avanzar entre esos resultados
    TODO: Crear boton para ver informacion detallado del pais seleccionado
    TODO: Refactorizar codigo ✅
  */

  if (arr.length > 10) {
    arr = arr.filter((val, index) => index < 10)
  }

  return (
    <>
      {
        (arr.length === 1) 
          ? <AllInfo {...arr[0]} />
          : 
            (
              arr.map(({name}) => 
                <ImportantInfo key={Math.random(1000)} name={name} matchString={matchString} />
              )
            )
      }
    </>
  )
}