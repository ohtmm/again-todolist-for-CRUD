import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from './components/header/Header';
import AuthCheck from './components/HOC/AuthCheck';

function App() {
  return (
    <div className='App'>
      <Header />
      <Outlet />
    </div>
  );
}

export default App;
