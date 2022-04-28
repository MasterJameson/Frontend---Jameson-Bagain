import React, { useEffect } from 'react'
import { useLocation, useNavigate } from 'react-router-dom';
import getApp from '../getElement';
import { makeStyles } from '@mui/styles';
import soundWaveIcon from '../../images/icon/soundWaveIcon.png'
import buttonPauseIcon from '../../images/icon/buttonPauseIcon.png'
import sersSingleIcon from '../../images/icon/sersSingleIcon.png'
import dribbleIcon from '../../images/icon/dribbleIcon.png'
import signUpFbIcon from '../../images/icon/signUpFbIcon.png'
import signUpTwtIcon from '../../images/icon/signUpTwtIcon.png'
import fNameIcon from '../../images/icon/signUpUser.png'
import lNameIcon from '../../images/icon/signUpLastName.png'
import signUpEmail from '../../images/icon/signUpEmail.png'

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
    margin: '30px auto 20px',
    fontSize: 24
  },
  listIcon: {
    display: 'flex',
    justifyContent: 'center',
    marginBottom: 31,
    '&>li': {
      paddingRight: 14,
    }
  },
  subTitleRight: {
    marginBottom: 20,
    fontSize: 18,
    color: '#9A9A9A',
  },
  inputDiv: {
    position: 'relative',
    width: 310,
    margin: '0 auto 20px',

  },
  inputIcon: {
    position: 'absolute',
    top: 10,
    left: 20,
  },
  inputStyle: {
    display: 'block',
    width: '100%',
    padding: '11px 0 10px 54px',
    border: '1px solid #E3E3E3',
    boxSizing: 'border-box',
    borderRadius: '18px',
    fontStyle: 'normal',
    fontWeight: 400,
    fontSize: '12px',
    lineHeight: '15px',
    '&::placeholder ': {
      color: 'rgba(44, 44, 44, 0.5)',
    }
  },
  btnStyle: {
    width: 177,
    marginTop: 58,
    padding: '17px 0 16px',
    backgroundColor: '#F96332',
    fontSize: 14,
    border: 'none',
    borderRadius: '24px',
    color: '#fff',
    cursor: 'pointer',
  },
  inputCheck: {
    border: '1px solid #E3E3E3',
    boxSizing: 'border-box',
    borderRadius: '3px',
    height: 26,
    width: 26,
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
          <ul className={classes.listIcon}>
            <li><img src={signUpTwtIcon} alt="" /></li>
            <li><img src={dribbleIcon} alt="" /></li>
            <li><img src={signUpFbIcon} alt="" /></li>
          </ul>
          <p className={classes.subTitleRight}>or be classical</p>
          <form style={{ margin: '0 20px' }}>
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