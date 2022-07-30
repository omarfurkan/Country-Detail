import './App.css';
import { Routes, Route } from "react-router-dom";
import Navbar from './Component/Navbar/Navbar';
import Home from './Component/Home/Home';
import About from './Component/About/About';
import Blog from './Component/Blog/Blog';
import NotFound from './Component/NotFound/NotFound';
import CountryDetail from './Component/CountryDetail/CountryDetail';
import { createContext, useEffect, useState } from 'react';

export const CountryContext = createContext();

function App() {
  const [countries, setCountries] = useState([]);
  useEffect(() => {
    fetch('https://restcountries.com/v3.1/all')
      .then(res => res.json())
      .then(data => setCountries(data))
  }, [])
  return (
    <div className="App">
      <Navbar />
      <CountryContext.Provider value={[countries, setCountries]}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/country/:id" element={<CountryDetail />} />
          <Route path="/about" element={<About />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </CountryContext.Provider>
    </div>
  );
}

export default App;
