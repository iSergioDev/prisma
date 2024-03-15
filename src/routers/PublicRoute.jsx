import React from 'react'
import PropTypes from 'prop-types'
import { Navigate } from 'react-router-dom'

export const PublicRoute = ({ children, isAuthenticated }) => {
  if (!isAuthenticated) {
    return children
  }

  return <Navigate to='/' />
}

PublicRoute.propTypes = {
  isAuthenticated: PropTypes.bool.isRequired
}
