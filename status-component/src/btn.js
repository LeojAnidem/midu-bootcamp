import ReactDOM from 'react-dom/client';
import { useState } from 'react';

const root = ReactDOM.createRoot(document.getElementById('root'));

const App = () => {
  const [state, setState] = useState(0)
  
  const handleClick = (isIncrement) => { 
    isIncrement ? setState(state + 1) : setState(state - 1) 
  }
  
  const handleClickReset = () => setState(0),
        msgPair = state % 2 === 0 ? 'Es Par' : 'Es Impar'

  return (
    <div>
      <h1>{state}</h1>
      <p>{msgPair}</p>
      <button onClick={() => handleClick(true)}>Incrementar</button>
      <button onClick={() => handleClick(false)}>Decrementar</button>
      <button onClick={handleClickReset}>Reset</button>
    </div>
  )
}


root.render(
    <App />
);
