import React from 'react'
import Aside from "./Aside";

import Footer from "./Footer";

import { BrowserRouter } from "react-router-dom";


import RoutesIndex from "../router/RoutesIndex";
import Navbar from './Navbar';


function DashboardComponent() {
  return (
    <BrowserRouter>
    <Aside />
    <Navbar />
    <RoutesIndex/>
    
    <Footer />
    </BrowserRouter>
  
  )
}

export default DashboardComponent