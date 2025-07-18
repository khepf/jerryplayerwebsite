import React from 'react'

const DonateSection = () => {
  return (
    <section className="donate-section" id="donate">
      <h2>Support Jerry Player Development</h2>
      <p>Help us continue improving Jerry Player and adding new features.</p>
      <div className="donate-buttons">
        <a 
          href="https://buymeacoffee.com/jerryplayer" 
          target="_blank" 
          rel="noopener noreferrer"
          className="donate-button buymeacoffee"
        >
          <span className="donate-icon">☕</span>
          <span className="donate-text">Buy Me a Coffee</span>
        </a>
        <a 
          href="https://gofund.me/4fafb56e" 
          target="_blank" 
          rel="noopener noreferrer"
          className="donate-button gofundme"
        >
          <span className="donate-icon">💖</span>
          <span className="donate-text">Support on GoFundMe</span>
        </a>
      </div>
      <p className="donate-note">
        Every contribution helps keep Jerry Player free and supports continued development. Thank you for your support! 🎵
      </p>
    </section>
  )
}

export default DonateSection
