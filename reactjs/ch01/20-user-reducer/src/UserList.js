import React, { useRef } from "react";


const User = React.memo(function User({ user, onRemove , onToggle}){
  console.log('render:User')
  const style = user.active ? {color: "red"} : {color: "black"}
  return (
    <div style={style} onClick={() =>onToggle(user.id)}>
      <b>{user.username}</b> <span>{user.email}</span>
      <button onClick={()=>onRemove(user.id)}>삭제</button>
    </div>
  )
})


function UserList({ users , onRemove, onToggle}) {
  console.log('render:UserList')

  return (
    <div>      
      {users.map((user) => (
        <User user={user} key={user.id} onRemove={onRemove} onToggle={onToggle}/>
      ))}
    </div>
  );
}

export default React.memo(UserList);
