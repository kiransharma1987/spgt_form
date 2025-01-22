import React from 'react';
import Home from './routes/Home';
import { BrowserRouter, Route, Routes } from 'react-router';
import Form from './routes/Form';
import ViewAllSeve from './routes/ViewAllSeve';
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
