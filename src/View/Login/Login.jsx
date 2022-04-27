import React, { useEffect } from 'react'
import { useLocation, useNavigate } from 'react-router-dom';
import getApp from '../getElement';
import { makeStyles } from '@mui/styles';
import fNameIcon from '../../images/icon/firstNameIcon.png'
import lNameIcon from '../../images/icon/lastNameIcon.png'


const useStyles = makeStyles((theme) => ({
  inputStyle: {
    display: 'block',
    width: 255,
    padding: '16px 0 16px 55px',
    background: 'rgba(255, 255, 255, 0.1)',
    borderRadius: '23px',
    borderStyle: 'none',
    // fontFamily: 'Montserrat',
    fontStyle: 'normal',
    fontWeight: 400,
    fontSize: '12px',
    lineHeight: '15px',
    '&::placeholder ': {
      color: '#fff',
    }
  },
  inputDiv: {
    position: 'relative',
    width: 310,
    margin: '0 auto 10px',
  },
  inputIcon: {
    position: 'absolute',
    top: 15,
    left: 20,
  },
  formStyle: {
    display: 'block',
    marginTop: 328,
  },
  btnStyle: {
    width: 320,
    marginTop: 75,
    padding: '16px 0 16px',
    backgroundColor: '#F96332',
    border: 'none',
    borderRadius: '24px',
    color: '#fff',
    cursor: 'pointer',
  },
  anchor: {
    color: '#fff',
    fontSize: 12,
    margin: 0,
    cursor: 'pointer',
  },
  subLink: {
    display: 'flex',
    justifyContent: 'space-between',
    width: 320,
    margin: '12px auto 364px',
  }

}))

const Login = () => {
  const location = useLocation();
  const classes = useStyles()
  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => {
      if (getApp() !== null) {
        if (location.pathname === '/login') {
          getApp().classList.add('login-bg')
        }
      } else {
        getApp()
      }
    })
  })
  const hadleNavigateTo = (item) => {
    if (item === 'register') navigate('/register')
    if (item === 'contact') navigate('/contact')
  }

  return (
    <div>
      <form className={classes.formStyle}>
        <div className={classes.inputDiv}>
          <input
            required
            name="firstName"
            autoFocus
            className={classes.inputStyle}
            // onChange={handlePhoneNumberChange}
            placeholder="First Name…"
          />
          <span className={classes.inputIcon}><img src={fNameIcon} alt="" /></span>
        </div>
        <div className={classes.inputDiv}>
          <input
            required
            name="lastName"
            className={classes.inputStyle}
            // onChange={handlePhoneNumberChange}
            placeholder="First Name…"
          />
          <span className={classes.inputIcon}><img src={lNameIcon} alt="" /></span>
        </div>
        <button type='submit' className={classes.btnStyle}>Get Started</button>
        <div>
          <span>
          </span>
        </div>
      </form>
      <div className={classes.subLink}>
        <p className={classes.anchor} onClick={() => hadleNavigateTo('register')}>CREATE ACCOUNT</p>
        <p className={classes.anchor} onClick={() => hadleNavigateTo('contact')}>NEED HELP?</p>
      </div>
    </div>
  )
}

export default Login
