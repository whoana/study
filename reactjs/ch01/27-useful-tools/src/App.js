import logo from './logo.svg'
import './App.css'
import { unstable_renderSubtreeIntoContainer } from 'react-dom'
import { useEffect, useState } from 'react'

function App() {
    const [value, setValue] = useState('')
    useEffect(() => {
        console.log(value)
    }, [value])
    return (
        <div>
            <p>와우</p>
        </div>
    )
}

export default App
