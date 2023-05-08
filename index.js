import React from 'react';
import ReactDOM from 'react-dom/client';
import Page1 from './components/page1';
import Page2 from './components/page2';
import Page3 from './components/page3';
import "./index.css";
import Page4 from './components/page4';
import Page5 from './components/page5';
import Page6 from './components/page6';
import Page7 from './components/page7';
import Page8 from './components/page8';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Page1/>
    <Page2/>
    <Page3/>
    <Page4/>
    <Page5/>
    <Page6/>
    <Page7/>
    <Page8/>
  </React.StrictMode>
);


