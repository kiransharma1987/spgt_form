import React from 'react';
import Home from './components/Home';
import { BrowserRouter, Route, Routes } from 'react-router';
import Form from './components/Form';

const App:React.FC =()=> {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/form" element={<Form />} />
    </Routes>
  </BrowserRouter>
  );
}

export default App;
