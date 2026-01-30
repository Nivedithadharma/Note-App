import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

function App() {
  const [count, setCount] = useState(0)
  let arr=[1,2,3,4,5]

  return (
    <div className='gap-2 flex flex-row'>
      {
       arr.map((item,index)=>{
        return <div key={index} className='h-50 w-50 bg-red-500 m-2'>{item}</div>
       })
      }
    </div>


  )
}

export default App
