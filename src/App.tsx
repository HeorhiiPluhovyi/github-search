import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import Navigation from './Components/Navigation';
import FavoritesPage from './pages/FavoritesPage';
import HomePage from './pages/HomePage';
import PageNotFound from './pages/PageNotFound';

function App() {
  return (
    <>
      <Navigation/>
      <Routes>
        <Route path="/" element={ <HomePage/> }/>
        <Route path="/favorites" element={ <FavoritesPage/> }/>
        <Route path="*" element={ <PageNotFound/> } />
      </Routes>
    </>
  );
}

export default App;
