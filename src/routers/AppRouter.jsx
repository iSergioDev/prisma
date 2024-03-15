import React, { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { App } from '../pages/SideBar'
import { LoginScreen } from '../pages/LoginScreen'
import { PrivateRoute } from './PrivateRoute'
import { PublicRoute } from './PublicRoute'

export const AppRouter = () => {
  const [isLog, setIsLog] = useState(false)
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route
            path='/*'
            element={
              <PrivateRoute isAuthenticated={isLog}>
                <App isAuthenticated={isLog} setLog={setIsLog} />
              </PrivateRoute>
          }
          />
          <Route
            path='/auth/login'
            element={
              <PublicRoute isAuthenticated={isLog}>
                <LoginScreen isAuthenticated={isLog} setLog={setIsLog} />
              </PublicRoute>
          }
          />
        </Routes>
      </BrowserRouter>
    </div>
  )
}
