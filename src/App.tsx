import { useState } from 'react'
import './App.css'

function App() {
  const [contador, setContador] = useState(0);
  const mensagemSucesso = "Você conseguiu!";
  const mensagemErro = "Tente mais um pouco!";

  return (
    <>
      <div className="card">
        <h2>O valor está em {contador}</h2>
      
        <button onClick={() => setContador(contador + 3)}>
          Somar 3
        </button>
        <button onClick={() => setContador(contador - 2)}>
          Diminuir 2
        </button>

      
        {contador===19? <h1>{mensagemSucesso}</h1> : <h1>{mensagemErro}</h1>}
      </div>
    </>
  )
}

export default App
