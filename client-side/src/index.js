import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter as Router } from 'react-router-dom';
import SocketProvider from './components/SocketProvider';

ReactDOM.render(
  <Router>
   <SocketProvider>
     <App />
   </SocketProvider>
  </Router>,
  document.getElementById('root')
);
