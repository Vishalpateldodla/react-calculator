import './App.css';
import { useState } from 'react'

function App() {
  const [num1, setNum1] = useState('');
  const [num2, setNum2] = useState('');
  const [result, setResult] = useState('');
  const [error, setError] = useState('');

  const handleClear = () => {
    setNum1('');
    setNum2('');
    setResult('');
    setError('');
  };

  const handleCalculation = (operation) => {
    if (isNaN(parseFloat(num1)) || isNaN(parseFloat(num2))) {
      setError('Error: Num 1 and Num 2 cannot be empty');
    } else {
      const n1 = parseFloat(num1);
      const n2 = parseFloat(num2);
      let res;

      switch (operation) {
        case '+':
          res = n1 + n2;
          break;
        case '-':
          res = n1 - n2;
          break;
        case '*':
          res = n1 * n2;
          break;
        case '/':
          if (n2 === 0) {
            setError('Cannot divide by zero');
            return;
          }
          res = n1 / n2;
          break;
        default:
          setError('Invalid operation');
          return;
      }

      setResult(res.toFixed(2));
      setError('');
    }
  };

  return (
    <div className="App">
      <div className="calculator">
        <h2>React Calculator</h2>
        <form>
          <div className="input-group">
            <label>Number 1:</label>
            <input type="text" placeholder='Num 1' value={num1} onChange={(e) => setNum1(e.target.value)} />
          </div>
          <div className="input-group">
            <label>Number 2:</label>
            <input type="text" placeholder='Num 2' value={num2} onChange={(e) => setNum2(e.target.value)} />
          </div>
          <div className="button-group">
            <button type="button" className='btn1' onClick={() => handleCalculation('+')}>+</button>
            <button type="button" className='btn2' onClick={() => handleCalculation('-')}>-</button>
            <button type="button" className='btn3' onClick={() => handleCalculation('*')}>*</button>
            <button type="button" className='btn4' onClick={() => handleCalculation('/')}>/</button>
          </div>
          {error && <div className="error">{error}</div>}
          {result && <div className="success">Result is: {result}</div>}
          <div className="button-group">
            <button type="button" className='clear' onClick={handleClear}>Clear</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default App;
