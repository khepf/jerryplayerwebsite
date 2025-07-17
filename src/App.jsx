import React from 'react'
import Header from './components/Header'
import Features from './components/Features'
import DownloadSection from './components/DownloadSection'

function App() {
  return (
    <div className="App">
      <Header />

      <main className="main">
        <div className="container">
          <section className="hero">
            <h1>Jerry Player</h1>
            <p>A vintage-style music player with a unique cassette tape interface</p>
            <a href="#download" className="cta-button">Download Now</a>
          </section>

          <Features />

          <section className="screenshots" id="screenshots">
            <h2>Screenshots</h2>
            <div className="screenshot-container">
              <img 
                src="/screenshot.jpg" 
                alt="Jerry Player Interface" 
                className="screenshot"
              />
            </div>
            <p style={{ marginTop: '1rem', opacity: '0.8' }}>
              The vintage-inspired interface with cassette tape design
            </p>
          </section>

          <DownloadSection />

          <section className="user-guide" id="guide">
            <h2>Quick Start Guide</h2>
            <div className="guide-content">
              <h3>🚀 Getting Started</h3>
              <ul>
                <li>Download and run <code>JerryPlayer.exe</code> - no installation required!</li>
                <li>Create a <code>Music</code> folder next to the application</li>
                <li>Organize your MP3 files in subfolders by artist and year</li>
                <li>Launch Jerry Player and start enjoying your music collection</li>
              </ul>

              <h3>📂 Organizing Your Music</h3>
              <p>For the best experience, organize your music like this:</p>
              <pre><code>{`Music/
├── Grateful Dead/
│   ├── 1977/
│   │   └── Cornell 5-8-77.mp3
│   └── 1978/
│       └── Red Rocks 7-8-78.mp3
└── Jerry Garcia Band/
    ├── 1990/
    │   └── Broadway 11-16-90.mp3
    └── 1991/
        └── Warfield 2-4-91.mp3`}</code></pre>

              <h3>🎮 Using the Controls</h3>
              <ul>
                <li><strong>Left Dial:</strong> Select a band/artist</li>
                <li><strong>Right Dial:</strong> Browse years for the selected artist</li>
                <li><strong>Double-click:</strong> Start playing a show</li>
                <li><strong>⭐ Star Button:</strong> Change music library folder</li>
                <li><strong>🎲 Random Button:</strong> Play a random show</li>
                <li><strong>Volume Slider:</strong> Adjust playback volume</li>
                <li><strong>Progress Bar:</strong> Click to jump to different parts</li>
              </ul>

              <h3>⌨️ Keyboard Shortcuts</h3>
              <ul>
                <li><strong>Spacebar:</strong> Play/Pause</li>
                <li><strong>Escape:</strong> Stop playback</li>
                <li><strong>F1:</strong> Open help dialog</li>
              </ul>

              <h3>🔧 Troubleshooting</h3>
              <ul>
                <li><strong>"FOLDER NOT FOUND":</strong> Create a Music folder or use the ⭐ button to select a different folder</li>
                <li><strong>"NO MP3 FILES FOUND":</strong> Make sure your music files are in MP3 format</li>
                <li><strong>Won't start:</strong> Ensure you have Windows 10+ with .NET 8 support</li>
              </ul>
            </div>
          </section>
        </div>
      </main>

      <footer className="footer">
        <div className="container">
          <p>&copy; {new Date().getFullYear()} Jerry Player - A retro music experience for the modern age</p>
        </div>
      </footer>
    </div>
  )
}

export default App
