import React from 'react'

const DownloadSection = () => {
  const downloadInfo = [
    { label: 'Version', value: '1.0.1' },
    { label: 'Size', value: '~15 MB' },
    { label: 'Platform', value: 'Windows 10+' },
    { label: 'Requirements', value: '.NET 8' }
  ]

  const handleDownload = () => {
    // For a real implementation, this would point to your server
    // Examples:
    // window.location.href = '/download.php?file=JerryPlayer.exe&version=latest';
    // window.location.href = '/releases/latest/JerryPlayer.exe';
    
    // For now, show an informational message
    alert('Download functionality:\n\nIn a production environment, this would:\n1. Download JerryPlayer.exe from your server\n2. Log the download for analytics\n3. Serve the latest version automatically\n\nTo implement:\n- Host the exe file on your server\n- Update this function to point to the file URL\n- Consider using the included download.php script');
  }

  return (
    <section className="download" id="download">
      <h2>Download Jerry Player</h2>
      <p>Get the latest version of Jerry Player for Windows</p>
      <button onClick={handleDownload} className="cta-button">
        Download JerryPlayer.exe
      </button>
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
