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
            <p>No internet required. No installation required.</p>
            <a href="#download" className="cta-button" onClick={handleCTAClick}>Download Now</a>
          </section>

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
              <p>For the best experience, organize your music using one of these folder structures:</p>
              <p><strong>Option A - Direct Files (3-level):</strong></p>
              <pre><code>{`Music/
├── Example Band 1
│   ├── 1975
│   │   └── Red Rocks, Colorado.mp3
│   └── 1976
│       └── The Slippery Biscuit, Dayton Ohio.flac
└── Example Band 2
    ├── 1980
    │   └── Jackson Stadium, Chicago Illinois.mp3
    └── 1985
        └── Ed's Coffee Emporium, Toronto Canada.mp3`}</code></pre>
              
              <p><strong>Option B - Show Folders (4-level):</strong></p>
              <pre><code>{`Music/
├── Example Band 1
│   ├── 1975
│   │   └── Red Rocks, Colorado
│   │       ├── 01 - Opening Song.mp3
│   │       ├── 02 - Second Song.mp3
│   │       └── 03 - Encore.mp3
│   └── 1976
│       └── The Slippery Biscuit, Dayton Ohio
│           ├── Track 1.flac
│           └── Track 2.flac
└── Example Band 2
    ├── 1980
    │   └── Jackson Stadium, Chicago Illinois
    │       ├── Song A.mp3
    │       └── Song B.mp3
    └── 1985
        └── Ed's Coffee Emporium, Toronto Canada
            └── Full Show.mp3`}</code></pre>

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
