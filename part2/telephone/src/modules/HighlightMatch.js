import reactStringReplace from 'react-string-replace';

export const HighlightMatch = ({string, matchString}) => {
  return (
    <>
      {
        reactStringReplace(string, matchString, (macth, i) => {
          return <span key={i} className='hl'>{macth}</span>
        })
      }
    </>
  )
}