import React, { useState } from 'react';
import './App.css'; // Optional: For custom styling

const App = () => {
  const [input, setInput] = useState('');
  const [result, setResult] = useState('');

  const handleClick = (value) => {
    setInput(input + value);
  };

  const handleClear = () => {
    setInput('');
    setResult('');
  };

  const handleEvaluate = () => {
    // Check for empty input or single number case
    if (/^\d+$/.test(input)) {
      return;
    }

    // Check for division by zero
    const containsDivideByZero = /\/0/.test(input);

    if (containsDivideByZero) {
      setResult('NaN');
      return;
    }

    try {
      const evaluatedResult = eval(input);
      setResult(evaluatedResult === Infinity ? 'NaN' : evaluatedResult);
    } catch (error) {
      setResult('Error');
    }
  };

  return (
    <div className="calculator">
      <h1>React Calculator</h1>
      <input type="text" value={input} readOnly />
      <div className="result">{result}</div>
      <div className="buttons">
        <button onClick={() => handleClick('1')}>1</button>
        <button onClick={() => handleClick('2')}>2</button>
        <button onClick={() => handleClick('3')}>3</button>
        <button onClick={() => handleClick('+')}>+</button>
        <button onClick={() => handleClick('4')}>4</button>
        <button onClick={() => handleClick('5')}>5</button>
        <button onClick={() => handleClick('6')}>6</button>
        <button onClick={() => handleClick('-')}>-</button>
        <button onClick={() => handleClick('7')}>7</button>
        <button onClick={() => handleClick('8')}>8</button>
        <button onClick={() => handleClick('9')}>9</button>
        <button onClick={() => handleClick('*')}>*</button>
        <button onClick={() => handleClick('0')}>0</button>
        <button onClick={() => handleClick('/')}>/</button>
        <button onClick={handleEvaluate}>=</button>
        <button onClick={handleClear}>C</button>
      </div>
    </div>
  );
};

export default App;
