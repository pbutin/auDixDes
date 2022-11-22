import * as React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Layout from "./pages/Layout";
import Games from './pages/Games/Games'


export default function Blog() {    
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Games />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}