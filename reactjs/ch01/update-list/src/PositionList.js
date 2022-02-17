import react from "react";
import './PositionList.css'

function PositionList({positions, handleDelete, handleAdd, handleModify}){

    const list = positions.map((position,index) => {
        return <div className="row" key={index}>
                <div key="0" className={position[0]}></div>
                <div key="1" className={position[1]}></div>
                <div key="2" className={position[2]}></div>
                <div key="3" className={position[3]}></div>
                <div key="4" className={position[4]}></div>
                <div key="5" className={position[5]}></div>
                <div key="6" className={position[6]}></div>
                <div key="7" className={position[7]}></div>
                <div key="8" className={position[8]}></div>
                <div key="9" className={position[9]}></div>
            </div>
        
    })
    return (
        <div>
            <div>
                <button onClick={handleDelete}>del</button>
                <button onClick={handleAdd}>add</button>
                <button onClick={handleModify}>mod</button>
            </div>
            <div className="container">
                {list}
            </div>
        </div>
    )
}

export default PositionList;