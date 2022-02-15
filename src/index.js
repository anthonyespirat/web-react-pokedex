import React from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

import './index.css';

import App from './routes/App'
import PokemonView from './routes/PokemonView';

ReactDOM.render(
  <React.StrictMode>

    <BrowserRouter>

    <Routes>
      <Route path='/' element={<App/>}/>
      <Route path=':pokemonId' element={<PokemonView/>}/>
    </Routes>

    </BrowserRouter>

  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();