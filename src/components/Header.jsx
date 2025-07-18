import React from 'react'

const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <div className="header-content">
          <div className="logo">Jerry Player</div>
          <nav className="nav">
            <a href="#demo">Demo</a>
            <a href="#features">Features</a>
            <a href="#screenshots">Screenshots</a>
            <a href="#download">Download</a>
            <a href="#guide">User Guide</a>
          </nav>
        </div>
      </div>
    </header>
  )
}

export default Header
