import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from '../components/layout/Layout.jsx';
import Home from '../pages/Home.jsx';
import Detalhes from '../pages/Detalhes.jsx';

function Router() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/detalhes/:id" element={<Detalhes />} />
      </Route>
    </Routes>
  );
};
export default Router;