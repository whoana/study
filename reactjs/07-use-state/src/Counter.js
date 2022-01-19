import react, { useState } from 'react'

function Counter(){
    const [counter, setCounter] = useState(0)
    const onIncrease = ()=> { 
        setCounter((prevValue) => prevValue + 1)
    }
    const onDecrease = ()=> { 
        setCounter((prevValue) => prevValue -1)
    }
    return (
        <div>
            <h1>{counter}</h1>
            <button onClick={onIncrease}>+1</button>
            <button onClick={onDecrease}>-1</button>
        </div>

    )
}

export default Counter