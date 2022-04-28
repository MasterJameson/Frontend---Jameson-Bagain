import React, { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom';
import getApp from '../getElement';
import fNameIcon from '../../images/icon/firstNameIcon.png'
import lNameIcon from '../../images/icon/lastNameIcon.png'
import loginStyle from './style';


const Login = () => {
  const location = useLocation();
  const classes = loginStyle()
  const navigate = useNavigate();
  const [responseApi, setResponseApi] = useState()

  const [loginAcc, setLoginAcc] = useState({
    email: '',
    password: '',
  })

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
    if (item === '/') navigate('/')
    console.log(item)
  }

  const handleChange = (e) => {
    const name = e.target.name
    const value = e.target.value
    setLoginAcc({ ...loginAcc, [name]: value })
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      email: loginAcc.email,
      password: loginAcc.password,
    }
    const url = 'https://astibot.unidelc.com/login.php'
    fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data)
    }).then(response => response.json()).then(data => setResponseApi(data))

  }
  useEffect(() => {
    setTimeout(() => {
      if (responseApi !== undefined && responseApi.success === 1) {
        localStorage.setItem('token', responseApi.token)
        hadleNavigateTo('/')
      }
    }, 1000)
  }, [responseApi])


  return (
    <div>
      <form className={classes.formStyle}>
        <div className={classes.inputDiv}>
          <input
            required
            name="email"
            type="text"
            autoFocus
            className={classes.inputStyle}
            value={loginAcc.email}
            onChange={(e) => handleChange(e)}
            placeholder="Your Email…"
          />
          <span className={classes.inputIcon}><img src={fNameIcon} alt="" /></span>
        </div>
        <div className={classes.inputDiv}>
          <input
            required
            type="password"
            name="password"
            className={classes.inputStyle}
            value={loginAcc.password}
            onChange={(e) => handleChange(e)}
            placeholder="Your Password…"
          />
          <span className={classes.inputIcon}><img src={lNameIcon} alt="" /></span>
        </div>

        <button type='submit' className={classes.btnStyle} onClick={handleSubmit}>Get Started</button>
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
