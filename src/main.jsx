import React from "react"
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Header from "./components/Header.jsx"
import Body from "./components/Body.jsx"
import PropertyFeatures from "./components/PropertyFeatures.jsx"
import Property from "./components/Property.jsx"
import Awards from "./components/Awards.jsx"
import Locations from "./components/Locations.jsx"
import Agents from "./components/Agents.jsx"
import Package from "./components/Package.jsx"
import Footer from "./components/Footer.jsx"


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Header/>
    <Body />
    <PropertyFeatures />
    <Property />
    <Awards/>
    <Locations/>
    <Agents />
    <Package />
    <Footer />
  </StrictMode>
)
