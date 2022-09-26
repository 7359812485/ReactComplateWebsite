import React from 'react';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
//import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import './App.css';
import { Route, BrowserRouter, Routes, } from 'react-router-dom';
import Home from './Componants/Home';
import About from "./Componants/About";
import Service from "./Componants/Service";
import Contact from "./Componants/Contact";
import Devbar from './Componants/Devbar';
import Footer from './Componants/Footer';
//import Balar from './Componants/BALARBAR';

const App = () => {
  return (<>
    <BrowserRouter>
      <Devbar/>
      <Routes>
        <Route exact path='/home' element={<Home />}></Route>
        <Route path='/about' element={<About />}></Route>
        <Route path='/service' element={<Service />}></Route>
        <Route path='/contact' element={<Contact />}></Route>
        {/*<Route path="*" element={<Home />} />
          */}
      </Routes>
      <Footer/>
    </BrowserRouter>
  </>
  );
}
export default App;
//ahi hu navbar no dropdown use nathi kari sakato karanke te js thi banavelu
//se atale me js ne import kariatale have chalase
//game te ak Route ma '/'apavano j
