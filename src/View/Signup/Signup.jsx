import React, { useEffect } from 'react'
import { useLocation, useNavigate } from 'react-router-dom';
import getApp from '../getElement';
import { makeStyles } from '@mui/styles';
import soundWaveIcon from '../../images/icon/soundWaveIcon.png'
import buttonPauseIcon from '../../images/icon/buttonPauseIcon.png'
import sersSingleIcon from '../../images/icon/sersSingleIcon.png'
import { fontSize } from '@mui/system';


const useStyles = makeStyles((theme) => ({
  colDiv: {
    position: 'relative',
    width: 240,
    textAlign: 'left',
    marginBottom: 60,
    paddingLeft: 50,
  },
  colIcon: {
    position: 'absolute',
    top: -3,
    left: 0,
  },
  colTitle: {
    color: '#fff',
    fontSize: 18,
    marginBottom: 15,
  },
  colDesc: {
    color: '#fff',
    fontSize: 15,
    lineHeight: '24px',
  },
  signUpMainDiv: {
    display: 'flex',
    width: '100%',
    maxWidth: 860,
    margin: '180px auto 280px',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  signUpRight: {
    boxShadow: '0px 5px 25px rgba(0, 0, 0, 0.2)',
    width: 350,
    height: 544,
    backgroundColor: '#fff',
    borderRadius: 3
  },
  colTitleRight: {
    width: '100%',
    margin: '30px auto 0',
    fontSize: 24,
  },

}))
const Signup = () => {
  const location = useLocation();
  const classes = useStyles()
  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => {
      if (getApp() !== null) {
        if (location.pathname === '/register') {
          getApp().classList.remove('landing-bg')
          getApp().classList.add('singup-bg')
        }
      } else {
        getApp()
      }
    })
  })
  return (
    <>
      <div className={classes.signUpMainDiv}>
        <div>
          <div className={classes.colDiv}>
            <span className={classes.colIcon}><img src={soundWaveIcon} alt="" /></span>
            <h2 className={classes.colTitle}>Marketing</h2>
            <p className={classes.colDesc}>We've created the marketing campaign of the website. It was a very interesting collaboration.</p>
          </div>
          <div className={classes.colDiv}>
            <span className={classes.colIcon}><img src={buttonPauseIcon} alt="" /></span>
            <h2 className={classes.colTitle}>Fully Coded in HTML5</h2>
            <p className={classes.colDesc}>We've developed the website with HTML5 and CSS3. The client has access to the code using GitHub.</p>
          </div>
          <div className={classes.colDiv}>
            <span className={classes.colIcon}><img src={sersSingleIcon} alt="" /></span>
            <h2 className={classes.colTitle}>Built Audience</h2>
            <p className={classes.colDesc}>There is also a Fully Customizable CMS Admin Dashboard for this product.</p>
          </div>
        </div>
        <div className={classes.signUpRight}>
          <p className={classes.colTitleRight}>Register</p>
        </div>
      </div>

    </>
  )
}

export default Signup;