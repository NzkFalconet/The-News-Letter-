import React from 'react';
import { useNavigate } from 'react-router-dom';

const Thankyou = () => {
  const navigate = useNavigate();

  return (
    <div>
      <h1>Thank You!</h1>
      <p>Your data has been submitted successfully.</p>
      <button onClick={() => navigate('/')}>Submit another response</button>
    </div>
  );
};

export default Thankyou;
