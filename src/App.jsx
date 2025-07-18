import React from 'react'
import Header from './components/Header'
import HeroSection from './components/HeroSection'
import DemoSection from './components/DemoSection'
import Features from './components/Features'
import ScreenshotsSection from './components/ScreenshotsSection'
import DownloadSection from './components/DownloadSection'
import UserGuideSection from './components/UserGuideSection'
import DonateSection from './components/DonateSection'
import Footer from './components/Footer'

function App() {
  return (
    <div className="App">
      <Header />

      <main className="main">
        <div className="container">
          <HeroSection />

          <DemoSection />

          <Features />

          <ScreenshotsSection />

          <DownloadSection />

          <UserGuideSection />

          <DonateSection />
        </div>
      </main>

      <Footer />
    </div>
  )
}

export default App
