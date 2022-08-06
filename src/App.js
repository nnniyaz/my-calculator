import { useState } from 'react';
import './App.css';

function App() {
  const [firstValue, setFirstValue] = useState('');
  const [prevValue, setPrevValue] = useState('');
  const [result, setResult] = useState('');
  const [currentOperator, setCurrentOperator] = useState('')

  const setValue = (e) => {
    setFirstValue(firstValue + e.currentTarget.textContent);
  }

  const clear = () => {
    setFirstValue('');
    setPrevValue('');
    setResult('');
    setCurrentOperator('')
  }

  const setOperator = (e) => {
    setCurrentOperator(e.currentTarget.textContent);
    if (result !== '') {
      setPrevValue(result)
      setResult('')
      setFirstValue('');
    } else {
      setPrevValue(firstValue);
      setFirstValue('');
    }
  }

  const changeSign = () => {
    if (result !== '') {
      setResult(result * -1)
    }
    else {
      setFirstValue(firstValue * -1)
    }
  }

  const inPercentage = () => {
    if (result !== '') {
      setResult(result / 100);
    }
    else {
      setFirstValue(firstValue / 100)
    }
  }

  const setFloat = () => {
    if (result !== '') {
      if (result % 1 === 0) {
        setResult(result + '.')
      }
    }
    else {
      if (firstValue % 1 === 0) {
        setFirstValue(firstValue + '.')
      }
    }
  }

  const equals = () => {
    let result;

    if (currentOperator === '+') {
      result = parseFloat(prevValue) + parseFloat(firstValue);
    }
    else if (currentOperator === '-') {
      result = parseFloat(prevValue) - parseFloat(firstValue);
    }
    else if (currentOperator === '÷') {
      result = parseFloat(prevValue) / parseFloat(firstValue);
    }
    else if (currentOperator === 'x') {
      result = parseFloat(prevValue) * parseFloat(firstValue);
    }

    setResult(result);
    setPrevValue(result);
  }

  return (
    <div className="App">
      <div className='container'>
        <div className='screen'>
          {
            result === '' ? firstValue === '' ? 0 : firstValue : result
          }
        </div>
        <div className='keyboard'>
          <div className='row'>
            <div className='block light-gray' onClick={clear}>AC</div>
            <div className='block light-gray' onClick={changeSign}>+/-</div>
            <div className='block light-gray' onClick={inPercentage}>%</div>
            <div className='block orange' onClick={setOperator}>÷</div>
          </div>
          <div className='row'>
            <div className='block dark-gray' onClick={setValue}>7</div>
            <div className='block dark-gray' onClick={setValue}>8</div>
            <div className='block dark-gray' onClick={setValue}>9</div>
            <div className='block orange' onClick={setOperator}>x</div>
          </div>
          <div className='row'>
            <div className='block dark-gray' onClick={setValue}>4</div>
            <div className='block dark-gray' onClick={setValue}>5</div>
            <div className='block dark-gray' onClick={setValue}>6</div>
            <div className='block orange' onClick={setOperator}>-</div>
          </div>
          <div className='row'>
            <div className='block dark-gray' onClick={setValue}>1</div>
            <div className='block dark-gray' onClick={setValue}>2</div>
            <div className='block dark-gray' onClick={setValue}>3</div>
            <div className='block orange' onClick={setOperator}>+</div>
          </div>
          <div className='row'>
            <div className='block dark-gray' onClick={setValue}>0</div>
            <div className='block dark-gray' onClick={setFloat}>.</div>
            <div className='equal orange' onClick={equals}>=</div>
          </div>
        </div>
      </div>
    </div >
  );
}

export default App;
