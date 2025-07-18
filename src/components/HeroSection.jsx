import React from 'react'
import { trackButtonClick } from '../utils/analytics'

const HeroSection = () => {
  const handleCTAClick = () => {
    trackButtonClick('download_now', 'hero');
  };

  return (
    <section className="hero">
      <h1>Jerry Player</h1>
      <p>A vintage-style music player with a unique cassette tape interface</p>
      <p>No internet required. No installation required.</p>
      <a href="#download" className="cta-button" onClick={handleCTAClick}>Download Now</a>
    </section>
  )
}

export default HeroSection
