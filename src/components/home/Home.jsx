import React from 'react'
import Footer from './Footer'
import Header from './Header'
import MapSection from './MapSection'
import Nav from './Nav'
import ResourceSection from './ResourceSection'
import SearchSection from './SearchSection'


const Home = () => {
  return (
    <>
      <Nav/>
      <Header/>
      <MapSection/>
      <SearchSection/>
      <ResourceSection/>
      <Footer/>
    </>
  )
}

export default Home