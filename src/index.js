import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Provider as ShapeListProvider } from './contexts/ShapeListContext';
import { Provider as ThemeProvider } from './contexts/ThemeContext';
import 'bootstrap/dist/css/bootstrap.min.css';

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider>
      <ShapeListProvider>
        <App />
      </ShapeListProvider>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

