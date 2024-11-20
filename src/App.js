import './App.css';
import React from 'react';
import Navbar from './components/Navbar';
import Welcome from './components/WelcomeSection';
import Companies from './components/CompaniesSection';
import Feature from './components/FeatureSection';
import Testimonial from './components/TestimonialSection';
import ExtraFeature from './components/ExtraFeature';
import FAQ from './components/FAQSection';
import BlogCard from './components/BlogCard';
import Trial from './components/TrialSection';
import Footer from './components/Footer';

function App() {
  return (
    <div>
      <Navbar />
      <Welcome />
      <Companies />
      <Feature />
      <Testimonial />
      <ExtraFeature />
      <FAQ />
      <BlogCard />
      <Trial />
      <Footer />
    </div>
  );
}

export default App;
