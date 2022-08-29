import { HighlightMatch } from "./HighlightMatch";

export const ImportantInfo = ({name, matchString}) => {
  return (
    <p>
      <HighlightMatch string={name.common} matchString={matchString} /><br></br>
      <strong>Official Name: </strong> <HighlightMatch string={name.official} matchString={matchString} />
    </p>
  )
}