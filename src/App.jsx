import { useState } from 'react'
import TipitoCard from '/src/components/TipitoCard'
import Redes from '/src/components/Redes'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div class="bg-black p-10 rounded-md shadow-2xl">  
        <h1 class="text-lg pb-5 font-bold">Tipito Enojado</h1>
        <TipitoCard/>
        <Redes/>
      </div>
    </>
  )
}

export default App
