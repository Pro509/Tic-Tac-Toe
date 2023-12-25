import React from 'react';
import ReactDOM from 'react-dom/client';
import TicTacToe from './components/TicTacToe';
import './index.css';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <TicTacToe />
      </header>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
