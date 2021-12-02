import { useState } from 'react'
import Hero from './components/Hero/Hero'
import SearchBox from './components/Searchbar/SearchBox'
import Popular from './components/Popular/Popular'
import Blog from './components/Blog/Blog'
import Navbar from './components/Navbar/Navbar'
import Footer from './components/Footer/Footer'
import Question from './components/Questions/Question'

function App() {

  return (
    <div>
      <Navbar />
      <Hero />
      <SearchBox />
      <Popular />
      <Blog />
      <Question />
      <Footer />
    </div>
  )
}

export default App
