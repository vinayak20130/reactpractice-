import React, { useState } from 'react'

const Counter = () => {
    const[value,setValue] = useState(0);
    const addValue = () =>{
        setValue(value+1);
    };
    const add1 = () => {
        setValue(value => value+1);
    }
    const decValue =() =>{
        setValue(value-1);
    }
  return (
    <div>
        <div><button onClick={add1}>+</button></div>
        <div>{value}</div>
        <div><button onClick={decValue}>-</button></div>
        </div>
  )
}

export default Counter