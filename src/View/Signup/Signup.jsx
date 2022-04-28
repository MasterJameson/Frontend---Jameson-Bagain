import React, { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom';
import getApp from '../getElement';
import soundWaveIcon from '../../images/icon/soundWaveIcon.png'
import buttonPauseIcon from '../../images/icon/buttonPauseIcon.png'
import sersSingleIcon from '../../images/icon/sersSingleIcon.png'
import dribbleIcon from '../../images/icon/dribbleIcon.png'
import signUpFbIcon from '../../images/icon/signUpFbIcon.png'
import signUpTwtIcon from '../../images/icon/signUpTwtIcon.png'
import fNameIcon from '../../images/icon/signUpUser.png'
import lNameIcon from '../../images/icon/signUpLastName.png'
import signUpEmail from '../../images/icon/signUpEmail.png'
import signupStyle from './style';



const Signup = () => {
  const location = useLocation();
  const classes = signupStyle()
  const navigate = useNavigate();

  const [register, setRegister] = useState({
    name: ''
  })

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
          <ul className={classes.listIcon}>
            <li><img src={signUpTwtIcon} alt="" /></li>
            <li><img src={dribbleIcon} alt="" /></li>
            <li><img src={signUpFbIcon} alt="" /></li>
          </ul>
          <p className={classes.subTitleRight}>or be classical</p>
          <form style={{ margin: '0 20px 60px' }}>
            <div className={classes.inputDiv}>
              <input
                required
                type="text"
                name="firstName"
                className={classes.inputStyle}
                // onChange={handlePhoneNumberChange}
                placeholder="First Name…"
              />
              <span className={classes.inputIcon}><img src={fNameIcon} alt="" /></span>
            </div>
            <div className={classes.inputDiv}>
              <input
                required
                type="text"
                name="lastName"
                className={classes.inputStyle}
                // onChange={handlePhoneNumberChange}
                placeholder="Last Name..."
              />
              <span className={classes.inputIcon}><img src={lNameIcon} alt="" /></span>
            </div>
            <div className={classes.inputDiv}>
              <input
                required
                type="text"
                name="email"
                className={classes.inputStyle}
                // onChange={handlePhoneNumberChange}
                placeholder="Your Email..."
              />
              <span className={classes.inputIcon}><img src={signUpEmail} alt="" /></span>
            </div>
            <div className={classes.inputDiv}>
              <input
                required
                type="password"
                name="password"
                className={classes.inputStyle}
                // onChange={handlePhoneNumberChange}
                placeholder="Your Password..."
              />
              <span className={classes.inputIcon}><img src={fNameIcon} alt="" /></span>
            </div>
            <div className={classes.inputDiv} style={{
              position: 'relative',
              display: 'flex',
              alignItems: 'center',
              margin: '0 auto',
            }}>
              <input type="checkbox" name="tnc" className={classes.inputCheck} />
              <label htmlFor='tnc' style={{ paddingLeft: 13 }}>I agree to the terms and conditions</label>
            </div>
            <button type='submit' className={classes.btnStyle}>Get Started</button>

          </form>
        </div>
      </div >

    </>
  )
}

export default Signup;