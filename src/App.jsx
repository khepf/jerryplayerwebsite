import React from 'react'
import Header from './components/Header'
import Features from './components/Features'
import DownloadSection from './components/DownloadSection'
import { trackButtonClick } from './utils/analytics'

function App() {
  const handleCTAClick = () => {
    trackButtonClick('download_now', 'hero');
  };

  return (
    <div className="App">
      <Header />

      <main className="main">
        <div className="container">
          <section className="hero">
            <h1>Jerry Player</h1>
            <p>A vintage-style music player with a unique cassette tape interface</p>
            <a href="#download" className="cta-button" onClick={handleCTAClick}>Download Now</a>
          </section>

          <Features />

          <section className="screenshots" id="screenshots">
            <h2>Screenshots</h2>
            <div className="screenshot-container">
              <img 
                src="/screenshot1.jpg" 
                alt="Jerry Player Interface" 
                className="screenshot"
              />
            </div>
          </section>

          <DownloadSection />

          <section className="user-guide" id="guide">
            <h2>Quick Start Guide</h2>
            <div className="guide-content">
              <h3>🚀 Getting Started</h3>
              <ul>
                <li>Download <code>JerryPlayer.exe</code> - no installation required!</li>
                <li>Or Download and Extract the <code>JerryPlayer.zip</code> file.</li>
                <li>Create a <code>Music</code> folder next to the application (folder must be named "Music")</li>
                <li>Organize your MP3 or FLAC files in subfolders by artist and year (see below).</li>
                <li>Launch Jerry Player and start enjoying your music collection.</li>
                <li><strong>Note: </strong>You might get a warning from Windows that it is an unrecognized app, because it's an .exe file. Just click "More Info" and "Run Anyway".</li>
              </ul>

              <h3>📂 Organizing Your Music</h3>
              <p>For the best experience, organize your music, and name your mp3 or FLAC files like this:</p>
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
                <li><strong>"NO AUDIO FILES FOUND":</strong> Make sure your music files are in MP3 or FLAC format</li>
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
