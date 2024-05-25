import { Route, Routes, Navigate } from 'react-router-dom';

import Header from './components/header/header.component';

import './App.css';

function App() {
  return (
    <div className="App">
      <Header />

      <Routes>
        <Route exact path="/" />
      </Routes>
    </div>
  );
}

export default App;
