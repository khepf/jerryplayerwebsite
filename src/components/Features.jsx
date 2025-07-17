import React from 'react'

const FeatureCard = ({ icon, title, description }) => {
  return (
    <div className="feature-card">
      <h3>{icon} {title}</h3>
      <p>{description}</p>
    </div>
  )
}

const Features = () => {
  const features = [
    {
      icon: '🎵',
      title: 'Retro Cassette Interface',
      description: 'Experience music playback with a nostalgic cassette tape design that actually spins during playback, just like the real thing!'
    },
    {
      icon: '🎛️',
      title: 'Intuitive Controls',
      description: 'Navigate your music collection with smooth circular dials for band selection and year browsing. Simple and elegant.'
    },
    {
      icon: '📁',
      title: 'Folder Organization',
      description: 'You must organize your MP3 collection by artist and year (See Quick Start guide below). Perfect for live music collections and concert recordings.'
    },
    {
      icon: '🎲',
      title: 'Random Discovery',
      description: 'Discover forgotten gems with the random play feature that selects shows from your entire music library.'
    },
    {
      icon: '🎚️',
      title: 'Full Playback Control',
      description: 'Play, pause, stop, volume control, and seek functionality with a beautiful progress bar and digital time display.'
    },
    {
      icon: '💿',
      title: 'MP3 Support for Any Band',
      description: 'Built specifically for any MP3 files. Any artist or band will work. I just happen to really like the Grateful Dead. 🐻'
    }
  ]

  return (
    <section className="features" id="features">
      <h2>Features</h2>
      <div className="features-grid">
        {features.map((feature, index) => (
          <FeatureCard
            key={index}
            icon={feature.icon}
            title={feature.title}
            description={feature.description}
          />
        ))}
      </div>
    </section>
  )
}

export default Features
