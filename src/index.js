// import { useNaviate } from 'react-router-dom';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MyRoutes from './routes/routes';


ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter basename={process.env.PUBLIC_URL}>
     <MyRoutes/>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

//reportWebVitals();
