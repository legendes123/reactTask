import './App.css';
import React from 'react';
import StringValidation from './components/stringValidation/stringValidation';
import Form from './components/form/form.jsx';

function App() {
  return (
    <>
      <h3 style={{ textAlign: 'center' }}>Number 1</h3>
      <StringValidation />
      <h3 style={{ textAlign: 'center' }}>Number 2</h3>
      <Form />
    </>
  );
}

export default App;
