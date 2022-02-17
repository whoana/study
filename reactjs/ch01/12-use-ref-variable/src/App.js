import React , {useRef, useState} from 'react';
import CreateUser from './CreateUser';
import UserList from './UserList';

function App() {
  const [users, setUsers] = useState(
  [
    {
      id: 1,
      username: 'velopert',
      email: 'public.velopert@gmail.com'
    },
    {
      id: 2,
      username: 'tester',
      email: 'tester@example.com'
    },
    {
      id: 3,
      username: 'liz',
      email: 'liz@example.com'
    }
  ]);

  const [inputs, setInputs]  =  useState({
    username: '',
    email:''
  })

  const {username, email} = inputs

  const onChange = (e) =>{
    const {name, value} = e.target
    setInputs({...inputs, [name]: value})
  }

  const nextId = useRef(4);
  const onCreate = () => {
    const user = {
      id: nextId.current,
      username,
      email
    }
    //1.배열의 불변성을 지키면서 원소 추가 방법:spread  연산자 .
    //setUsers([...users, user])
    //2.concat 사용 .
    setUsers(users.concat(user))

    setInputs({username:'', email:''})
    nextId.current += 1
  }  

  const onRemove = (id)=> {
    setUsers(
      users.filter(user=>user.id !== id)
    )
  }

  return (
    <>
      <CreateUser username={username} email={email} onChange={onChange} onCreate={onCreate}/>
      <UserList users={users} onRemove={onRemove} />
    </>
  );
}

export default App;