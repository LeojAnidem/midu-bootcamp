import { HighlightMatch } from "./HighlightMatch";
import '../styles/importantInfo.css'

export const ImportantInfo = ({name, matchString}) => {
  return (
    <p className="short-result-bg">
      <HighlightMatch string={name.common} matchString={matchString} /><br></br>

      <span className="short-result__title">Official Name: </span> 
      <HighlightMatch string={name.official} matchString={matchString} />
    </p>
  )
}