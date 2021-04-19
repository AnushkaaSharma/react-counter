import React, { useState } from 'react'
import './App.css'

const App = () => {
    const [count, setCount] = useState(0)

    const increment = () => {
        setCount( count + 1 )
    } 

    const decrement = () => {
        setCount( count - 1 )
    } 
    const reset = () => {
        setCount( 0 )
    } 

    return (
        <div className='counter'>
            <h1>This is Hooks</h1>
            <p>{ count }</p>
            <button onClick={ increment }>Increment</button>
             <button onClick={ decrement }>Decrement</button>
            <button onClick={ reset }>Reset</button>
        </div>
      )

}

export default App