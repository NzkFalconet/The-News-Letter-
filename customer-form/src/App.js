import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import CustomerForm from './CustomerForm';
import Thankyou from './Thankyou';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<CustomerForm />} />
        <Route path="/thankyou" element={<Thankyou />} />
      </Routes>
    </Router>
  );
};

export default App;
