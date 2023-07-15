import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Navbar from './components/Navbar';
import Header from './components/Header';
import './styles.css'; 

ReactDOM.render(
  <React.StrictMode>
     <Navbar />
   
     <Header />
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
