import { useState } from 'react'
import './App.css'

function App() {
  const [contador, setContador] = useState(0);
  let mostrar = false;
  const mensagem = "Você conseguiu!";

  if(contador === 19) {
    mostrar = true;
  }
  else{
    mostrar = false;
  }


  return (
    <>
      <div className="card">
        <h2>O valor está em {contador}</h2>
      
        <button onClick={() => setContador((contador) => contador + 3)}>
          Somar 3
        </button>
        <button onClick={() => setContador((contador) => contador -2)}>
          Diminuir 2
        </button>

        {mostrar && <h1>{mensagem}</h1>}
      </div>
    </>
  )
}

export default App
