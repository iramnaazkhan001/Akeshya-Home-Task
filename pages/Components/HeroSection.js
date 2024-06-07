import React from 'react';
import Image from 'next/image';
import { Button } from 'react-bootstrap';

function HeroSection() {
  return (
    <section className="hero-section" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '50px' }}>
      <div className="hero-content" style={{ maxWidth: '700px' }}>
        <h1>Grow your business with Akeshya</h1>
        <p>We are a team of talented website designers, developers & digital marketeers</p>
        <Button className="custom-button" style={{ border: '2.5px solid #14279B', color: '#14279B', borderRadius: '40px', backgroundColor: 'white' }}>
          Get Started
        </Button>
      </div>
      <div className="hero-image-container">
        <Image src="/hero.png" alt="Hero Image" width={500} height={500} className="hero-image" />
      </div>
    </section>
  );
}

export default HeroSection;
