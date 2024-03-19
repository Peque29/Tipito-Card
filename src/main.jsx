import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import NavBar from '/src/components/NavBar'
import Footer from '/src/components/Footer'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <div class="rounded grid w-screen h-screen">
      <NavBar />
      <App />
      <Footer />
    </div>
  </React.StrictMode>,
)
