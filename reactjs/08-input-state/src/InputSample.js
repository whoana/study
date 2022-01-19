import react, { useState } from "react";

function InputSample(){
    const [text, setText] = useState('')
    const resetInput = ()=>{setText('')}
    const handleChangeValue = (e)=>{
        setText(e.target.value)
    }
    return (
        <div>
            <input value={text} onChange={handleChangeValue}/>
            <button onClick={resetInput}>초기화</button>
            <div><b>값: {text}</b></div>
        </div>
    )
}

export default InputSample