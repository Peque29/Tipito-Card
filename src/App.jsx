import { useState } from 'react'
import TipitoCard from '/src/components/TipitoCard'
import Redes from '/src/components/Redes'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div class="grid justify-items-center h-min ">
        <div class="bg-black rounded-md shadow-2xl grid justify-items-center p-8 mt-20">  
          <h1 class="text-lg pb-5 font-bold">Tipito Enojado</h1>
          <TipitoCard/>
          <Redes/>
        </div>
      </div>
    </>
  )
}

export default App
