import Counter from './Counter';
import Hello from './Hello';


function App() {
  return (
    <div>
      <Hello color="blue" name="whoana" isSpecial={true} />
      <Counter />
    </div>
  );
}

export default App;
