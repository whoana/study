import react, {useRef, useState} from 'react'

function InputSample(){
    const [inputs, setInputs] = useState({
        name:'',
        nickname:''
    })

    const inputName = useRef()
    const {name, nickname} = inputs
    const resetInputs = ()=> {
        setInputs({
            name:'',
            nickname:''
        })    
        inputName.current.focus()
    }

    const handleChange = (e) => {
        const {name, value} = e.target // e.target에서 name, value 값을 추출 , 순서 상관 있을까 ? 
        setInputs({...inputs, [name]: value})
    }
    return (
        <div>
            <input name="name" placeholder="name" value={name} onChange={handleChange} ref={inputName}/>
            <input name="nickname" placeholder="nick" value={nickname} onChange={handleChange}/>
            <button onClick={resetInputs}>reset</button>
            <div>
                name:{name}, nickname:{nickname}
            </div>
        </div>
    )
}
export default InputSample