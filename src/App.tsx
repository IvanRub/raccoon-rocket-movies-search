import React from 'react';
import { Route, Routes, Navigate } from "react-router-dom";

import { Home } from './pages/Home';
import { SearchList } from './pages/SearchList';
import { Favorites } from './pages/Favorites'
import AppBar from './components/AppBar';

import './App.scss';

function App() {
  return (
    <div className='App'>
      <AppBar />

      <Routes>
        <Route index element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="search" element={<SearchList />} />
        <Route path="favorites" element={<Favorites />} />
        <Route path="*" element={<Navigate to='/' />} />
      </Routes>
    </div>
  );
}

export default App;
