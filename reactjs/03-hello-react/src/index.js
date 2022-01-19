import React from 'react';
import ReactDOM from 'react-dom';
import Hello from './Hello'

ReactDOM.render(
  <React.StrictMode>
    <div>
      <Hello />
      <Hello />
      <Hello />
    </div>
  </React.StrictMode>,
  document.getElementById('root')
);
 
