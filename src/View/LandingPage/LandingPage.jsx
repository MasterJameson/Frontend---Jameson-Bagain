import React, { useEffect, useState } from 'react'
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
    marginBottom: 190,
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
  const [responseApi, setResponseApi] = useState()


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
  useEffect(() => {
    if (token) {
      const bearer = 'Bearer ' + token;
      const url = 'https://astibot.unidelc.com/getusers.php'
      fetch(url, {
        method: 'GET',
        headers: { 'Authorization': bearer, 'Content-Type': 'application/json' },
      }).then(response => response.json()).then(data => setResponseApi(data))

    }
  }, [token])
  console.log('token', token)
  console.log('token', responseApi)

  return (
    <>
      <h1 className={classes.titleH1}>This is our great company.</h1>
      <p style={{margin: '20px', color: '#fff'}}>{responseApi !== undefined && responseApi.user.name}</p>
      <ul className={classes.listStyle}>
        <li className={classes.content}><img src={fcIcon} alt="" /></li>
        <li className={classes.content}><img src={twitterIcon} alt="" /></li>
        <li className={classes.content}><img src={googlIcon} alt="" /></li>
      </ul>
    </>

  )
}

export default LandingPage