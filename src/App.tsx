import React from 'react';
import Home from './components/Home';
import { BrowserRouter, Route, Routes } from 'react-router';
import Form from './components/Form';
import ViewAllSeve from './components/ViewAllSeve';
import { ToastContainer } from 'react-toastify';

const App:React.FC =()=> {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/form" element={<Form />} />
      <Route path="/view-all" element={<ViewAllSeve />} />
    </Routes>
    <ToastContainer theme='colored' />
  </BrowserRouter>
  
  );
}

export default App;
