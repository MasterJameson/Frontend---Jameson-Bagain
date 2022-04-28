import React from 'react'
import { Link, useLocation } from 'react-router-dom';
import footerStyle from './style';


const Footer = () => {
  const location = useLocation();
  const classes = footerStyle()
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