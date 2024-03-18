import { useState } from 'react'
import TipitoCard from '/src/components/TipitoCard'
import Redes from '/src/components/Redes'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div class="bg-black rounded-md shadow-2xl grid justify-items-center p-8">  
        <h1 class="text-lg pb-5 font-bold">Tipito Enojado</h1>
        <TipitoCard/>
        <Redes/>
      </div>
    </>
  )
}

export default App
