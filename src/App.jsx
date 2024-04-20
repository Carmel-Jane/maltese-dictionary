import React, { createContext, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Results from './components/Results';
import WordDetails from './components/WordDetails';
import About from './components/About';

export const InputContext = createContext();

function App() {
  const [inputValue, setInputValue] = useState("");

  const value = {
    inputValue,
    setInputValue
  };

  return (
    <InputContext.Provider value={value}>
      <Router>
        <div className="App">
        <Header inputValue={inputValue} setInputValue={setInputValue} />
          <Routes>
            <Route path="/" element={<Results />} />
            <Route path="/word/:id" element={<WordDetails />} />
            <Route path="/about" element={<About />} /> 
          </Routes>
        </div>
      </Router>
    </InputContext.Provider>
  );
}

export default App;