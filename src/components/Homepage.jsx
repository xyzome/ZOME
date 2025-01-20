import React from 'react';
import { Helmet } from "react-helmet";
import Hero from './Hero';
import Stat from './Stat';
import Features from './Features';
import CTA from './CTA';
import Testimonial from './Testimonial';
import Projects from './Projects';

function Homepage() {
  return (
    <>
      <Helmet>
        <meta
          name="description"
          content="Zome helps you connect with friends, family, and communities of people who share your interests. Discover new groups, watch engaging content, and shop in the marketplace all in one place."
        />
        <meta name="robots" content="index, follow" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Zome - Tech Agency" />
        <meta property="og:description" content="Zome helps you connect with friends, family, and communities of people who share your interests. Discover new groups, watch engaging content, and shop in the marketplace all in one place." />
        <meta property="og:image" content="path-to-your-image.jpg" /> {/* Replace with your image URL */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Join Zome - Connecting People" />
        <meta name="twitter:description" content="Zome helps you connect with friends, family, and communities of people who share your interests. Discover new groups, watch engaging content, and shop in the marketplace all in one place." />
        <meta name="twitter:image" content="path-to-your-image.jpg" /> {/* Replace with your image URL */}
        <title>Zome - Tech Agency | IT Solutions, Web Development, and Digital Growth</title>
      </Helmet>

      <Hero />
      <Stat />
      <Features />
      <Projects />
      <CTA />
      <Testimonial />
    </>
  );
}

export default Homepage;
