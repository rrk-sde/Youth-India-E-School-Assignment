import { Navigate, Routes, Route } from 'react-router-dom';
// import Home from './component/Home';
import CharacterDetail from './component/CharacterDetail';
import CharacterList from './component/CharacterList';
import './App.scss';
import React from 'react';
import CharacterListLazy from './pages/CharacterListLazy';


function App() {
  return (
    <Routes>

      <Route exact path="/" element={<Navigate to="/characters" />} />
      <Route exact path="/characters" element={<CharacterList />} />
      <Route exact path="/characters-lazy" element={<CharacterListLazy />} />
      <Route path="/characters/:id" element={<CharacterDetail />} />
    </Routes>

  );
}




export default App;

