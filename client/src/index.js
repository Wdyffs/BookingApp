import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Clock } from './Components/Clock';
import { TextControl } from './Components/Text';
import { List } from './Components/List';
import { Form } from './Components/SimpleForm';


ReactDOM.render(
  <React.StrictMode>
    <App />
    <Clock />
    <TextControl />
    <List numbers={[1, 2, 3, 4, 5]} />
    <Form />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
