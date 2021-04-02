import React, { useState, useEffect } from 'react';

import ReactDOM from 'react-dom';

import App from './App';

import './styles/style.scss';
import reportWebVitals from './reportWebVitals';
import Loader from './loader/Loader';

const Portfolio = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [scroll, setScroll] = useState('hidden');
  document.body.style.overflowY = scroll;

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
      setScroll('scroll');
    }, 1800);
  }, []); // here

  return (
    <div>
      {isLoading && <Loader />}
      <App />
    </div>
  );
};
ReactDOM.render(
  <Portfolio />,
  document.getElementById('root'),
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
