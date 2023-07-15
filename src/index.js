import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Navbar from './components/Navbar';
import './styles.css'; 

ReactDOM.render(
  <React.StrictMode>
     <Navbar />
      <br></br>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
