import { useEffect } from 'react'
import { Link, Route } from 'wouter'

import Navbar from './Navbar'
import Footer from './Footer'

import Home from './pages/home/index.jsx'
import GoldenTicket from './pages/golden-ticket/index.jsx'
import ContestRules from './pages/contest-rules/index.jsx'
// import Dropbox from './pages/dropbox/index.jsx'

function App() {
  return (
    <>
      <Navbar />
      <Route path="/" component={ Home } />
      {/* <Route path="/dropbox" component={ Dropbox } /> */}
      <Route path="/golden-ticket" component={ GoldenTicket } />
      <Route path="/terms-and-conditions" component={ ContestRules } />
      <Footer />
    </>
  )
}

export default App
