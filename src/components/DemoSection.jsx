import React from 'react'

const DemoSection = () => {
  return (
    <section className="demo" id="demo">
      <h2>See Jerry Player in Action</h2>
      <div className="video-container">
        <iframe
          src="https://www.youtube.com/embed/hBdS03ix5yA"
          title="Jerry Player Demo"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
          className="demo-video"
        ></iframe>
      </div>
      <p className="demo-description">
        Watch this quick demo to see how Jerry Player brings a vintage cassette tape experience to your digital music collection.
      </p>
    </section>
  )
}

export default DemoSection
