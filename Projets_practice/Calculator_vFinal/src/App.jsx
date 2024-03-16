import Display from './components/Display'
import ButtonContainer from './components/ButtonContainer'

import './App.css'
import { useState } from 'react'

function App() {

  const [CalVal,setCalVal] = useState('')

  const handleClick = (item) =>{
    if(item === 'C')
    {
      setCalVal('')
    }
    else if(item=== '=')
    {
      const result = eval(CalVal);
      setCalVal(result)
    }
    else
    {
      const newData = CalVal + item
      setCalVal(newData)
    }
  }

  return (
    <>
     <div className="container">
      <Display displayValue = {CalVal}></Display>
      <ButtonContainer handleClick = {handleClick}></ButtonContainer>
     </div>
    </>
  )
}

export default App
