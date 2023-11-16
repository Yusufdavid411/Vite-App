import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
// Import necessary FontAwesome components and icons
import { library } from '@fortawesome/fontawesome-svg-core';
import { faCoffee, faCode } from '@fortawesome/free-solid-svg-icons';

// Add icons to the library
library.add(faCoffee, faCode );


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
