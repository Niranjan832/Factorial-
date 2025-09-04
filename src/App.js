import React, { useState } from "react";

function FactorialCalculator() {
  const [number, setNumber] = useState("");
  const [result, setResult] = useState("");

  // Function to calculate factorial
  const calculateFactorial = () => {
    const num = parseInt(number);

    if (isNaN(num) || num < 0) {
      setResult("Please enter a non-negative integer.");
      return;
    }

    let fact = 1;
    for (let i = 1; i <= num; i++) {
      fact *= i;
    }

    setResult(`Factorial of ${num} is ${fact}`);
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h2>Factorial Calculator</h2>
      <input
        type="number"
        value={number}
        onChange={(e) => setNumber(e.target.value)}
        placeholder="Enter a number"
      />
      <button onClick={calculateFactorial} style={{ marginLeft: "10px" }}>
        Calculate
      </button>
      <p>{result}</p>
    </div>
  );
}

export default FactorialCalculator;
