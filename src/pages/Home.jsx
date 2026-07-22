import React from 'react'
import Header from "../components/Home/Header/Header";
import Navbar from '../components/Home/Navbar';
import Hero from '../components/Home/Hero';
import FeatureSection from '../components/Home/FeatureSection';
import Categories from '../components/Home/Categories/Categories';


const Home = () => {
  return (
    <>
     <Header />
     <Navbar />
     <Hero />
     <FeatureSection />
     <Categories />
   
    </>
  )
}

export default Home
