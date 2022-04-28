import React, { useEffect } from 'react'
import { useLocation, useNavigate } from 'react-router-dom';
import getApp from '../getElement';
import fNameIcon from '../../images/icon/firstNameIcon.png'
import lNameIcon from '../../images/icon/lastNameIcon.png'
import loginStyle from './style';


const Login = () => {
  const location = useLocation();
  const classes = loginStyle()
  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => {
      if (getApp() !== null) {
        if (location.pathname === '/login') {
          getApp().classList.remove('landing-bg')
          getApp().classList.remove('singup-bg')
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
            placeholder="Your Email…"
          />
          <span className={classes.inputIcon}><img src={fNameIcon} alt="" /></span>
        </div>
        <div className={classes.inputDiv}>
          <input
            required
            name="lastName"
            className={classes.inputStyle}
            // onChange={handlePhoneNumberChange}
            placeholder="Your Password…"
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
