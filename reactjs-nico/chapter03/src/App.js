import React, { useState } from "react";

function App() {

  const [amount, setAmount] = useState(0)

  const handleChange = (event) => {
    setAmount((prevValue) => setAmount(event.target.value))
  }

  const reset = () => setAmount(0)

  return (
    <div>
      <div>
        <label htmlFor="minutesInput">minutes</label>
        <input
          id="minutesInput"
          style={{
            backgroundColor: "white",
            color: "red",
            border: "solid 1px red",
            borderRadius: "2px",
            padding: "3px",
            width: "150px",
            height: "20px",
            margin: "3px",
          }}
          type="number"
          value={amount}
          onChange={handleChange}
        />

        <label htmlFor="hoursInput">hours</label>
        <input
          id="hoursInput"
          style={{
            backgroundColor: "white",
            color: "red",
            border: "solid 1px red",
            borderRadius: "2px",
            padding: "3px",
            width: "150px",
            height: "20px",
            margin: "3px",
          }}
          type="number"
          value={Math.round(amount/60)}
        />
      </div>
      <button
        style={{
          color: "red",
          backgroundColor: "white",
          border : "solid 1px red",
          borderRadius: "3px",
          margin: "3px",
          width: "80px",
          height: "30px",
        }}
        onClick={reset}
      >
        reset
      </button>
      <button style={{
          color: "red",
          backgroundColor: "white",
          border : "solid 1px red",
          borderRadius: "3px",
          margin: "3px",
          width: "80px",
          height: "30px",
        }}>flip</button>
    </div>
  );
}

export default App;
