import React, {useContext} from "react";
import { AppContext, useGlobalContext } from "./context";
import Navbar from './Navbar';
import Sidebar from './Sidebar';
import Hero from './Hero';
import Submenu from './Submenu';

import hero from './images/hero.svg';
import logo from './images/logo.svg';
import phone from './images/phone.svg';

function App() {
  
  return (
    <div >
      <Navbar/>
      <Sidebar/>
      <Hero/>
      <Submenu/>
      
    </div>
  );
}

export default App;
