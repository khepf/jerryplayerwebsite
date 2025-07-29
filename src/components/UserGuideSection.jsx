import React from 'react'

const UserGuideSection = () => {
  return (
    <section className="user-guide" id="guide">
      <h2>Quick Start Guide</h2>
      <div className="guide-content">
        <h3>🚀 Getting Started</h3>
        <ul>
          <li>Download and extract the <code>JerryPlayer.zip</code> file</li>
          <li>Run <code>JerryPlayer.exe</code> from the extracted folder</li>
          <li>Create a <code>Music</code> folder next to the application (folder must be named "Music")</li>
          <li>Organize your MP3 or FLAC files in subfolders by artist and year (see below).</li>
          <li>Or download one of the sample music libraries to get started quickly</li>
          <li>Launch Jerry Player and start enjoying your music collection.</li>
          <li><strong>Note: </strong>You might get a warning from Windows that it is an unrecognized app. Just click "More Info" and "Run Anyway".</li>
        </ul>

        <h3>📂 Organizing Your Music</h3>
        <p>For the best experience, organize your music using one of these folder structures:</p>
        
        <h4>📦 Sample Music Libraries</h4>
        <p>Download our sample libraries to get started instantly:</p>
        <ul>
          <li><strong>Show Library:</strong> Example shows organized in the 4-level structure (Band/Year/Show/Songs)</li>
          <li><strong>Song Library:</strong> Example shows organized in the 3-level structure (Band/Year/Show.mp3)</li>
        </ul>
        <p>Simply extract either sample library and use the ⭐ button in Jerry Player to point to the extracted Music folder.</p>
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
  )
}

export default UserGuideSection
