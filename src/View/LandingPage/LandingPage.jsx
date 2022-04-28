import React, { useEffect } from 'react'
import { useLocation, useNavigate } from 'react-router-dom';
import getApp from '../getElement';
import { makeStyles } from '@mui/styles';
import fcIcon from '../../images/icon/fbIcon.png'
import twitterIcon from '../../images/icon/twitterIcon.png'
import googlIcon from '../../images/icon/googlIcon.png'


const useStyles = makeStyles((theme) => ({
  titleH1: {
    marginTop: 199,
    marginBottom: 24,
    fontSize: 49,
    color: '#fff',
  },
  listStyle: {
    display: 'flex',
    justifyContent: 'center',
    marginBottom: 229,
  },
  content: {
    paddingLeft: 6
  },


}))

const LandingPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const classes = useStyles()
  const token = localStorage.getItem('token')

  useEffect(() => {
    setTimeout(() => {
      if (getApp() !== null) {
        if (location.pathname === '/') {
          getApp().classList.add('landing-bg')
        }
      } else {
        getApp()
      }
    }, 1000)
  })
  console.log('token', token)

  return (
    <>
      <h1 className={classes.titleH1}>This is our great company.</h1>
      <ul className={classes.listStyle}>
        <li className={classes.content}><img src={fcIcon} alt="" /></li>
        <li className={classes.content}><img src={twitterIcon} alt="" /></li>
        <li className={classes.content}><img src={googlIcon} alt="" /></li>
      </ul>
    </>

  )
}

export default LandingPage