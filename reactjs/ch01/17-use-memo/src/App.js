import React , {useCallback, useMemo, useRef, useState} from 'react';
import CreateUser from './CreateUser';
import UserList from './UserList';

function countActiveUser(users){
  console.log('활성사용자 Counting....')
  return users.filter(user => user.active).length
}

function App() {
  const [users, setUsers] = useState(
  [
    {
      id: 1,
      active: false,
      username: 'velopert',
      email: 'public.velopert@gmail.com'
    },
    {
      id: 2,
      username: 'tester',
      active: false,
      email: 'tester@example.com'
    },
    {
      id: 3,
      username: 'liz',
      active: false,
      email: 'liz@example.com'
    }
  ]);

  const [inputs, setInputs]  =  useState({
    username: '',
    email:''
  })

  const {username, email} = inputs

  const onChange = useCallback(
    (e) =>{
      const {name, value} = e.target
      setInputs({...inputs, [name]: value})
    },
    [inputs]
  )
  
  const nextId = useRef(4);
  const onCreate = useCallback(
      () => {
      const user = {
        id: nextId.current,
        username,
        email
      }
      //1.배열의 불변성을 지키면서 원소 추가 방법:spread  연산자 .
      //setUsers([...users, user])
      //2.concat 사용 .
      setUsers(users => users.concat(user))

      setInputs({username:'', email:''})
      nextId.current += 1
    },
    [username, email]
  )  


  const onRemove = useCallback(
    (id)=> {
      setUsers( users =>
        users.filter(user=>user.id !== id)
      )
    },
    []
  )


  const onToggle = useCallback(
    (id) =>{
      setUsers(users =>
        users.map(user=>user.id === id ? {...user, active: !user.active} : user)
      )
    },
  []
  )

  const count = useMemo(() => countActiveUser(users),[users])

  return (
    <>
      <CreateUser username={username} email={email} onChange={onChange} onCreate={onCreate}/>
      <UserList users={users} onRemove={onRemove} onToggle={onToggle}/>
      <div>활성사용자수:{count}</div>
    </>
  );
}

export default App;