import ReactDOM from 'react-dom/client';
import { useState } from 'react';

const root = ReactDOM.createRoot(document.getElementById('root'));

const Button = ({nameBtn, arr, callBack, isText = true}) => {
  const total = isText 
    ? (arr.filter(e => e === nameBtn[0].toUpperCase()).length) 
    : null

  return (
    <div>
      { isText ? (<span>{total}</span>) : null}
      <button onClick={() => callBack(nameBtn)}>
        {nameBtn.toLowerCase()}
      </button>
    </div>
  )
}

const WarningNotUsed = () => <h1>Todavia no se ha usado el contenedor</h1>
const ListOfClicks = ({clicks}) => {
  return (
    <div>
      <span>Clicks Totales: {clicks.length}</span>
      <br></br>
      <span>{clicks.join(', ')}</span>
    </div>
  )
}

const App = () => {
  const [clicks, setClicks] = useState([])

  const handleClick = (nameComponent) => {
    setClicks(prevClicks => ([...prevClicks, nameComponent[0].toUpperCase()]))
  }

  return (
    <div>
      <Button nameBtn={'left'} arr={clicks} callBack={handleClick} />
      <Button nameBtn={'right'} arr={clicks} callBack={handleClick} />
      <Button nameBtn={'bueno'} arr={clicks} callBack={handleClick} />
      <Button nameBtn={'reset'} arr={clicks} isText={false} callBack={() => setClicks([])} />
      {
        clicks.length === 0
          ? <WarningNotUsed />
          : <ListOfClicks clicks={clicks} />
      }
    </div>
  )
}

root.render(
    <App />
);
