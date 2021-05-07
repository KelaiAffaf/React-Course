import './App3.css'

import  { useState, useReducer } from 'react'

function reducer(state, action) {
  switch (action.type) {
    case 'increment':
      return {count: state.count + 1};
    case 'decrement':
      return {count: state.count - 1};
    default:
      throw new Error();
  }
}

const initialState = {count: 0, itemPrice: 0, discount: 0, totalPrice: 0};


const UseReducer = () => {
    const [state, dispatch] = useReducer(reducer, initialState);
  
  return (
    <div className="box">
    
      <div>Item price: <input /> </div>
      <div> Percentage discount:   <input /> </div>
      <div> Count: {state.count}
       <button onClick={() => dispatch({type: 'decrement'})}>-</button>
      <button onClick={() => dispatch({type: 'increment'})}>+</button>
      </div>
      <div> Total price: $0 </div>
    </div>
  )
}
export default UseReducer;
