import Header from './components/Header.jsx';
import UserInput from './components/UserInput.jsx';
import Results from './components/Results.jsx';
import { useState } from 'react';

const initUserInput = {
  initialInvestment: 10000,
  annualInvestment: 1200,
  expectedReturn: 6,
  duration: 10
}


function App() {
  const [userInput, setUserInput] = useState(initUserInput);


  const inputValid = userInput.duration >= 1;



  function handleChange(inputIdentifier, newValue) {
    setUserInput(prevUserInput => {
      return {
        ...prevUserInput,
        [inputIdentifier]: +newValue
      }
    });
  }
  console.log(inputValid);
  return (
    <>
      <Header />
      <UserInput input={userInput} onUserInputChange={handleChange} />
      {!inputValid && <p className="center">Please enter duration grater than zero.</p>}
      {inputValid && <Results output={userInput} />}

    </>
  );
}

export default App
