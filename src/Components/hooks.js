import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Hook = () => {
  // Declaring new state variable
  const [count, setCount] = useState(0)

  const [password,setPassword]=useState("")

  


  const addOne = () => {
    let value = count + 1
    setCount(value)
  }
  const minusOne = () => {
    let value = count - 1
    setCount(value)
  }
  return (
    <div className='App'>
      <h1>{count} </h1>
      <button onClick={addOne}>Add One</button> 
      <button onClick={minusOne}>Minus One</button>
    </div>
  )
}
export default Hook ;