
import { useCallback, useReducer, useState } from "react";
 
const reducer = (state, action)=>{

    switch(action.type){
        case 'CHANGE':
            return {...state, [action.name]: action.value }
        case 'RESET' :
            console.log(action.initialForm)
            return action.initialForm
        default : 
            console.log(state)
            return state
    }
}

function useInputs(initialForm){
    
    const [form, dispatcher] = useReducer(reducer, initialForm)
    
    const onChange = useCallback((e) => {
        const {name, value} = e.target
        dispatcher({type:'CHANGE', name, value})
    },[])
    
    const reset = useCallback(() => {
        //setForm(initialForm)
        dispatcher({type:'RESET', initialForm})
    })

    return [form, onChange, reset]    
}

export default useInputs