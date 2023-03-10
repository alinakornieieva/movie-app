import React from 'react';
import './App.css';
import Header from './features/header/Header';
import RandomMovie from './features/randomMovie/RandomMovie';

function App() {
  return (
    <div className="App">
      <Header/>
      <RandomMovie/>
    </div>
  );
}

export default App;
