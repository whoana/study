import React, { useContext, useRef } from "react";
import { UserContext } from "./App";

const User = React.memo(function User({ user}){
  const dispatch = useContext(UserContext)
  const style = user.active ? {color: "red"} : {color: "black"}
  return (
    <div>
      <b style={style} onClick={() =>{dispatch({type:'UPDATE_USER', id: user.id})}}>{user.username}</b> <span>{user.email}</span>
      <button onClick={()=>{
        dispatch({type:'REMOVE_USER', id: user.id})
      }}>삭제</button>
    </div>
  )
})


function UserList({ users}) {
  console.log('render:UserList')

  return (
    <div>      
      {users.map((user) => (
        <User user={user} key={user.id} />
      ))}
    </div>
  );
}

export default React.memo(UserList);
