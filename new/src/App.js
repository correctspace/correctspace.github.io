import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from './Pages/Header';
import Data from './Pages/Data';
import Contact from './Pages/Contact';

function App() {
  return (
    <>
    
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Header />}>
          <Route index element={<Data />} />
          <Route path="contact" element={<Contact />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
      
    </BrowserRouter>
    
   
    </>
  );
}

export default App;
