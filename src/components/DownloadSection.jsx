import React from 'react'

const DownloadSection = () => {
  const downloadInfo = [
    { label: 'Version', value: '1.0.1' },
    { label: '.exe File Size', value: '~156 MB' },
    { label: '.zip File Size', value: '~66 MB' },
    { label: 'Platform', value: 'Windows 10+' },
  ]

  const handleDownloadExe = () => {
    // Download the exe file using the download.php script
    window.location.href = '/download.php?file=JerryPlayer.exe&version=latest';
  }

  const handleDownloadZip = () => {
    // Download the zip file using the download.php script
    window.location.href = '/download.php?file=JerryPlayer.zip&version=latest';
  }

  return (
    <section className="download" id="download">
      <h2>Download Jerry Player</h2>
      <p>Get the latest version of Jerry Player for Windows</p>
      
      <div className="download-buttons">
        <div className="download-option">
          <button onClick={handleDownloadExe} className="cta-button">
            Download JerryPlayer.exe
          </button>
          <p className="download-description">Direct executable file</p>
        </div>
        <div className="download-option">
          <button onClick={handleDownloadZip} className="cta-button secondary">
            Download JerryPlayer.zip
          </button>
          <p className="download-description">ZIP file containing .exe file</p>
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
