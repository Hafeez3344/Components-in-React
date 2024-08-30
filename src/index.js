import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import ParentComponent from './ParentComponent';
import Students from './Students';
import StyleComponent from './InlineStyleComponent';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
  <ParentComponent />
  
  <App/>

  <StyleComponent/>

  </>
);

