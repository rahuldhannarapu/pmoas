import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import Label from './Label';
// import StateArray from './StateArray';
// import App from './App';
// import EffectEx from './useeffect/EffectEx';
// import MouseContainer from './useeffect/MouseContainer';
// import MouseEx from './useeffect/MouseEx';
// import Counter from './useeffect/Counter';
// import FetchEffect from './useeffect/FetchEffect';
import FetchRed from './FetchRed';
import FetchRed2 from './FetchRed2';
import Memo from './Memo';
import Useref from './Useref';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <App /> */}
    {/* <Label /> */}
    {/* <StateArray /> */}
    {/* <EffectEx /> */}
    {/* <MouseEx /> */}
    {/* <MouseContainer /> */}
    {/* <Counter /> */}
    {/* <FetchEffect /> */}
    {/* <FetchEffect /> */}
    {/* <FetchRed /> */}
    {/* <FetchRed2 /> */}
    <Memo />
    {/* <Useref /> */}


  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
