import React from 'react'
import Hero from '../components/Hero'
import Features from '../components/Features'
import NewArrivals from '../components/NewArrivals'
import PopularProduct from '../components/PopularProduct'
import Banner from '../components/Banner'
import About from '../components/About'
import Blog from '../components/Blog'
import NewsLatter from '../components/NewsLatter'
import Footer from '../components/Footer'

const Home = () => {
  return (
    <>
      <Hero />
      <Features />
      <NewArrivals />
      <PopularProduct />
      <Banner />
      <About />
      <Blog />
      <NewsLatter />
      <Footer />
    </>
  )
}

export default Home
