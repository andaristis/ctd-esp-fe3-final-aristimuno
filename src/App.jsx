import { Route, Routes } from 'react-router-dom'
import React from 'react';
import Footer from "./Components/Footer"
import Navbar from "./Components/Navbar"
import Home from "./Routes/Home"
import Favs from "./Routes/Favs"
import Detail from "./Routes/Detail"
import Contact from "./Routes/Contact"
import { useContextGlobal } from './Components/utils/global.context';


function App() {

  const {state} = useContextGlobal()
  return (
      <>
        <div className={`App ${state.theme === 'dark' ? 'dark' : ''}`}>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/favs' element={<Favs />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/detail/:id' element={<Detail />} />
          <Route path='*' element={<h1>Page not found - Error 404</h1>} />
        </Routes>
        <Footer />
        </div>
      </>
  );
}

export default App;
