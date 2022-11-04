import React from 'react';
import ReactDOM from 'react-dom/client';
import './App.css'
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import '../node_modules/jquery/dist/jquery.js'
import './index.css';
import NavBar from './components/NavBar';
import MovieList from './components/MovieList';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <div>
    <NavBar />
    <MovieList />
  </div>
);