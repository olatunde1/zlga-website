import React from 'react';
import {
  ChakraProvider,
  theme,
} from '@chakra-ui/react';
import Nav from '../src/components/Navbar/Nav'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from './components/LandingPage/LandingPage.jsx';
import About from './components/LandingPage/AboutUs/About.jsx';
import './style.css'

function App() {
  return (
    <>
   
    <ChakraProvider theme={theme}>
          {/* <ColorModeSwitcher justifySelf="flex-end" /> */}
          <BrowserRouter>
      <Routes>
        <Route path="/" element={<Nav />}>
          <Route index element = {<LandingPage />} />
          <Route path="about" element= {<About />} />
          </Route>
      </Routes>
         
          
          
          
          </BrowserRouter>
    </ChakraProvider>
    </>
  );
}

export default App;
