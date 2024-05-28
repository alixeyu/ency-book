import { Route, Routes, Navigate } from 'react-router-dom';

import Header from './components/header/header.component';
import Footer from './components/footer/footer.component';

import Homepage from "./pages/homepage/homepage.component";
import CharactersPage from './pages/characters/characters.component';
import CharacterPage from './pages/character/character.component';
import LegendsPage from './pages/legends/legends.component';

import './App.css';

function App() {
  return (
    <div className="App">
      <Header />

      <Routes>
        <Route exact path="/" element={ <Homepage /> }/>
        <Route path="/legends" element={ <LegendsPage /> }/>
        <Route path="/characters" element={ <CharactersPage /> } />
        <Route path="/characters/:charId" element={ <CharacterPage /> } />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
