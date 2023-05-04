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
import Navbar from './components/Navbar.jsx'
import Footer from './components/Footer.jsx'
import { ColorModeSwitcher } from './ColorModeSwitcher';
import LandingPage from './components/LandingPage/LandingPage.jsx';
import './style.css'

function App() {
  return (
    <>
   
    <ChakraProvider theme={theme}>
          {/* <ColorModeSwitcher justifySelf="flex-end" /> */}
          <LandingPage />
    </ChakraProvider>
    </>
  );
}

export default App;
