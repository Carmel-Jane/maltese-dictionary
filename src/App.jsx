import React, { createContext, useState } from 'react';
import Header from './components/Header';

export const InputContext =createContext()

function App() {
  const [inputValue, setInputValue] = useState("")

  const value = {
    inputValue,
    setInputValue
  }
  return (
    <InputContext.Provider value={value}>
    <div className="App">
      <Header/>
      <Results/>
    </div>
    </InputContext.Provider>
  );
}

export default App;