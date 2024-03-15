import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
// import App from './App'
// import { AppRouter } from './routers/AppRouter'
// import App from './pages/SideBar'
import { AppRouter } from './routers/AppRouter'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <AppRouter />
)
