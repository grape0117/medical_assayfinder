import React from 'react';

import Header from '../components/Header/Header';
import DashImage from '../components/DashImage/DashImage';
import AboutUs from '../components/Home/AboutUs/AboutUs';
import Comprehensive from '../components/Home/Comprehensive/Comprehensive';
import Customers from '../components/Home/Customers/Customers';
import Contact from '../components/Contact/Contact';
import SectionIcon from '../components/SectionIcon/SectionIcon';
import Heading from '../components/Heading/Heading';
import SectionText from '../components/SectionText/SectionText';
import Post from '../components/Post/Post';
import '../App.scss';

function Home({ threeBest }) {
  const container = 'container';
  return (
    <>
      <Header/>
      <DashImage />
      <Post
        src={'/resources/posts/small-image.png'}
        content={"Assayfind is the one place you can find all providers who provide any diagnostic test in one place"}
      />
      <AboutUs />
      <Comprehensive />
      <Customers />
      <Contact />


      {/* <section className="section-aboutus ">
        <div className={container}>
          <Heading text="about" />
          <SectionIcon />
          <SectionText text="about" />
        </div>
      </section> */}

      {/* <section className="section our-best">
        <div className="container">
          <Heading text="best" />
          <OurBest threeBest={threeBest} />
        </div>
      </section> */}

      {/* <Footer /> */}
    </>
  );
}

export default Home;
