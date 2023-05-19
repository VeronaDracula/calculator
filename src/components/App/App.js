import './App.css';
import React from "react";
import { NumberContext } from '../../context/NumberProvider.js';


import Main from '../Main/Main.js';


function App() {

  const [activeStatus, setActiveStatus] = React.useState(false);

  const [value, setValue] = React.useState('0');
  const [memoryStatus, setMemoryStatus] = React.useState(false);
  const [equalsStatus, setEqualsStatus] = React.useState(false);
  const [countStatus, setCountStatus] = React.useState(false);
  const [lengthStatus, setLengthStatus] = React.useState(true);
  const [memory, setMemory] = React.useState('0');
  const [operator, setOperator] = React.useState('');
  

  React.useEffect(() => { 
    console.log(memory);
  }, [memory]);

  function reset () {
    setValue('0');
    setMemory('0');
    setOperator('');
    setMemoryStatus(false);
    setEqualsStatus(false);
    setCountStatus(false);
  }

  function handleSetDisplayValue (number) {
    if(equalsStatus === true) {
      if ((!value.includes('.') || number !== '.')) {
        setValue(`${number}`);
        setEqualsStatus(false);
        setMemoryStatus(false);
        setCountStatus(false);
        setMemory('0');
        setOperator('');
      }
    }
    else {
      if ((!value.includes('.') || number !== '.') && value.length < 16 && !memoryStatus) {

        if(number === 0 && value.startsWith('0')) {
          setValue('0');
        }
        // else if(number === '.') {
        //   setValue('0.');
        // }
        else {
          setValue(`${(value + number).replace(/^0+/, '')}`);
        }
  
      } else if ((!value.includes('.') || number !== '.') && memoryStatus) {
        setValue(`${number}`);
        setMemoryStatus(false);
      }
    }
  };


  function calculation () {
    if(operator === '+') {
      setMemory(`${Number(memory) + Number(value)}`);
    }

    else if(operator === '-') {
      setMemory(`${Number(memory) - Number(value)}`);
    }

    else if(operator === 'x') {
      setMemory(`${Number(memory) * Number(value)}`);
    }

    else if(operator === '/') {
      setMemory(`${Number(memory) / Number(value)}`);
    }
  }


  //математическое действие
  function handleAction (action) {

    if(action === 'C') {
      reset();
    }

    if(action === '+') {
      calculation();
      setOperator('+');
      setMemoryStatus(true);

      if(countStatus === false) {
        setMemory(value);
        setCountStatus(true);
      }

      if(equalsStatus === true) {
        setMemory(`${Number(value)}`);
        setEqualsStatus(false);
      }
    }

    else if(action === '-') {
      calculation();
      setOperator('-');
      setMemoryStatus(true);

      if(countStatus === false) {
        setMemory(value);
        setCountStatus(true);
      }

      if(equalsStatus === true) {
        setMemory(`${Number(value)}`);
        setEqualsStatus(false);
      }
    }

    else if(action === 'x') {
      calculation();
      setOperator('x');
      setMemoryStatus(true);
      
      if(countStatus === false) {
        setMemory(value);
        setCountStatus(true);
      }

      if(equalsStatus === true) {
        setMemory(`${Number(value)}`);
        setEqualsStatus(false);
      }
    }

    else if(action === '/') {
      calculation();
      setOperator('/');
      setMemoryStatus(true);
      
      if(countStatus === false) {
        setMemory(value);
        setCountStatus(true);
      }

      if(equalsStatus === true) {
        setMemory(`${Number(value)}`);
        setEqualsStatus(false);
      }
    }
  }

  //равно
  function handleEquals () {
    if(operator === '+') {
      setValue(`${Number(memory) + Number(value)}`);
      setMemory(`${Number(memory) + Number(value)}`);

      console.log(memory)

      if(value.length >= 16) {
        roundResult (`${Number(memory) + Number(value)}`);
      }

      setEqualsStatus(true);
    }

    else if(operator === '-') {
      setValue(`${Number(memory) - Number(value)}`);
      setMemory(`${Number(memory) - Number(value)}`);

      console.log(memory)

      if(value.length >= 16) {
        roundResult (`${Number(memory) - Number(value)}`);
      }

      setEqualsStatus(true);
    }

    else if(operator === 'x') {
      setValue(`${Number(memory) * Number(value)}`);
      setMemory(`${Number(memory) * Number(value)}`);

      if(value.length >= 16) {
        roundResult (`${Number(memory) * Number(value)}`);
      }

      setEqualsStatus(true);
    }

    else if(operator === '/') {

      if(value === '0') {
        setValue('Не определено');
      }
      else {
        setValue(`${Number(memory) / Number(value)}`);
        setMemory(`${Number(memory) / Number(value)}`);

        if(value.length >= 16) {
          roundResult (`${Number(memory) / Number(value)}`);
        }
  
        setEqualsStatus(true);
      }
    }

    if(value.length >= 9) {
      setLengthStatus(false);
    }
  }


  function roundResult (result) {
    setValue(Number(result).toPrecision(12));
  }


  function activeCalculator (status) {
    setActiveStatus(status);
  }












  return (
    <div className="page">
        <NumberContext.Provider value={value}>
          <Main handleSetDisplayValue={handleSetDisplayValue}
                handleAction={handleAction}
                handleEquals={handleEquals}
                length={lengthStatus}
                activeCalculator={activeCalculator}
                activeStatus={activeStatus}/>
        </NumberContext.Provider>
    </div>
  );
}

export default App;