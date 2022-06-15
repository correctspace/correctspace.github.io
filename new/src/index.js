import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './index.css';
import "./css/styles.css";
import Header from './Pages/Header';
import Data from './Pages/Data';
import Contact from './Pages/Contact';
import About from './Pages/About';
import NotFound from './Pages/NotFound';
import Footer from './Pages/Footer';

export default function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Header />}>
          <Route index element={<Data />} />
          <Route path="contact" element={<Contact />} />
          <Route path="about" element={<About />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
    <Footer />
    </>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
