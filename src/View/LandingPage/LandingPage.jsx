import React, { useEffect } from 'react'
import { useLocation } from 'react-router-dom';
import getApp from '../getElement';

const LandingPage = () => {
  const location = useLocation();

  useEffect(() => {
    setTimeout(() => {
      if (getApp() !== null) {
        if (location.pathname === '/') {

          getApp().classList.add('landing-bg')
        }
      } else {
        getApp()
      }
    })
  })

  return (
    <div>LandingPage</div>
  )
}

export default LandingPage