import React from 'react';
import './App.css';
import './components/SearchForm';
import SearchForm from './components/SearchForm';
function App() {
  return (
    <div className="App">
      <h1>Movie Search</h1>
      <SearchForm />
    </div>
  );
}

export default App;
