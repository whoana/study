import React, {
  createContext,
  useCallback,
  useMemo,
  useReducer,
  useRef,
  useState,
} from "react";
import CreateUser from "./CreateUser";
import userInputs from "./hooks/useInputs";
import UserList from "./UserList";
import { produce } from "immer";
function countActiveUser(users) {
  console.log("활성사용자 Counting....");
  return users.filter((user) => user.active).length;
}

const initialInputs = {
  username: "",
  email: "",
};

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
  debugger;
  switch (action.type) {
    case "CREATE_USER":
      return produce(state, (draft) => {
        draft.users.push(action.user)
      })
    case "REMOVE_USER":
      return produce(state, (draft) => {
        const index = draft.users.findIndex((user) => user.id === action.id);
        draft.users.splice(index, 1)
      })
    case "UPDATE_USER":
      return produce(state, (draft) => {
        const user = draft.users.find((user) => user.id === action.id);
        user.active = !user.active
      })
      default: 
        return state
  }
}

export const UserContext = createContext(null);

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { users } = state;

  // const onChange = useCallback((e) => {
  //   const { name, value } = e.target;
  //   dispatch({ type: "CHANGE_INPUT", name, value });
  // }, []);
  const [{ username, email }, onChange, reset] = userInputs(initialInputs);
  const nextId = useRef(4);
  const onCreate = useCallback(() => {
    const user = {
      id: nextId.current,
      username,
      email,
      active: false,
    };
    dispatch({ type: "CREATE_USER", user });
    reset();
    nextId.current += 1;
  }, [username, email, reset]);

  const count = useMemo(() => countActiveUser(users), [users]);

  return (
    <>
      <CreateUser
        username={username}
        email={email}
        onChange={onChange}
        onCreate={onCreate}
      />
      <UserContext.Provider value={dispatch}>
        <UserList users={users} />
      </UserContext.Provider>
      <div>활성사용자수:{count}</div>
    </>
  );
}

export default App;
