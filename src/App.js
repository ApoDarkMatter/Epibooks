import React from "react";
import HomePage from './pages/HomePage'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import BookDetails from './pages/BookDetails'
import Notfound from './pages/NotFound'
import About from "./pages/About";

function App() {
  return (
      <>
        <BrowserRouter>
          <Routes>
            <Route exact path="/" element={<HomePage />} />
            <Route path="/bookdetails/:bookId" element={<BookDetails />} />
            <Route path="/about" element={<About />} />
            <Route path="*" element={<Notfound />} />
          </Routes>
        </BrowserRouter>
      </>
  );
}

export default App;
