import react from "react"

export default function Hello({color, name, isSpecial}){
    return ( 
        <div style={{color}}>{isSpecial && <b>*</b>} Hello!, {name} </div>
    )
}

Hello.defaultProps = {
    name: 'noname'
}