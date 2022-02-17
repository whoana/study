import react, { useCallback, useReducer } from "react";

const counterReducer = (count, action)=>{
    
    switch(action.type){
        case 'UP' : count += 1
            break
        case 'DOWN' : count -= 1
            break
        default : count = 0
            break
    }
    return count
}

function Counter(){
    const [count, dispatchCount] = useReducer(counterReducer, 0)
    const handleUp = () => {
        dispatchCount({type: 'UP'})
    }
    const handleDown = useCallback(() => {
        dispatchCount({type: 'DOWN'})
    },[])
    return (
        <div  style={{width: '500px'}}>
            <h1>{count}</h1>
            <button onClick={handleUp}>UP</button>
            <button onClick={handleDown}>DOWN</button>
        </div>
    )
}

export default Counter