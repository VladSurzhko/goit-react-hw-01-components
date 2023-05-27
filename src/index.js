import { render } from '@testing-library/react';
import React from 'react';
import ReactDOM from 'react-dom/client';
import  App  from './components/App';
// import './index.css';




// ReactDOM.render(<App/>, document.querySelector("#root"))

ReactDOM.createRoot(document.getElementById('root')).render(
  <App/>
);


