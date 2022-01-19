import react from "react";
import Hello from "./Hello";
import Wrapper from "./Wrapper";
function App() {
  return (
    <Wrapper>
      <Hello name="whoana" color="red" isSpecial={true}/>
      <Hello color="pink" />
    </Wrapper>
  );
}

export default App;
