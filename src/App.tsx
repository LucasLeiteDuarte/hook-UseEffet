import './styles/global.css'

import { useState } from 'react'

export function App() {
  const [list, setListe] = useState<string[]>([])

  function addToListe() {
    setListe(state => [...state, "Novo item"])
  }
  return(
   
      <div className='inline-flex items-center'>
        <ul>
          {list.map(item => <li  className="flex py-4 first:pt-0 last:pb-0">{item}</li>)}
        </ul>

        <button className='  bg-sky-700 h-12 w-32 text-justify-center text-cyan-100' type='button' onClick={addToListe}>Add to list</button>
      </div>
    
  )

  
}

