import React from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import { Home } from '../Page/Home/Home';
import { Player } from '../Page/Player/Player';

export const Router = () => {
   return (
      <BrowserRouter>
         <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/players" element={< Player />} />
         </Routes>
      </BrowserRouter>
   )
}