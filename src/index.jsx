import React from 'react'
import ReactDOM from 'react-dom/client'
import { main } from './components/main'
import { BrowserRouter } from 'react-router-dom';
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <main />
  </BrowserRouter>
)
