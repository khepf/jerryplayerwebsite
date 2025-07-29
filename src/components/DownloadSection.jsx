import React from 'react'
import { trackDownload } from '../utils/analytics'

const DownloadSection = () => {
  const downloadInfo = [
    { label: 'Version', value: '1.1.1' },
    { label: 'Application Size', value: '~66 MB' },
    { label: 'Sample Libraries', value: '~15-25 MB each' },
    { label: 'Platform', value: 'Windows 10+' },
  ]

  const handleDownloadApp = () => {
    // Track the download event
    trackDownload('JerryPlayer.zip', 'application');
    
    // Download the zip file using the download.php script
    window.location.href = '/download.php?file=JerryPlayer.zip&version=latest';
  }

  const handleDownloadShowLibrary = () => {
    // Track the download event
    trackDownload('Music-Band-Year-Show.zip', 'sample_library_show');
    
    // Download the sample show library using the download.php script
    window.location.href = '/download.php?file=Music-Band-Year-Show.zip&version=latest';
  }

  const handleDownloadSongLibrary = () => {
    // Track the download event
    trackDownload('Music-Band-Year-Show-Song.zip', 'sample_library_song');
    
    // Download the sample song library using the download.php script
    window.location.href = '/download.php?file=Music-Band-Year-Show-Song.zip&version=latest';
  }

  return (
    <section className="download" id="download">
      <h2>Download Jerry Player & Sample Libraries</h2>
      <p>Get the latest version of Jerry Player and sample music libraries</p>
      
      <div className="download-buttons">
        <div className="download-option">
          <button onClick={handleDownloadApp} className="cta-button">
            Download Jerry Player
          </button>
          <p className="download-description">ZIP file containing application</p>
        </div>
        <div className="download-option">
          <button onClick={handleDownloadShowLibrary} className="cta-button secondary">
            Download Show Library
          </button>
          <p className="download-description">Sample music organized by band, year, show</p>
        </div>
        <div className="download-option">
          <button onClick={handleDownloadSongLibrary} className="cta-button secondary">
            Download Song Library
          </button>
          <p className="download-description">Sample music organized by band, year, show, song</p>
        </div>
      </div>
      
      <div className="download-info">
        {downloadInfo.map((info, index) => (
          <div key={index} className="download-detail">
            <strong>{info.label}:</strong> {info.value}
          </div>
        ))}
      </div>
    </section>
  )
}

export default DownloadSection
