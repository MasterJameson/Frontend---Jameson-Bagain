import React from 'react'
import { Link, useLocation } from 'react-router-dom';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme) => ({
  navUl: {
    listStyleType: 'none',
    margin: '0',
    padding: 0,
    backgroundColor: 'transparent',
    display: 'flex',
    fontSize: 10,
    fontStyle: 'normal',
    fontWeight: 400,
  },

  anchor: {
    display: 'block',
    paddingRight: 20,
    textDecoration: 'none',
    transition: '0.5s',
    // color: '#fff',
    fontSize: 12,
    [theme.breakpoints.down('sm')]: {
      textAlign: 'center',
    }
  },
  copyRight: {
    color: '#fff',
    fontSize: 12,
  },
  copyRightSpan: {
    color: '#F96332',
  },
  copyRight1: {
    color: '#2C2C2C',
    fontSize: 12,
  },

  footerContainer: {
    paddingTop: 32,
    paddingBottom: 32,
  },
  footContent: {
    maxWidth: 1100,
    width: '100%',
    margin: '0 auto',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
  },

}))
const Footer = () => {
  const location = useLocation();
  const classes = useStyles()
  console.log('location', location.pathname)
  return (
    <div className={`${classes.footerContainer}` + ' footer-bg'}>
      <div className={classes.footContent} >
        <ul className={classes.navUl}>
          <li>
            <Link to={''} className={classes.anchor} style={{ color: `${location.pathname === "/" ? "#2C2C2C" : '#fff'}` }}>{location.pathname === "/" ? 'HOME' : 'CREATIVE TIM'}</Link>
          </li>
          <li>
            <Link to={'about'} className={classes.anchor} style={{ color: `${location.pathname === "/" ? "#2C2C2C" : '#fff'}` }}>ABOUT US</Link>
          </li>
          <li>
            <Link to={'blog-post'} className={classes.anchor} style={{ color: `${location.pathname === "/" ? "#2C2C2C" : '#fff'}` }}>BLOG</Link>
          </li>
        </ul>
        {location.pathname === "/"
          ? <p className={classes.copyRight1}>© 2022, Designed by <span className={classes.copyRightSpan}> Asticom</span>. CTG</p>
          : <p className={classes.copyRight}>© 2019, Designed by <span className={classes.copyRightSpan}>Invision</span>. Coded by <span className={classes.copyRightSpan}>Creative Tim</span>.</p>
        }
      </div>
    </div>
  )
}

export default Footer