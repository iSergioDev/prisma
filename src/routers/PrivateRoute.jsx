import React from 'react'
import PropTypes from 'prop-types'
import { Navigate } from 'react-router-dom'

export const PrivateRoute = ({ children, isAuthenticated }) => {
  if (!isAuthenticated) {
    return <Navigate to='/auth/login' />
  }

  return children
}

PrivateRoute.propTypes = {
  isAuthenticated: PropTypes.bool.isRequired
}
