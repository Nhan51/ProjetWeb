import React from 'react'
import ReactDOM from 'react-dom/client'
import Welcome from './pages/welcome.jsx'
import './index.css'
import MainPage from './pages/mainPage.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <MainPage />
  </React.StrictMode>,
)
