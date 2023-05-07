import React from 'react';
import {
  ChakraProvider,
  Box,
  Text,
  Link,
  VStack,
  Code,
  Grid,
  theme,
} from '@chakra-ui/react';
import ReactDOM from "react-dom/client";
import NavBar from './components/Navbar';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ColorModeSwitcher } from './ColorModeSwitcher';
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
        <Route path="/" element={<NavBar />}>
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
