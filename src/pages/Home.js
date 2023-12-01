import React from 'react';

import Header from '../components/Header/Header';
import Promo from '../components/Promo/Promo';
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
      <Promo />
      <Post
        src={'/resources/posts/small-image.png'}
        content={"Assayfind is the one place you can find all providers who provide any diagnostic test in one place"}
      />
      <Post
        src={'/resources/posts/small-image.png'}
        content={"At Assay find , we make it easy for you to find the  laboratory test provider for your specific testing needs"}
      />

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
