import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App/App';

// Hold the root which is the main div in for the web application
const root = ReactDOM.createRoot(document.getElementById('root'));

// Using React render the applications frontend on to the HTML
root.render(
  
  // Establish strict mode for checks and warnings so the application can render with few errors as possible
  <React.StrictMode>
    
    {/* Send the JSX frontend to the HTML frontend*/}
    <App />
  </React.StrictMode>
);


