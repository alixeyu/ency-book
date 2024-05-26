import { Route, Routes, Navigate } from 'react-router-dom';

import Header from './components/header/header.component';
import Characters from './pages/characters.component';
import Homepage from './pages/homepage/homepage.component';

import './App.css';

function App() {
  return (
    <div className="App">
      <Header />

      <Routes>
        <Route exact path="/" element={ <Homepage /> }/>
        {/* <Route path="/characters" element={ <Characters /> } /> */}
      </Routes>
    </div>
  );
}

export default App;
