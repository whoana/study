import React, {
  useCallback,
  useMemo,
  useReducer,
  useRef,
  useState,
} from "react";
import CreateUser from "./CreateUser";
import userInputs from "./hooks/useInputs";
import UserList from "./UserList";

function countActiveUser(users){
  console.log('활성사용자 Counting....')
  return users.filter(user => user.active).length
}

const initialInputs = {
  username: "",
  email: "",
}

const initialState = {
   
  users: [
    {
      id: 1,
      active: false,
      username: "velopert",
      email: "public.velopert@gmail.com",
    },
    {
      id: 2,
      username: "tester",
      active: false,
      email: "tester@example.com",
    },
    {
      id: 3,
      username: "liz",
      active: false,
      email: "liz@example.com",
    },
  ],
};

function reducer(state, action) {
  switch (action.type) {
    // case "CHANGE_INPUT":
    //   return {
    //     ...state,
    //     inputs: {
    //       ...state.inputs,
    //       [action.name]: action.value,
    //     },
    //   }
    case "CREATE_USER":
      return {
        ...state,
        users: state.users.concat(action.user)
      }
      case "REMOVE_USER":
        return {
          ...state,
          users: state.users.filter(user=>user.id !== action.id),
        }
      case "UPDATE_USER":
          return {
            ...state,
            users: state.users.map(
              user =>
                user.id === action.id ? {...user, active: !user.active} : user
            ),
          }
      defaut: return state;
  }
}

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { users } = state;
  

  // const onChange = useCallback((e) => {
  //   const { name, value } = e.target;
  //   dispatch({ type: "CHANGE_INPUT", name, value });
  // }, []);
  const [{username, email}, onChange, reset] = userInputs(initialInputs)
  const nextId = useRef(4);
  const onCreate = useCallback(
      () => {
      const user = {
        id: nextId.current,
        username,
        email,
        active:false,
      }
      dispatch({type:'CREATE_USER', user})
      reset()
      nextId.current += 1
    },
    [username, email, reset]
  )

  const onRemove = useCallback(
    (id)=> {
      dispatch({type:'REMOVE_USER', id})
    },
    []
  )

  const onToggle = useCallback(
    (id) =>{
      dispatch({type:'UPDATE_USER', id})
    },
  []
  )

  const count = useMemo(() => countActiveUser(users),[users])

  return (
    <>
      <CreateUser username={username} email={email} onChange={onChange} onCreate={onCreate}/>
      <UserList users={users} onRemove={onRemove} onToggle={onToggle} />
      <div>활성사용자수:{count}}</div>
    </>
  );
}

export default App;
