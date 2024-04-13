import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import AppContador from './pages/AppContadorNumeros.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <div className="w-full h-screen flex justify-center pt-[100px] bg-[#202020]">
      <AppContador />
    </div>
  </React.StrictMode>,
)
