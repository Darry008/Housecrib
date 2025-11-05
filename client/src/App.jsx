import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import { Hero } from './components/Hero'
import RecentlyAddedProperties from './components/RecentlyAddedProperties'
import CTO from './components/CTO'
import Footer from './components/Footer'
import Properties from './pages/Properties'

const Home = () => (
  <>
    <Navbar />
    <Hero />
    <RecentlyAddedProperties />
    <CTO />
    <Footer />
  </>
)

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/properties" element={<Properties />} />
    </Routes>
  )
}
